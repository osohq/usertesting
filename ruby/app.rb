# frozen_string_literal: true

require 'sinatra'

get '/organization/:id' do
  org_id = params['id']

  "{ \"id\": \"#{org_id}\" }"
end

set :port, 8000
