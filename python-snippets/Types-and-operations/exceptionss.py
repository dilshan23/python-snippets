try:
	print 4/0

except:
	print "can't divided by 0"


"""
to point out the specific error
"""
try:
	print 4/0
except Exception,e:
	print e

