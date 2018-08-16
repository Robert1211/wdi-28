class PagesController < ApplicationController
  def home
  end

  def hamldemo
    @number = rand(1..20)
  end
end
