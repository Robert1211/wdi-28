class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 234.034348
    @large_number = 4240342329528
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a.shuffle
    @friend_count = 1
    @enemies_count = 15
    @story = "A very long long long long long long long long long long long long time ago"
  end

  def assets
  end

  def url
  end

end
