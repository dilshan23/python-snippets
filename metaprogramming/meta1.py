class Mymeta(type):
  pass

class Myclass(metaclass=Mymeta):
  pass


instance1 = MYclass()
