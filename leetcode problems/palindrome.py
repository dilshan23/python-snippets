"""Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true"""



    

def isPalindromt(x):
	y = str(x)  
	print y
	z = []  #empty string to append each digit
	for i in y:
		print i
		z.append(i)
		#print z
	print z   #z is a string of each digit of x

	y = z[::-1]
	print y

	if y == z:
		return True
	else:
		return False




    




print isPalindromt(1221)



#leetocode

class Solution(object):
    def isPalindrome(self, x):
        
        y = str(x)
        
        print y
        
        z =[]
        
        for i in y:
            z.append(i)
        
        print z
        
        y = z[::-1]
        print y
        
        if z == y:
            return True
        else:
            return False




