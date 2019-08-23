

f = open('data.txt','w')  #make a new filein output mode 
f.write('Hello\n')

f.write('World\n')

f.close()

f = open('data.txt','r')
text = f.read()

print text

print text.split()


#unicode text files

file = open('unidata.txt', 'w', encoding='utf-8')  #python 3x

S = 'sp\xc4m'

file.write(S)
file.close()