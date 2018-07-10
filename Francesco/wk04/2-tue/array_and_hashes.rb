# Array and Hash access
# A. Given the following data structure:
a = ["Anil", "Erik", "Jonathan"]
# How would you return the string "Erik"?
a[1]

# How would you add your name to the array?
a.push('Francesco')

# B. Given the following data structure:
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# How would you return the string "One"?\
h[1]
# How would you return the string "Two"?
h[:two]
# How would you return the number 2?
h["two"]
# How would you add {3 => "Three"} to the hash?
h[3] = "Three"
# How would you add {:four => 4} to the hash?
h[:four] = 4
# C. Given the following data structure:
is = {true => "It's true!", false => "It's false"}
# What is the return value of is[2 + 2 == 4]?
"It's true!"
# What is the return value of is["Erik" == "Jonathan"]?
"It's false"
# What is the return value of is[9 > 10]?
"It's false"
# What is the return value of is[0]?
"It's true!"
# What is the return value of is["Erik"]?
"It's true!"
# D. Given the following data structure:
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users[0][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
users[1][:favorite_numbers].push(7)
# How would you add yourself to the users hash?
users.merge!("Fran": {})
# How would you return the array of Erik's favorite numbers?
users[1][:favorite_numbers]
# How would you return the smallest of Erik's favorite numbers?
users[1][:favorite_numbers].sort!()
users[1][:favorite_numbers][0]
# How would you return an array of Anil's favorite numbers that are also even?
users[2][:favorite_numbers] do |num|
  result = []
  if(num.even?)
    result.push(num)
  end
end
return result
# How would you return an array of the favorite numbers common to all users?
all_num = []
fav_num = []
for(user in users)
  all_num.concat(user[:favorite_numbers])
end

all_num.each do |num|
  if(all_num.count(num) >= 2)
    if(!fav_num.count(num)) #Check fo duplicates
      fav_num.push(num)
    end
  end
end
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
fav_num.sort!()