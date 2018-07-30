require 'pry'

class Robot
  attr_accessor :instruction_count, :boot, :creation

  def initialize
    @creation = Time.now
    @boot = @creation
    @instruction_count = 0
    @set_name = random_name
  end

  def name
    @instruction_count += 1
    @set_name
  end

  def random_name
    head = head()
    tail = tail()
    return "#{head}#{tail}"
  end

  def head
    first = random_letter()
    second = random_letter()
    return "#{first}#{second}"
  end

  def tail
    result = "#{random_number}#{random_number}#{random_number}"
    return result
  end

  def random_letter
    alpha = [('a'..'z')].map(&:to_a).flatten
    return result = alpha.sample()
  end
  
  def  random_number
    return rand(0..9).to_s
  end 
  
  def reset
    @instruction_count += 1
    @boot = Time.now
    @set_name = random_name
  end

  # def timers
  #   created = (Time.now - @creation) % 60
  #   # created = created / (24 * 60 * 60.0)
  #   boot = (Time.now - @boot) % 60
  #   # boot = boot / (24 * 60 * 60.0)
  #   puts "#{boot} since last boot, #{@creation}since creation"
  # end
end


puts "Robot 1: "
robot1 = Robot.new
puts robot1.name
puts robot1.name
puts robot1.name

puts "Robot 2: "
robot2 = Robot.new
puts robot2.name
puts robot2.name
puts robot2.name

puts "Robot 3: "
robot3 = Robot.new
puts robot3.name
puts robot3.name
puts "Resetting to factory settings."
robot3.reset
puts robot3.name
puts robot3.name
puts robot3.instruction_count # => 5




