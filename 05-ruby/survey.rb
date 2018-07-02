# Initial greeting

puts "Welcome to the survey."
print "What is your name? : "

name = gets.chomp # User input

# name = name.chomp # .chomp removes a new line from the end of a string

puts "Hello #{ name }." # Output

print "What is your surname? : "
surname = gets.chomp

puts "Your full name is #{ name } #{ surname }"

print "Where do you live? : "
address = gets.chomp

puts "Your full name is #{ name + ' ' + surname } and you live in #{ address }."
