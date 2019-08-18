"""Syntax:

enumerate(iterable, start=0)

Parameters:
Iterable: any object that supports iteration
Start: the index value from which the counter is 
              to be started, by default it is 0 """



l1 = ["eat","sleep","repeat"] 

for i in enumerate(l1):
	print i

#print seperately

for count,i in enumerate(l1):
	print count,i

#start from 100

for count,i in enumerate(l1,100):
	print count,i




#passind function as argument
def f(x):
    return x * x

def modify_list(L, fn):
    for idx, v in enumerate(L):   
        L[idx] = fn(v)   #It then iterates over the list item-by-item and applies the function fn on each.



L = [1, 3, 2]
modify_list(L, f)
print(L)

#output: [1, 9, 4]
