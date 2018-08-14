def countdown_iterative(n=10)
  while n >= 0 # Base case
    puts n
    n -= 1 # Move towards the base case: mutation
    sleep 1
  end

  puts "Blast off!"
end

require 'pry'
binding.pry
