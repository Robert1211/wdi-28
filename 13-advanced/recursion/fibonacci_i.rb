def fibonacci_iterative(n)
  a = 1
  b = 1
  while n > 2 # Base case
    a, b = b, a+b # Parallel assignment
    n -= 1 # Move toward the base case
  end

  b
end

require 'pry'
binding.pry
