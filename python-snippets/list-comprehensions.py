L= [1,2,3,4,5]

for i in range(len(L)):
	L[i] += 10

print L

#list comprehension
L = [x +1 for x in L]

print L



#
res = []

for x in 'abc':
	for y in 'xyz':
		res.append(x+y)

print res

#same as above using list comprehension

res1 = [x+y for x in 'abc' for y in 'xyz']
print res1