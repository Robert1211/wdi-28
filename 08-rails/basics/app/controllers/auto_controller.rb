class AutoController < ApplicationController
  def color
    # raise "hell" # or anything else that triggers an error
    render :color
  end

  def engine
    render :engine
  end
end
