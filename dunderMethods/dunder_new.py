#usage -- USE __new__   when u need to control the creation of a new instance
#USE __init__ when u need to control over initialition of  a new instance



class Shape:
  def __new__(cls,sides,*args,**kwargs):
    if slides == 3:
      return Triangle(*args,""kwargs)
    else:
      return Square(*args,**kwargs)

    
class Triangle:
  def _init__(self,base,height):
    self.base = base
    self.hegiht = height
    
    
  def area(self):
    return (self.base * self.hegiht)/2
  
  
  
class Square:
   pass
  
  
 
a = Shape(sides=3,base=2,height=12)
b = Shape(sides=4.lenght=2)


print(str(a.__class__)
print(str(a.area())
      
      
