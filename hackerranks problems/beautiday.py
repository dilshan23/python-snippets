def beautifulDays(i, j, k):

	count = 0

	for day in range(i,j+1):

		x=str(day)

		y = x[::-1]

		#print y

		y1 = int(y)

		#print (day-y1) % k

		if (day-y1) % k == 0:
			#print day-y1 
			count += 1

	return count

#beautifulDays(20,23,6)


#!/bin/python

import math
import os
import random
import re
import sys

# Complete the beautifulDays function below.
def beautifulDays(i, j, k):

	count = 0

	for day in range(i,j+1):

		x=str(day)

		y = x[::-1]

		#print y

		y1 = int(y)

		#print (day-y1) % k

		if (day-y1) % k == 0:
			#print day-y1 
			count += 1

	return count



if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    ijk = raw_input().split()

    i = int(ijk[0])

    j = int(ijk[1])

    k = int(ijk[2])

    result = beautifulDays(i, j, k)

    fptr.write(str(result) + '\n')

    fptr.close()



