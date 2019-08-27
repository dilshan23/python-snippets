def utopiantree(n):

	"""
	first doubles and then add 1
	"""

	# 1,2,3,6,7,14

	height = 1

	for i in range(1,n+1):

		if i % 2  ==  0:  # i is odd then double theheight

			height = height + 1

		else:

			height = height * 2

		print height

	return height


print utopiantree(8)

"""print 2%2
print 4%2
print 6%2"""
