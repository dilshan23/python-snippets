"""Sample Input 0

6
1 4 4 4 5 3
Sample Output 0

4
Explanation 0

The different types of birds occur in the following frequencies:

Type 1:  bird 1
Type 2 :  birds 0
Type 3:  bird 1
Type 4 :  birds 3
Type 5:  bird 1
The type number that occurs at the highest frequency is type , so we print 4 as our answer."""



	




import math
import os
import random
import re
import sys

# Complete the migratoryBirds function below.
def migratoryBirds(s):
	bird_freq = [0, 0, 0, 0, 0] #lsit to get  count of types

	for i in range(len(s)):
		if s[i] == 1:
			bird_freq[0] += 1
		elif s[i] == 2:
			bird_freq[1] += 1
		elif s[i] == 3:
			bird_freq[2] += 1
		elif s[i] == 4:
			bird_freq[3] += 1
		else:
			bird_freq[4] +=1

	#print bird_freq

	#get the index of max

	#print max(bird_freq)
 
	return bird_freq.index(max(bird_freq))+1

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_count = int(raw_input().strip())

    arr = map(int, raw_input().rstrip().split())

    result = migratoryBirds(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
