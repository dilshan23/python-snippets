
#try to modify another part of the program at compile time


# everthin is in python is object..functions also and  classes




def first(msg):
	print msg

first("Hello")

second = first  #various different names can be bound to the same function object
second("Hello")


#passing function as a parameter to a function

def inc(x):
	return x+1

def dec(x):
	return x-1

def operate(func,x):
	result = func(x)
	return result


print operate(inc,3)

#a function can return another function

def is_called():
	def is_returned():
		print("hello")

	return is_returned

new = is_called()
new()

#Decorator -- a decorator takes in a function,adds some functionalty and returns it

def make_pretty(func):
	def inner():
		print("I got decorated")
		func()
	return inner

def ordinary():
	print ("I am ordinary")


ordinary()

#let's decorate this ordinary function

pretty = make_pretty(ordinary)

#first we decorate a function and reassign it as

ordinary = make_pretty(ordinary)

#this is a common construct and for this reason,Python has a syntax to simplify this

#we can use the @ symbol along with the name of the decorator function and place it above the definition
#of the function to be decorated

@make_pretty
def ordinary(): 
	print ("I am ordinary")


#is equivalant to
def ordinary():
	print ("I am ordinary")

ordinary = make_pretty(ordinary)


#ex

def divide(a,b):
	return a/b

#if b = 0 gives an error
#now use decorator to check for this case that will cause the error

# --> print i am going to divide 2 and 5 0.4

#---> print i am going to divide 2 and 0 Whhops! cannot divide


#deccorator function
def smart_devide(func):
	def inner(a,b):
		if b == 0:
			print ("oops cannot divide by 0")
			return

		return func(a,b)
		
	return inner

@smart_devide
def normal_devide(a,b):
	print a/b

normal_devide(10,0)


#eg1
# write a function that accepts two numbers and give the division
#use a decorator to alter that function to interchange parmeters if a < b


#deccorator function
def smart_devide1(func):
	def inner(a,b):
		if a < b:
			print b/a
			return
			
			

		return func(a,b)
		
	return inner

@smart_devide1
def normal_devide1(a,b):
	print a/b

normal_devide1(25,1000)






