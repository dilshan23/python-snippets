def getMoneySpent(keybords,drives,b):
	values = []
	for i in range(len(keybords)):
		for j in range(len(drives)):
			if keybords[i] + drives[j] <= b:
				sum1 = keybords[i]+drives[j]
				values.append(sum1)

	if len(values) > 0:
		return max(values)
	else:
		return "-1"
				
print(getMoneySpent([40,50,60],[40,40,40],60))
