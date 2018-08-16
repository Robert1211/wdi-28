def fibonacci_iterative(n)
  a = 1
  b = 1
  while n > 2 # Base case
    a, b = b, a+b # Parallel assignment
    n -= 1 # Move toward the base case
  end

  b
end

def fibonacci_recursive(n)
  if n == 1 || n == 2 # Base case
    1
  else
    fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2) # Recursive steps
  end
end

def fib(n, a=1, b=1)
  if n == 1 || n == 2 # Base case
    b
  else
    fib(n-1, b, a+b) # Recursion
  end
end

require 'pry'
binding.pry
