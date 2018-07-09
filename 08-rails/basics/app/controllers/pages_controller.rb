class PagesController < ApplicationController
  def homepage
    render :homepage # erb :homepage in Sinatra
  end

  def faq
    render :faq # erb :faq
  end

  def about
    render :about
  end
end
