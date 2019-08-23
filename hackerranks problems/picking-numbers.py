def pickingNumbers(l):

	print l


	l1 = []

	for i in range(len(l)):
		for j in range(i+1,len(l)):
			print abs(l[i]-l[j] )

			if abs(l[i]-l[j] ) <= 1:
				
				l1.append(l[i])
				

	return l1


print pickingNumbers([3,2,3,4,5,6])
