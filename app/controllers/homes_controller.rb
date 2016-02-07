class HomesController < ApplicationController
  def index
  end

  def media
    @test = "test"
  end

  def about
  end

  def contact
  end

  def calendar
    @shows = Show.all
  end
end
