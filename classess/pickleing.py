#creating and storing objects in a file-based database


from person2 import Person,Manager

bob = Person('Bob Smith')
# Re-create objects to be stored
sue = Person('Sue Jones', job='dev', pay=100000)
tom = Manager('Tom Jones', 50000)


import shelve

db = shelve.open('person.db')   #filename where objects are stored

for obj in (bob,sue,tom):
	db[obj.name] = obj


   #use obj's name attr as key
   #stor objects on shelve by key

db.close()





