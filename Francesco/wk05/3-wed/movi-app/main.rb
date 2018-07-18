require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require 'pry'

def run_sql(sql)
  db = PG.connect(dbname: 'movies')
  result = db.exec(sql)
  db.close
  return result
end

get '/' do
  if(params[:search])
    input = params[:search].downcase
  else
    input = 'mafia'
  end
  @result = HTTParty.get("http://omdbapi.com/?s=#{input}&apikey=2f6435d9")

  erb :index, :layout => :layout
end

get '/result' do
  input = params[:title]
  input_san = input.gsub("'", '"')
  sql = "select * from movies where title='#{input_san}'"
  fetch = run_sql(sql).first
  @result = {}
  if(fetch == nil)
    @result = HTTParty.get("http://omdbapi.com/?t=#{input}&apikey=2f6435d9")
    sql = "insert into movies(title, poster, plot, released, runtime, genre, actors) values('#{@result['Title']}', '#{@result['Poster']}', '#{@result['Plot'].gsub!("'", ' ')}', '#{@result['Year']}', '#{@result['Runtime']}', '#{@result['Genre']}', '#{@result['Actors'].gsub!("'", ' ')}')"
    run_sql(sql)
  elsif
    @result["Title"] = fetch["title"]
    @result["Poster"] = fetch["poster"]
    @result["Plot"] = fetch["plot"]
    @result["Year"] = fetch["year"]
    @result["Runtime"] = fetch["runtime"]
    @result["Genre"] = fetch["genre"]
    @result["Actors"] = fetch["actors"]
    @result["Ratings"] = []
    @result["Ratings"].push({"Value"=> fetch["imdb"]})
  end
  erb :result, :layout => :layout
end

get '/about' do
  erb :about, :layout => :layout
end







