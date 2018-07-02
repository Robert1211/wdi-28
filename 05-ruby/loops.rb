# while conditional
#   things_to_do
# end

# while true # infinite loop
#   puts "OMG"
# end

i = 0 # init
while i < 5 # conditional
  puts "i: #{ i }"
  i += 1 # update
end

# until loop
i = 0
until i == 5
  puts "i: #{ i }"
  i += 1
end

# ITERATORS
5.times do
  puts "OMG"
end

# Iterator with a one line block
5.times { puts "ZOMG" }

5.times do |i|
  puts "i: #{ i }"
end

5.times { |i| puts "i: #{ i }" }

5.downto(0) do |j|
  puts "j: #{ j }"
end
