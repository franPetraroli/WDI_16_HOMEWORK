require_relative 'main'
class Animal < Main
  attr_accessor :gender, :species, :toys

  def initialize(name, age, gender,species,adoption,toys)
    super(name,age)
    @geneder = gender
    @species = species
    @adoption = adoption
    @toys = toys
    self.add_to_shelter
  end
  
  def add_to_shelter
    $shelter[:animals][self.name.downcase] = {
      name: self.name,
      age: self.age,
      gender: self.gender,
      species: self.species,
      adoption: true,
      toys: self.toys
    }
  end
end