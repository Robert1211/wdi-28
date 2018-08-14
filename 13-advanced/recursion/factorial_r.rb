def factorial_recursive(n)
  if n > 1 # base case
    n * factorial_recursive(n - 1) # 5! = 5 * 4! # This is the implicitly returned result
  else
    1
  end
end

require 'pry'
binding.pry
