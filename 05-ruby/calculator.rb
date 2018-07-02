require 'pry'

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[q] - Quit"
  print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "Addition coming soon"
    # TODO: add()
  else
    puts "Invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thank you for using crappy calculator."
