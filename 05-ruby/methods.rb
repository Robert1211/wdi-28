require 'pry'

def hello(name="World", adj="lovely") # Default parameter
  puts "Hello #{ adj } #{ name }"
end

def add(a, b)
  a + b # Implicit return: return a + b
end

binding.pry
