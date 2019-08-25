



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

	digits1 = []

	for i in digits:
		if i not in digits1:
			digits1.append(i)


	#print digits



	if '0' in digits1:
		digits1.remove('0')

		for i in range(len(digits1)):
			if n % int(digits1[i]) == 0:
				count += 1

		
			


				

	else:
		for j in range(len(digits1)):
			if n % int(digits1[j]) == 0:

				count += 1

		

				



	#print digits

	

	#print digits

	



			


	

		

	return count




print findDigits(1012)