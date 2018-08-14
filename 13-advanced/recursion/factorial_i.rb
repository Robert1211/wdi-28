def factorial_iterative(n)
  result = 1
  while n > 1 # Base case
    result = result * n
    n -= 1 # Move toward the base case (mutation)
  end

  result
end

require 'pry'
binding.pry
