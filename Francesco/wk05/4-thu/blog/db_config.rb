require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'blog'
}

ActiveRecord::Base.establish_connection(options)