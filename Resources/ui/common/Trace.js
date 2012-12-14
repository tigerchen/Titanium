
var command "Print Context Properties" do |cmd|
  cmd.invoke do |context|
    context.dynamic_properties.each { |k| CONSOLE.puts "#{k}\n" }
  end
end