class WorksController < ApplicationController
  def index
    @works = Work.all
  end

  def show
    @work = Work.find params[:id]
  end

  def new
    @work = Work.new
  end

  def create
    work = Work.create work_params
    redirect_to work # GET show page
  end

  def edit
  end

  private
  def work_params
    # Whitelist of permitted params
    params.require(:work).permit(:title, :year, :medium, :style, :image)
  end
end
