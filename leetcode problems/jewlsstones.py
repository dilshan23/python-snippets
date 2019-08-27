def jewStones(a,b):

	a = list(a)



	b  = list(b)

	

	matchCount = 0

	for i in range(len(a)):
		for j in range(len(b)):

			if a[i] == b[j]:
				matchCount += 1



	return matchCount 
	


print jewStones("Aa","aAAbbbb")

