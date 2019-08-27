def records(l):

	HighestScore = l[0]
	LowestScore = l[0]
    
	bestBeatTimes = 0
	worstBeatTimes = 0

	for i in range(len(l)):

		if l[i] >  HighestScore:

			HighestScore = l[i]

			bestBeatTimes += 1

		if l[i] < LowestScore:

			LowestScore = l[i]

			worstBeatTimes +=1


	

		
	return str(bestBeatTimes)+"  "+ str(worstBeatTimes)


print records([3,4,21,36,10,28,35,5,24,42])