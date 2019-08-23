import socket
socket.setdefaulttimeout(2)

s = socket.socket()

try:
	s.connect(("126.0.0.1",8000))

except Exception,e:
	print e



def checkVul():

	file = open("vuln_banners.txt")

	for line in file:
		print line

	file.close()

checkVul()