def display_clients
  $shelter[:clients].each do |key, client|
    puts key
  end
end

def display_animals
  $shelter[:animals].each do |key, animal|
    puts key
  end
end