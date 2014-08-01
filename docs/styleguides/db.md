# Database styleguide (MongoDB)

* Words in db-related name should be separated with underscore.
~~~
	//bad
	user-id
	userid
	userId

	//good
	user_id
~~~

* Column names should be lower-cased.
~~~
	//bad
	user_Id
	User_Id
	code_ISO

	//good
	user_id
	code_iso
~~~

* Table names should start with upper case, but all other chars are lower-cased.
~~~
	//bad
	users
	User_Table

	//good
	Users
	User_table
~~~

* Arrays are ended with *list* word
~~~
	user_id_list
~~~

## License
The MIT License (MIT)

Copyright (c) 2014 Cicerone
Copyright (c) 2014 Tests4us

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.