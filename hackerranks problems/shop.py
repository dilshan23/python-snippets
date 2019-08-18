def getMoneySpent(keybords,drives,b):


	values = []
	#afetr get the max from values


	for i in range(len(keybords)):
		for j in range(len(drives)):
			if keybords[i] + drives[j] <= b:
				sum1 = keybords[i]+drives[j]
				values.append(sum1)
			

	#print(values)



    

	#print max_sum
	if len(values) > 0:
		return max(values)
	else:
		return "-1"
				


	

    

	



print getMoneySpent([40,50,60],[40,40,40],60)