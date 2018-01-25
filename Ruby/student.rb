class Student
  attr_accessor :first_name, :last_name, :primary_phone_number

  def introduction(target)
    puts "Hi #{target}, I'm #{first_name}"
  end
end

marc = Student.new
marc.first_name = "Marc"
marc.last_name = "Harriss"
marc.primary_phone_number = "07950971231"
marc.introduction('Katarina')

# finding all muliples of 3 and 5 below 1000
three = 3
five = 5

def find_sum_of_multiples_of_3_and_5_below_1000()
  for i in 1..1000
    if i

end
