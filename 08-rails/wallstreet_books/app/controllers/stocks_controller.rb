class StocksController < ApplicationController
  def form
    render :form
  end

  def info
    @data = StockQuote::Stock.quote params[:stock_symbol]
    if @data.nil?
      redirect_to stocks_path
    else
      render :info
    end
  end
end
