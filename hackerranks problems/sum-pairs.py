def sumpairs(arr,s):

	count = 0

	for i in range(len(arr)):
		for j in range(i+1,len(arr)):

			if arr[i]+arr[j] == s:
				count += 1


	return count




print sumpairs([1,2,3,4,5],5)



