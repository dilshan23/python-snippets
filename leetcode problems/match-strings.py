#funaction gets two strings as inputs and return a new string with matching items in both strings

def match(str1,str2):

	y = []  #start empty

	for i in str1:   #scan str1
		if i in str2:  #Common item?
			y.append(i)  #add to the end



	return y


print match("abc","cbc")