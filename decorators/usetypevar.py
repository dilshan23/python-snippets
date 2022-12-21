from typing import Any, Callable, TypeVar  #fastapi use

DecoratedCallable = TypeVar("DecoratedCallable", bound=Callable[..., Any])

def decorate(callable: DecoratedCallable) -> DecoratedCallable:
    def wrapper(*args, **kwargs):
        # Do something before calling the original function
        print("Before calling the original function")
        result = callable(*args, **kwargs)
        # Do something after calling the original function
        print("After calling the original function")
        return result
    return wrapper

@decorate
def my_function(x: int, y: int) -> int:
    return x + y

print(my_function(1, 2))
