class HomesController < ApplicationController
  layout "bear_invaders", :only => [ :invaders ]

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

  def invaders
  end
end
