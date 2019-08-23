"""
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

"""

def minTwoSum(l):

	#getting the reversed list

	l.sort()

	low1 = l[0]
	low2 = l[1]

	minsum = low1 + low2
	return minsum

	


	
		


print minTwoSum([10,12,3,4])