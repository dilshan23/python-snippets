#Lambda functions can be used wherever function objects are required.
#Lambda functions can accept zero or more arguments but only one expression.

"""Actually, lambdas are only useful when you want to define a one-off function.

In other words, a function that will be used only once in your program. These functions are called anonymous functions.
"""

def sumFactoryf(n):
	return (lambda x:x+n)


f = sumFactoryf(2)


print f(1)
print f(2)



###
L = [1, 2, 3, 4]

print list(map(lambda x: x**2, L))  #map gets a  function and sequence as arguments and then calls the input funtion on each item of the sequence


"""

As the name suggests, filter is another built-in function that actually filters a sequence or any iterable object.

In other words, given any iterable object (like a list), the filter function filters out some of the elements while keeping some based on some criteria."""


def isEven(x):
	if x % 2 == 0:
		return True
	return False

print list(filter(isEven,[2,3,10,19]))


#one line coder with lambdas

print list(filter(lambda x:x%2 == 0,[2,3,10,19,20]))  #Lambda’s body has to be an expression because the value of this expression is the return value of the function.

""""
3 + 5 is an expression that is evaluation to 8

10 > 5 is an expression that is evaluated to True

True and (5 < 3) is an expression that is evaluated to False"""


