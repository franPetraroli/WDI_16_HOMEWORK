#Round 1
words = ["hello", "what", "is", "up", "dude"]
def length(words)
  length = []
  words.each do |w|
    length.push(w.length)
  end
  return length
end

puts length(words)  # => [5, 4, 2, 2, 4]

# Round 2
def transmogrifier(num1, num2, num3)
  return result = (num1 * num2) ** num3
end

puts transmogrifier(2,2,3)

# Round 3
def toonify(accent, sentence)
  if(accent == 'daffy')
    return sentence.gsub!('s', 'th')
  elsif(accent == 'elmer')
    return sentence.gsub!('r', 'w')
  else  
    return sentence
  end
end 

puts toonify("daffy", "so you smell like sausage")

# Round 4
def word_reverse(string)
  string_array = string.split(' ').reverse().join(' ')

  return string_array
end
puts word_reverse("Now I know what a TV dinner feels like")

#Round 5
def letter_reverse(string)
  result = string.split(' ')
  result.each do |w|
    w.reverse!()
  end 
  return result.join(' ')
end
puts letter_reverse("Now I know what a TV dinner feels like")
puts letter_reverse("Put Hans back on the line")

# Round 6
def longest(a)
  result = ''
  a.each do |w|
    if(w.length == result.length)
      result +" "+w
    elsif(w.length > result.length)
      result = w
    end
  end
  return result
end

# puts longest(["oh", "good", "grief"]) # => "grief"
puts longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# => "unrequited"


