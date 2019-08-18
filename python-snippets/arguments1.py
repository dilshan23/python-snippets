"""Arguments and Shared References
To illustrate argument-passing properties at work, consider the following code:"""

def f(a):
	a = 99;

b= 88
f(b)

print b


def changer(a,b):   ## Arguments assigned references to objects

	a= 2              #Changes local name's value only
	b[0] = 'spam'     #Changes shared object in place

X =1 
L = [1,2]
changer(X,L)

print X,L



X =1
a =X
a =2
print X


l = [1,2]
b =l         #they share the same object
b[0] = 'spam'  #in place change .'L' sees the change too
print l
print b