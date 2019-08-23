D = {'food': 'Spam', 'quantity': 4, 'color': 'pink'}

print D['food']

#add 1 to the quantity

D['quantity'] +=1
print D

#get items to empty dictionary

E = {}

E['name'] = 'Bob'
E['job'] = 'Teacher'
E['age'] = 32

print E

print E['name']


#using zip

bob2 =   dict( zip(['name','job','age'],['Bob','Teacher','25']))

print bob2


#nesting dicts

rec = {'name': {'first':'Bob','last':'Smith'},
		'jobs':['dev','mgr'],
		'age':42
		}

print rec['name']['first']
print rec['jobs'][-1]

#append a  new job

rec['jobs'].append('janitor')
print rec
