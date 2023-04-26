# frozen_string_literal: true

require 'oso-cloud'
require 'sinatra'

api_key = '<please provide your api key here>'
oso = OsoCloud::Oso.new(url: 'https://cloud.osohq.com', api_key:)

get '/organization/:id' do
  org_id = params['id']

  actor = OsoCloud::Value.new(type: 'User', id: 'anonymous')
  resource = OsoCloud::Value.new(type: 'Organization', id: org_id)

  if !oso.authorize(actor, 'view', resource)
    halt 404, "Not Found\n"
  else
    "{ \"id\": \"#{org_id}\" }"
  end
end

set :port, 8000
