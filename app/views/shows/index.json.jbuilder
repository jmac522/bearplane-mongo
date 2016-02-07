json.array!(@shows) do |show|
  json.extract! show, :id, :venue, :date, :door_time, :set_time, :title, :cost
  json.url show_url(show, format: :json)
end
