     
require 'sinatra'
require 'sinatra/reloader'
require 'pry'


get '/' do
  @bottles = 99
  erb :index
end

get '/:bottles' do
  @bottles = params[:bottles].to_i
  erb :index
end





