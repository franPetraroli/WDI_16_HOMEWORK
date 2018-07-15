require 'pry'
require 'tty-prompt'
require_relative 'animals'
require_relative 'clients'
require_relative 'display'

$prompt = TTY::Prompt.new(interrupt: :signal)
$shelter = {clients: {}, animals: {} }

def top
  $prompt.warn "Welcome to Happy Tails Manager CLI"
  
  $happy_tail = $prompt.select("Select an Option: ", per_page: 7) do |menu|
    menu.choice 'Display all animals', 1
    menu.choice 'Display all clients', 2
    menu.choice 'Insert new animal',  3
    menu.choice 'Insert new client',  4
    menu.choice 'Facilitate client adopts an animal',  5
    menu.choice 'Facilitate client puts an animal up for adoption',  6
    menu.choice 'Quit',  7
    menu.default 1
  end
end

def main
  case $happy_tail
  when 1
    display_animals()
    run()
  when 2
    display_clients()
    run()
  when 3
    add_animal()
  when 4
    add_client()
  when 5
    client_adoption()
  when 6
    client_give_away()
  when 7
    puts "Quit"
  else
    abort 'Quiting. Nothing to do.'
  end
  puts $animal
  puts $clients
end

def add_animal
  $animal = $prompt.collect do
    key(:name).ask('Name?')

    key(:age).ask('Age?', convert: :int)
    key(:gender).ask('gender?')
    key(:species).ask('Species?')
    key(:adoption).ask('Available for adoption?', convert: :bool)
    while $prompt.yes?("Any Toys?")
      key(:toys).values do
        key(:toy).ask('Toy?')
      end
    end
  end

  Animal.new(
    $animal[:name], 
    $animal[:age], 
    $animal[:gender], 
    $animal[:species],
    $animal[:adoption],
    $animal[:toys])

  run()
end

def add_client
  $client = $prompt.collect do
    key(:name).ask('Name?')

    key(:age).ask('Age?', convert: :int)
    key(:number_of_children).ask('How many Children?')
  end

  Client.new(
    $client[:name],
    $client[:age],
    $client[:number_of_children]
  )
  run()
end

def client_adoption
  $prompt.collect do
    $select_client = $prompt.select("Select a Client: ") do |menu|
      $shelter[:clients].each do |key, client|
        menu.choice key
      end
    end
    $select_animal = $prompt.select("Select an Animal to Adopt: ") do |menu|
      $shelter[:animals].each do |key, animal|
        menu.choice key
      end
    end
  end
  adopt_animal($select_client,$select_animal)
  run()
end

def client_give_away
  $prompt.collect do
    $select_client = $prompt.select("Select a Client: ") do |menu|
      $shelter[:clients].each do |key, client|
        menu.choice key
      end
    end
    $select_animal = $prompt.select("Select an Animal to give away: ") do |menu|
      $shelter[:clients][$select_client][:pets].each_index do |index|
        menu.choice $shelter[:clients][$select_client][:pets][index][:name]
      end
    end
  end
  give_away($select_client,$select_animal)
  run()
end

def adopt_animal(client, animal)
  if($shelter[:animals][animal.downcase][:adoption] == true)
    $shelter[:animals][animal.downcase][:adoption] = false
    $shelter[:clients][client.downcase][:pets].push($shelter[:animals][animal.downcase])
  else
    puts "#{animal} is not available for adoption"
  end
end

def give_away(client, animal)
  $shelter[:animals][animal.downcase][:adoption] = true
  $shelter[:clients][client.downcase][:pets].delete_if { |hash| 
    hash[:name] == $shelter[:animals][animal.downcase][:name]}
end

genny = Client.new('Genny', '40', '0')
# gigi = Client.new('Gigi', '45', '2')
# oscar = Client.new('Oscar', '45', '2')
puffy = Animal.new('Puffy', '1', 'male', 'dog',true,['ball', 'fake bone'])
# ruffy = Animal.new('Ruffy', '1', 'male', 'parrot',true,['stand', 'bird toy'])
# sissi = Animal.new('Sissi', '1', 'female', 'cat',true,['fake mouse', 'shoe box'])

def run
  top()
  main()
end

run()



