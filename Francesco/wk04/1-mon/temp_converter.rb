@temp = {}
@start_temp= ''
@unit = ''

def convert_temp(start_temp, unit)
  while(@start_temp != "Q")
    puts 'Enter a starting temperature or Quit the program with "Q"'
    @start_temp = gets.chomp
    puts 'Enter a temp unit'
    @unit = gets.chomp
    if (@unit == "f" || @unit == 'f')
      celsius = (@start_temp.to_i - 32)/1.8
      kelvin = (@start_temp.to_i + 459.67) / 1.8
      @temp[celsius] = celsius
      @temp[kelvin] = kelvin
      puts "Celsius is  #{@temp[celsius]} and kelvin is #{@temp[kelvin]}"
    elsif (@unit == "C" || @unit == 'c')
      fahrenheit = @start_temp.to_i * 1.8 + 32
      kelvin = @start_temp.to_i  + 273.15
      @temp[fahrenheit] = fahrenheit
      @temp[kelvin] = kelvin
      puts "fahrenheit is  #{@temp[fahrenheit]} and kelvin is #{@temp[kelvin]}"
    elsif (@unit == 'K' || @unit == 'k')
      celsius =  @start_temp.to_i - 273.15
      fahrenheit =  @start_temp.to_i  * 1.8 - 459.67
      @temp[celsius] = celsius
      @temp[fahrenheit] = fahrenheit
      puts "Celsius is  #{@temp[celsius]} and fahrenheit is #{@temp[fahrenheit]}"
    end
  end
end 

convert_temp(@start_temp, @unit)

