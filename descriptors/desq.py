#wh --- type validatins

 class that implements __get_(), __set()_, or __delete()_ function of a descriptor protocol for an object is classified as a “Descriptor”.
 
 
 class Descriptor():
   def __init__(self,name=""):
      self.name = name
      
   def __ser__():  # type checking name must ne string
      if isintane(name,str):
        self.name = name
      else:
         raise Typeerror("name must be string)
    
