"""he function object in question
remembers values in enclosing scopes regardless of whether those scopes are still
present in memory. In effect, they have attached packets of memory (a.k.a. state re-
tention), which are local to each copy of the nested function created, and often provide
a simple alternative to classes in this role.


simple function factory
Factory functions (a.k.a. closures) are sometimes used by programs that need to gen-
erate event handlers on the fly in response to conditions at runtime. For instance,
imagine a GUI that must define actions according to user inputs that cannot be antici-
pated when the GUI is built. In such cases, we need a function that creates and returns
another function, with information that may vary per function made."""


def maker(N):
	def action(X):
		return X**N

	return action

f = maker(2)  # pass 2 to argument N
print f  

""" what we get back is a reference to the generated nested function—the one created when
the nested def runs. If we now call what we got back from the outer function:"""

print f(3)

print f(4)

#the nested function remembers the value of N in maker
g = maker(3) #g remembers 3 ,f remembers 2
print g(4)


print f(4)

#each call to a factory function like this gets its own set of state
#information


#as a lambda function

def maker1(N):
	return lambda X:X ** N

h = maker1(3)
print h(4)


#In short, the syntax arg=val in a
"""def header means that the argument arg will default to the value val if no real value is
passed to arg in a call. This syntax is used here to explicitly assign enclosing scope state
to be retained."""

"""Nested scopes, defaults, and lambdas
Although they see increasing use in def s these days, you may be more likely to care
about nested function scopes when you start coding or reading lambda expressions.
We’ve met lambda briefly and won’t cover it in depth until Chapter 19, but in short, it’s
an expression that generates a new function to be called later, much like a def statement.
Because it’s an expression, though, it can be used in places that def cannot, such as
within list and dictionary literals.
Like a def , a lambda expression also introduces a new local scope for the function it
creates. Thanks to the enclosing scopes lookup layer, lambda s can see all the variables
that live in the functions in which they are coded. Thus, the following code—a variation
on the factory we saw earlier—works, but only because the nested scope rules are
applied:"""

"""Like a def , a lambda expression also introduces a new local scope for the function it
creates. Thanks to the enclosing scopes lookup layer, lambda s can see all the variables
that live in the functions in which they are coded. Thus, the following code—a variation
on the factory we saw earlier—works, but only because the nested scope rules are
applied:"""

"""
Loop variables may require defaults, not scopes

There is one notable exception to the rule I just gave (and a reason why I’ve shown you
the otherwise dated default argument technique we just saw): if a lambda or def defined
within a function is nested inside a loop, and the nested function references an enclosing
scope variable that is changed by that loop, all functions generated within the loop will
have the same value—the value the referenced variable had in the last loop iteration.
In such cases, you must still use defaults to save the variable’s current value instead.

This may seem a fairly obscure case, but it can come up in practice more often than
you may think, especially in code that generates callback handler functions for a num-
ber of widgets in a GUI—for instance, handlers for button-clicks for all the buttons in
a row. If these are created in a loop, you may need to be careful to save state with
defaults, or all your buttons’ callbacks may wind up doing the same thing.
Here’s an illustration of this phenomenon reduced to simple code: the following at-
tempts to build up a list of functions that each remember the current variable i from
the enclosing scope

"""

