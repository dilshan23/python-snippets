def countingValeeys(n,l):

	valleyCount = 0

	timesOfPassingSealevel = 0  #number of times it passes sea level

	l1 = []

	#make string into a list

	for i in l:
		l1.append(i)

	print l1

	"""
	up = +1
	down = -1

	"""
	for i in range(len(l1)):

		if l1[i] == "U":
			valleyCount = valleyCount +1
		else:
			valleyCount = valleyCount -1

		#print valleyCount

		if valleyCount == 0:
			timesOfPassingSealevel = timesOfPassingSealevel + 1


		
			


	print valleyCount

	print timesOfPassingSealevel



countingValeeys(8,"UDDDUDUU")

