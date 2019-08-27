def maxstock(l):

	validpairs_upper = []
	validpairs_lower = []

	

	for i in range(len(l)):
		for j in range(i+1,len(l)):

			if l[i] < l[j]:
				validpairs_upper.append(l[j])
				validpairs_lower.append(l[i])

	substract_list = [x1 - x2 for (x1, x2) in zip(validpairs_upper, validpairs_lower)]

	#print substract_list


    






	#return validpairs_upper,validpairs_lowers

	if len(substract_list) > 0:
		return max(substract_list)
	else:
		return 0

	


print maxstock([1,6,8,3,1])




