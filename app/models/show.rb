class Show
  include Mongoid::Document
  field :venue, type: String
  field :date, type: String
  field :door_time, type: String
  field :set_time, type: String
  field :title, type: String
  field :cost, type: String
end
