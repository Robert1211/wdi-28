# ### 3. Sydney Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "What suburb do you live in: "
residence = gets.chomp.downcase # Lowercase the input for ease of comparison

puts case residence
when 'glebe'
  "Beautiful foreshore walk"
when 'greenwich'
  "Cool oil spill and cancer cluster. Also that mummified corpse"
when 'fairlight'
  "What a fancy name"
when 'cabramatta'
  "Fine dining and heroin"
else
  "I'm sure that's a lovely place"
end
