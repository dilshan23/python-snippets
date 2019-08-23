
"""
An iterator is nothing more than a container object that implements the iterator
protocol. It is based on two methods:
next, which returns the next item of the container
__iter__, which returns the iterator itself
Iterators can be created with a sequence using the iter built-in function,
for example:
"""


i = iter('abc')


print i.next()

print i.next()

print i.next()

"""
create a custom iterator, a class with a next method can be written, as long as it
provides the special method __iter__ that returns an instance of the iterator:

"""


class Myiterator(object):
	def __init__(self,step):
		self.step = step

	def next(self):
		"""Returns the next element"""
		if self.step == 0:
			raise StopIteration
		self.step -= 1
		return self.step

	def __iter__(self):
		"""Returns the iterator itself"""
		return self

for i in Myiterator(10):
	print i

#Generators

"""
Based on the yield directive, they
allow you to pause a function and return an intermediate result. The function saves
its execution context and can be resumed later if necessary.

"""
def fibo():
	a,b = 0,1
	
	while True:
		yield b
		a,b = b,a+b




		





fib = fibo()




print [fib.next() for i in range (10) ]





a,b = 1,4
b,a = a,b
print a,b





