class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order('created_at DESC') # Fruit.all.reverse

    # Check the docs for the details on `respond_to`
    respond_to do |format|
      format.html {} # This empty blocks means Rails should follow its default behaviour
      format.json { render :json => @fruits  }
    end
  end

  def create
    @fruit = Fruit.new fruit_params
    if @fruit.save
      redirect_to @fruit
    else
      render :new
    end
  end

  private
  def fruit_params
    params.require(:fruit).permit(:name)
  end
end
