class Person:
	def __init__(self,name,job = None,pay = 0):
		self.name = name
		self.job = job
		self.pay = pay

	def lastname(self):
		return self.name.split()[-1]

	def giveRaise(self,percent):
		self.pay = int(self.pay*(1+percent))

	#string represtntaion

	def __str__(self):
		return '[Person: %s ,%s]' % (self.name,self.pay)


class Manager(Person):

	def __init__(self,name,pay):
		Person.__init__(self,name,'mgr',pay)

	def giveRaise(self,percent,bonus = 0.10):
		Person.giveRaise(self,percent+bonus)





"""
bob = Person(name = "John Smith")
sue = Person(name = "Sue Denover",job = "Dev",pay = 1000)

print sue.pay
sue.giveRaise(0.1)
print sue.pay

print bob.lastname()

print sue
"""

"""tom = Manager('Tom Jones', 'mgr', 50000)
tom.giveRaise(0.10)
print tom
"""
