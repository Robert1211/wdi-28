require 'pry'

class MarxBrother
  # macro writes @name, @instrument and @vice getters and setters for you
  attr_accessor :name, :instrument, :vice

  def initialize(n='', i='', v='') # variadic
    @name = n
    @instrument = i
    @vice = v
  end

  def play
    "My name is #{ @name } and I play the #{ @instrument }"
  end

end

chico = MarxBrother.new 'Chico Marx', 'piano', 'gambling'

groucho = MarxBrother.new
groucho.name = 'Groucho Julius Marx'
groucho.instrument = 'guitar'
groucho.vice = 'cigars'

harpo = MarxBrother.new
harpo.name = 'Harpo Marx'
harpo.instrument = 'harp'
harpo.vice = 'mutism'

binding.pry
