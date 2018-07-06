require 'pry'

class Actor
  def award_speech
    "I would like to thank my parents and my agent. We did it baby"
  end

  def deny_allegations
    "I deny that and I was drunk and I don't remember that anyway"
  end
end

class MarxBrother < Actor
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

class Stooge < Actor
  def terrible?
    true
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
