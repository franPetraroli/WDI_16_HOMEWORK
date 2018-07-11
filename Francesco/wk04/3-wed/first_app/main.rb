require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'
require 'json'

get '/' do
  erb(:index)
end
get '/test' do
  return "<h2> hello #{params['name']}</h2>"
end
get '/about' do
  erb(:about)
end
get '/result' do
  @input = params[:input].upcase
  @stock = StockQuote::Stock.raw_quote(@input)

  erb(:result)
end
