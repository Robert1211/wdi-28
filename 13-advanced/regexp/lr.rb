# lr.rb - Ruby line reader
# Usage: ruby lr.rb somefile.txt otherfile.txt

# Array of lines: The contents of the filename arguments
ARGF.each do |line|
  puts line # if line =~ /your regexp here/
end
