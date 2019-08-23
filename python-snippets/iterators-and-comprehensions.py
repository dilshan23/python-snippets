for x in [1,2,3,4]:print x **2

import os

f = open('script2.py')

"""print f.next()
print f.next()


l = [1,2,3]
i = iter(l)

while True:
	try:
		X = next(i)
	except StopIteration:
		break
	print X **2"""

for line in f:
	print line

