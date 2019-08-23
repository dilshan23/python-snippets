import glob


print (glob.glob('person*'))

import shelve

db = shelve.open('person.db')

print (len(db))

print (list(db.keys()))

bob = db['Bob Smith']  #Fetch Bob by key

print (bob)

print (bob.lastname())

for key in sorted(db):
	print(key, '\t=>', db[key])


sue = db['Sue Jones']
sue.giveRaise(.10)
db['Sue Jones'] = sue
db.close()

