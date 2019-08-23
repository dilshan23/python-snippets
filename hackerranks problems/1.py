import math
import os
import random
import re
import sys

# Complete the countingValleys function below.
def countingValleys(n, l):

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

		if valleyCount == 0 and l1[i] == "U":   #checikng if its sea level and if its coming from down
			timesOfPassingSealevel = timesOfPassingSealevel + 1


		
			


	#print valleyCount

	print timesOfPassingSealevel





if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(raw_input())

    s = raw_input()

    result = countingValleys(n, s)

    fptr.write(str(result) + '\n')

    fptr.close()
