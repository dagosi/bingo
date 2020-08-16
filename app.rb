require 'sinatra'

get '/' do
  send_file 'index.html'
end

get '/bingo.css' do
  send_file 'bingo.css'
end

get '/bingo.js' do
  send_file 'bingo.js'
end
