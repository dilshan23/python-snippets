



	#print digits

	

	#print digits

	



			


	

		


#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the findDigits function below.
def findDigits(n):

	count = 0

	digits = list(str(n))

	#remove duplicates

	"""digits1 = []
			
				for i in digits:
					if i not in digits1:
						digits1.append(i)"""


	#print digits



	for i in range(len(digits)):

		try:
			if n % int(digits[i]) == 0:
				count += 1	

		except Exception,e:
			continue





			



			




		
			


				


		

				



	#print digits

	

	#print digits

	



			


	

		

	return count



if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    for t_itr in range(t):
        n = int(input())

        result = findDigits(n)

        fptr.write(str(result) + '\n')

    fptr.close()