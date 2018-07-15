require_relative 'main'
require 'pry'
class Client < Main
  attr_accessor :number_of_childern, :pets

  
  def initialize(name, age, number_of_childern,pets = nil)
    super(name, age)
    @number_of_childern = number_of_childern
    @pets = []
    if(pets != nil)
      @pets.push(pets)
    end
    self.add_to_shelter
  end
  
  def add_to_shelter
    $shelter[:clients][self.name.downcase] = {
      name: self.name,
      age: self.age,
      number_of_childern: self.number_of_childern,
      pets: self.pets
    }
  end
end