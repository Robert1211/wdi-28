class DashboardController < ApplicationController
  def brother
    brother = %w{ Groucho Harpo Chico Gummo Zeppo }.sample
    render :plain => brother
  end

  def time
    render :plain => Time.now
  end

  def uptime
    uptime = `uptime` # Such backticks won't work on Heroku
    render :plain => uptime
  end

  def info
    time = Time.now
    brother = %w{ Groucho Harpo Chico Gummo Zeppo }.sample
    uptime = `uptime` # Such backticks won't work on Heroku

    info = {
      :brother => brother,
      :time => time,
      :uptime => uptime,
      :fortune => `fortune`
    }

    render :json => info
  end
end
