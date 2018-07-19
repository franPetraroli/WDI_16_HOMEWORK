require 'pry'
require 'sinatra'
require 'pg'
require 'sinatra/reloader'
require_relative 'db_config'
require_relative 'model/Post'

get '/' do
  @result = Post.all
  erb :index
end

get '/post/:id' do
  @result = Post.find(params[:id])
  puts @result
  erb :post
end

get '/new' do
  erb :new
end

post '/new' do
  new_post = Post.new
  new_post.title = params[:title]
  new_post.plot = params[:body]
  new_post.image_url = params[:img]
  new_post.author = params[:author]
  new_post.save
  redirect '/'
end

get '/edit/:id' do
  @result = Post.find(params[:id])
  erb :edit
end

put '/edit/:id' do 
  post = Post.find(params[:id])
  post.title = params[:title]
  post.author = params[:author]
  post.plot = params[:body]
  post.image_url = params[:img]
  post.save
 redirect '/'
end

delete '/delete/:id' do
  result = Post.find(params[:id])
  result.destroy
  redirect '/'
end


