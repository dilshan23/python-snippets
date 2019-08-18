
#why use python?
1. Software quality
For many, Python’s focus on readability, coherence, and software quality in general
sets it apart from other tools in the scripting world. Python code is designed to be
readable, and hence reusable and maintainable—much more so than traditional
scripting languages


2. Developer Productivity
less code

3. Program portability
Most Python programs run unchanged on all major computer platforms. Porting
Python code between Linux and Windows, for example, is usually just a matter of
copying a script’s code between machines. Moreover, Python offers multiple op-
tions for coding portable graphical user interfaces, database access programs, web-
based systems, and more.

4. Support libraries
Python comes with a large collection of prebuilt and portable functionality, known
as the standard library. This library supports an array of application-level pro-
gramming tasks, from text pattern matching to network scripting. In addition,
Python can be extended with both homegrown libraries and a vast collection of
third-party application support software

5. Component integration
Python scripts can easily communicate with other parts of an application, using a
variety of integration mechanisms. Such integrations allow Python to be used as a
product customization and extension tool. Today, Python code can invoke C and
C++ libraries, can be called from C and C++ programs, can integrate with Java
and .NET components, can communicate over frameworks such as COM and Sil-
verlight, can interface with devices over serial ports, and can interact over networks
with interfaces like SOAP, XML-RPC, and CORBA. It is not a standalone tool.


6. 


#What Can I Do with Python?

1. Systems Programming
Python’s built-in interfaces to operating-system services make it ideal for writing
portable, maintainable system-administration tools and utilities (sometimes called shell
tools). Python programs can search files and directory trees, launch other programs, do
parallel processing with processes and threads, and so on


2. GUIs
Python’s simplicity and rapid turnaround also make it a good match for graphical user
interface programming on the desktop. Python comes with a standard object-oriented
interface to the Tk GUI API called tkinter (Tkinter in 2.X) that allows Python programs
to implement portable GUIs with a native look and feel. Python/tkinter GUIs run un-
changed on Microsoft Windows, X Windows (on Unix and Linux), and the Mac OS
(both Classic and OS X). A free extension package, PMW, adds advanced widgets to
the tkinter toolkit. In addition, the wxPython GUI API, based on a C++ library, offers
an alternative toolkit for constructing portable GUIs in Python.
Higher-level toolkits such as Dabo are built on top of base APIs such as wxPython and
tkinter. With the proper library, you can also use GUI support in other toolkits in
Python, such as Qt with PyQt, GTK with PyGTK, MFC with PyWin32, .NET with
IronPython, and Swing with Jython (the Java version of Python, described in Chap-
ter 2) or JPype. For applications that run in web browsers or have simple interface
requirements, both Jython and Python web frameworks and server-side CGI scripts,
described in the next section, provide additional user interface options.

3. Internet Scripting
Python comes with standard Internet modules that allow Python programs to perform
a wide variety of networking tasks, in client and server modes. Scripts can communicate
over sockets; extract form information sent to server-side CGI scripts; transfer files by
FTP; parse and generate XML and JSON documents; send, receive, compose, and parse
What Can I Do with Python? | 11email; fetch web pages by URLs; parse the HTML of fetched web pages; communicate
over XML-RPC, SOAP, and Telnet; and more. Python’s libraries make these tasks re-
markably simple

4. n addition, a large collection of third-party tools are available on the Web for doing
Internet programming in Python. For instance, the HTMLGen system generates HTML
files from Python class-based descriptions, the mod_python package runs Python effi-
ciently within the Apache web server and supports server-side templating with its
Python Server Pages, and the Jython system provides for seamless Python/Java inte-
gration and supports coding of server-side applets that run on clients.

5. Database Programming
For traditional database demands, there are Python interfaces to all commonly used
relational database systems—Sybase, Oracle, Informix, ODBC, MySQL, PostgreSQL,
A Python Q&A SessionSQLite, and more. The Python world has also defined a portable database API for ac-
cessing SQL database systems from Python scripts, which looks the same on a variety
of underlying database systems. For instance, because the vendor interfaces implement
the portable API, a script written to work with the free MySQL system will work largely
unchanged on other systems (such as Oracle); all you generally have to do is replace
the underlying vendor interface. The in-process SQLite embedded SQL database engine
is a standard part of Python itself since 2.5, supporting both prototyping and basic
program storage needs.


6. In the non-SQL department, Python’s standard pickle module provides a simple object
persistence system—it allows programs to easily save and restore entire Python objects
to files and file-like objects. On the Web, you’ll also find third-party open source sys-
tems named ZODB and Durus that provide complete object-oriented database systems
for Python scripts; others, such as SQLObject and SQLAlchemy, that implement object
relational mappers (ORMs), which graft Python’s class model onto relational tables;
and PyMongo, an interface to MongoDB, a high-performance, non-SQL, open source
JSON-style document database, which stores data in structures very similar to Python’s
own lists and dictionaries, and whose text may be parsed and created with Python’s
own standard library json module

7. Numeric and Scientific Programming
Python is also heavily used in numeric programming—a domain that would not tra-
ditionally have been considered to be in the scope of scripting languages, but has grown
to become one of Python’s most compelling use cases. Prominent here, the NumPy
high-performance numeric programming extension for Python mentioned earlier in-
cludes such advanced tools as an array object, interfaces to standard mathematical
libraries, and much more. By integrating Python with numeric routines coded in a
compiled language for speed, NumPy turns Python into a sophisticated yet easy-to-use
numeric programming tool that can often replace existing code written in traditional
compiled languages such as FORTRAN or C++.


8. And More: Gaming, Images, Data Mining, Robots, Excel...
Python is commonly applied in more domains than can be covered here. For example,
you’ll find tools that allow you to use Python to do:
• Game programming and multimedia with pygame, cgkit, pyglet, PySoy,
Panda3D, and others
• Serial port communication on Windows, Linux, and more with the PySerial ex-
tension
• Image processing with PIL and its newer Pillow fork, PyOpenGL, Blender, Maya,
and more
• Robot control programming with the PyRo toolkit
• Natural language analysis with the NLTK package
• Instrumentation on the Raspberry Pi and Arduino boards
• Mobile computing with ports of Python to the Google Android and Apple iOS
platforms
• Excel spreadsheet function and macro programming with the PyXLL or DataNi-
tro add-ins
• Media file content and metadata tag processing with PyMedia, ID3, PIL/Pillow,
and more
• Artificial intelligence with the PyBrain neural net library and the Milk machine
learning toolkit
• Expert system programming with PyCLIPS, Pyke, Pyrolog, and pyDatalog
• Network monitoring with zenoss, written in and customized with Python
• Python-scripted design and modeling with PythonCAD, PythonOCC, FreeCAD,
and others
• Document processing and generation with ReportLab, Sphinx, Cheetah, PyPDF,
and so on
• Data visualization with Mayavi, matplotlib, VTK, VPython, and more
• XML parsing with the xml library package, the xmlrpclib module, and third-party
extensions
• JSON and CSV file processing with the json and csv modules


Data mining with the Orange framework, the Pattern bundle, Scrapy, and custom
code


You can even play solitaire with the PySolFC program. And of course, you can always
code custom Python scripts in less buzzword-laden domains to perform day-to-day
system administration, process your email, manage your document and media libraries,
and so on. You’ll find links to the support in many fields at the PyPI website, and via
web searches (search Google or http://www.python.org for links).


