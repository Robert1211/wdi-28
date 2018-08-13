class Pear < Fruit # STI
  def squishy? # This replaces the parent (Fruit)'s .squishy?
    true
  end
end
