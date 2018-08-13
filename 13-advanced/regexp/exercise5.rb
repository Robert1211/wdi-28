# Make a program that prints each line that has a two of the same nonwhitespace characters next to each other.

ARGF.each do |line|
  # \s: any space character => \S: any non space character
  puts line if line =~ /(\S)\1/ # A non-whitespace character followed by itself.
end
