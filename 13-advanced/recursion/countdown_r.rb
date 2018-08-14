def countdown_recursive(n=10)
  if n < 0 # Base case
    puts "Blast off"
  else
    puts n
    sleep 1
    countdown_recursive(n - 1) # Move towards the base case: no mutation
  end
end

require 'pry'
binding.pry
