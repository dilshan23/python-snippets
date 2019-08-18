
def genSquares(N):
	for i in range(N):
		yield i ** 2


print genSquares(5)
for i in genSquares(5):
	print (i)

