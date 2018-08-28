class ChargesController < ApplicationController
  def new
  end

  def create
    @amount = 500 # Currency is in cents: $5.00
    # IRL you might have Order.find params[:order_id]; @order.amount

    # Create a customer on Stripe.com
    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :source => params[:stripeToken]
    )

    # Create a payment (give me your money)
    charge = Stripe::Charge.create(
      :customer => customer.id,
      :amount => @amount,
      :description => 'Signed photo of me',
      :currency => 'aud'
    )

  # Here we tell Ruby/Rails how to "rescue" a card error that might be "thrown" above.
  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end
end
