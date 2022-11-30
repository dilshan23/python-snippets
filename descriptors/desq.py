#why --- type validatins

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
    
