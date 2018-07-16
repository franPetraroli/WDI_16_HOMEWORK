require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  if(params[:search])
    input = params[:search].downcase
  else
    input = 'bruce lee'
  end
  @result = HTTParty.get("http://omdbapi.com/?s=#{input}&apikey=2f6435d9")
  erb :index, :layout => :layout
end

get '/result' do
  input = params[:title]
  @result = HTTParty.get("http://omdbapi.com/?t=#{input}&apikey=2f6435d9")
  puts @result['Ratings'][0]['Value']
  erb :result, :layout => :layout
end

get '/about' do
  
  erb :about, :layout => :layout
end






