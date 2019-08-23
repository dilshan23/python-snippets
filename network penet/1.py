import nmap
import optparse


import socket  #import module

socket.setdefaulttimeout(9)

s = socket.socket() #make a variable from the class socket

#Once successfully connected, we can read and write from the socket. 


s.connect(("127.0.0.1",8000))

ans = s.recv(1024)

print ans

nm = nmap.PortScanner()

nm.scan('127.0.0.1')

print nm['127.0.0.1'].hostname()

print nm['127.0.0.1'].state()


"""
Lets now use exception handling to update our banner-grabbing script. We
will wrap the network connection code with exception handling. Next, we try
to connect to a machine that is not running a FTP Server on TCP port 21. If
we wait for the connection timeout, we see a message indicating the network
connection operation timed out. Our program can now continue

"""

import socket
socket.setdefaulttimeout(2)

s = socket.socket()

try:
	s.connect(("126.0.0.1",8000))

except Exception,e:
	print e


