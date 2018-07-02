# Conditionals

x = 17

if x > 3
  puts "#{ x } is greater than 3"
end

# If / else if / etc

grade = "F"
if grade == 'A'
  puts "You are crushing it"
elsif grade == 'B'
  puts "You are coasting fine"
elsif 'C' == grade
  puts "Acceptable"
else
  puts "Please see John after class"
end

# Bonus Ruby conditionals

# Short if statements / one liners
x = 17

puts "#{ x } is greater than 3" if x > 3

# Negative conditional: unless

if x != 7 # if true
  puts "Not 7"
end

unless x == 7 # if not true
  puts "Not 7"
end

puts "Not 7" unless x == 7

# Case statements (a switch statement in JS)
grade = 'B'
case grade
when 'A'
  puts "You are crushing it"
when 'B'
  puts "You are coasting fine"
when 'C'
  puts "Acceptable"
else
  puts "See John after class"
end
