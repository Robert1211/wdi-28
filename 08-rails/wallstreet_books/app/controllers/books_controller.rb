class BooksController < ApplicationController
  def form
    render :form
  end

  def info
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:title] }"
    data = HTTParty.get book_url
    @cover = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    render :info
  end
end
