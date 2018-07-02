require 'pry'

def hello(name="World", adj="lovely") # Default parameter
  puts "Hello #{ adj } #{ name }"
end

def add(a, b)
  a + b # Implicit return: return a + b
  p "Thank you for using add()"
end

binding.pry
