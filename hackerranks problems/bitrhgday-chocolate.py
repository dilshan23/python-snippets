def bday(s,d,m):

	ans = 0

	for i in range(0,len(s)):


		n = 0
		count = 0

		while(n < m):
			count = count + s[i+n]
			
			n = n+1

		if(count == d):
			ans += 1

		if(i+n == len(s)):
			break

	return ans

		


	

	

