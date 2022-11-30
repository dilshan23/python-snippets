#why --- type validatins

##### -------Poweful wayto "acces" atrtributes --------- ++++++

#class that implements __get_(), __set()_, or __delete()_ function of a descriptor protocol for an object is classified as a “Descriptor”.

#How to Use Descriptors
#Using descriptors makes sense when you have multiple attributes with similar behaviour.

#For example, imagine we are implementing a class called Person with attributes such as name, age, weight and height. We might want to check that the values for some of these attributes make sense (e.g. we can’t have a person with negative age). One way to do this would be to have a bunch of if statements in __init__. However, this can quickly turn ugly if you have to do this for many attributes. Having something like below looks much better and it is easier to read!
 
 
 class Descriptor():
   def __init__(self,name=""):
      self.name = name
      
   def __set__():  # type checking name must ne string
      if isintane(name,str):
        self.name = name
      else:
         raise TypeError("name must be string)
                         
                         ###
                         
 class BoundedNumber:
    def __init__(self, min_val, max_val):
        self.min_val = min_val
        self.max_val = max_val

    def __set_name__(self, owner, name):
        self.name = name

    def __set__(self, instance, value):
        if self.min_val > value or value > self.max_val:
            msg = '{} takes values between {} and {}'.format(
                self.name, 
                self.min_val, 
                self.max_val,
            )
            raise ValueError(msg)
        instance.__dict__[self.name] = value

    def __get__(self, instance, owner=None):
        return instance.__dict__[self.name]
                         
    class Person:
       age = BoundedNumber(1, 120)
       weight = BoundedNumber(1, 250)
       height = BoundedNumber(1, 230)

       def __init__(self, name, age, weight, height):
           self.name = name
           self.age = age
           self.weight = weight
           self.height = height
    
