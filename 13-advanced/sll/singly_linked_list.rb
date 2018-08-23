class SinglyLinkedList

  include Enumerable # Kind of like multiple inheritance

  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) if value
  end

  def prepend(value) # AKA .unshift
    node = Node.new value
    node.next = @head
    @head = node
  end

  def append(value) # AKA .push
    last.next = Node.new value
  end

  def last
    node = @head
    while node && node.next # Linear time complexity
      node = node.next # Traverse by following each node's next
    end
    node
  end

  def remove # AKA .shift
    node = @head
    @head = @head.next
    node
  end

  def insert_after(node, new_value)
  end

  def find(needle)
    # return the node with the value of needle, or nil
  end

  def reverse
    reversed_list = SinglyLinkedList.new
    node = @head
    while node
      reversed_list.prepend(node.value)
      node = node.next
    end
    reversed_list
  end

  def reverse!
    @head = self.reverse.head
  end

  def each
    node = @head
    while node
      yield node.value if block_given? # Execute a callback
      node = node.next
    end
  end

  # Also: .map, .inject
  # Bonus: .at_index(7) AKA bros[7]
end

bros = SinglyLinkedList.new 'Groucho'

require 'pry'
binding.pry
