#Loop variables may require defaults, not scopes
def makeActions():
	acts = []
	for i in range(5):
		acts.append(lambda x,i=i: i ** x)  #use defaults instead  # remember currnt i 
	return acts
	
acts1 = makeActions()
print acts1[0](2)
print acts1[1](2)


def func():
	x = 4
	action = (lambda n: x ** n)
	return action


x = func()
print(x(2))
print(x(3))