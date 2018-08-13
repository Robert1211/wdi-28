class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order('created_at DESC') # Fruit.all.reverse

    # Check the docs for the details on `respond_to`
    respond_to do |format|
      format.html {} # This empty blocks means Rails should follow its default behaviour
      format.json { render :json => @fruits  }
    end
  end
end
