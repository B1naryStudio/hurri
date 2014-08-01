# Cicerone JavaScript Style Guide

> Fork of AirBnB styleguide

## Table of Contents

  1. [Types](#types)
  1. [Objects](#objects)
  1. [Arrays](#arrays)
  1. [Strings](#strings)
  1. [Functions](#functions)
  1. [Properties](#properties)
  1. [Variables](#variables)
  1. [Hoisting](#hoisting)
  1. [Conditional Expressions & Equality](#conditionals)
  1. [Blocks](#blocks)
  1. [Comments](#comments)
  1. [Whitespace](#whitespace)
  1. [Commas](#commas)
  1. [Semicolons](#semicolons)
  1. [Type Casting & Coercion](#type-coercion)
  1. [Type Checking](#type-checking)
  1. [Default values](#default-values)
  1. [Working with numbers](#working-with-numbers)
  1. [Naming Conventions](#naming-conventions)
  1. [Accessors](#accessors)
  1. [Constructors](#constructors)
  1. [Events](#events)
  1. [jQuery](#jquery)
  1. [ES5 Compatibility](#es5)
  1. [Testing](#testing)
  1. [Performance](#performance)
  1. [Resources](#resources)
  1. [In the Wild](#in-the-wild)
  1. [Translation](#translation)
  1. [The JavaScript Style Guide Guide](#guide-guide)
  1. [Contributors](#contributors)
  1. [License](#license)

## Types

  - **Primitives**: When you access a primitive type you work directly on its value

    + `string`
    + `number`
    + `boolean`
    + `null`
    + `undefined`
~~~
var foo = 1,
bar = foo
bar = 9;
console.log(foo, bar); // => 1, 9
~~~
  - **Complex**: When you access a complex type you work on a reference to its value

    + `object`
    + `array`
    + `function`

~~~
var foo = [1, 2],
    bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
~~~

**[[⬆]](#table-of-contents)**

## Objects

  - Use the literal syntax for object creation.

~~~
// bad
var item = new Object();

// good
var item = {};
~~~

  - Don't use [reserved words](http://es5.github.io/#x7.6.1) as keys.

~~~
// bad
var superman = {
  default: { clark: 'kent' },
  private: true
};

// good
var superman = {
  defaults: { clark: 'kent' },
  hidden: true
};
~~~

  - Use readable synonyms in place of reserved words.

~~~
// bad
var superman = {
  class: 'alien'
};

// bad
var superman = {
  klass: 'alien'
};

// good
var superman = {
  type: 'alien'
};
~~~
**[[⬆]](#table-of-contents)**

## Arrays

  - Use the literal syntax for array creation

~~~
// bad
var items = new Array();

// good
var items = [];
~~~

  - If you don't know array length use Array#push.

~~~
var someStack = [];


// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
~~~

  - When you need to copy an array use Array#slice. [jsPerf](http://jsperf.com/converting-arguments-to-an-array/7)

~~~
var len = items.length,
    itemsCopy = [],
    i;

// bad
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
itemsCopy = items.slice();
~~~

  - To convert an array-like object to an array, use Array#slice.

~~~
function trigger() {
  var args = Array.prototype.slice.call(arguments);
  ...
}
~~~

**[[⬆]](#table-of-contents)**


## Strings

  - Use single quotes `''` for strings

~~~
// bad
var name = "Bob Parr";

// good
var name = 'Bob Parr';

// bad
var fullName = "Bob " + this.lastName;

// good
var fullName = 'Bob ' + this.lastName;
~~~

  - Strings longer than 80 characters should be written across multiple lines 
  using string concatenation.
  - Note: If overused, long strings with concatenation could impact performance.
   [jsPerf](http://jsperf.com/ya-string-concat) & 
   [Discussion](https://github.com/airbnb/javascript/issues/40)

~~~
// bad
var errorMessage = 'This is a super long error that was thrown because of 
Batman. When you stop to think about how Batman had anything to do with this,
 you would get nowhere fast.';

// bad
var errorMessage = 'This is a super long error that \
was thrown because of Batman. \
When you stop to think about \
how Batman had anything to do \
with this, you would get nowhere \
fast.';


// good
var errorMessage = 'This is a super long error that ' +
  'was thrown because of Batman. ' +
  'When you stop to think about ' +
  'how Batman had anything to do ' +
  'with this, you would get nowhere ' +
  'fast.';
~~~

**[[⬆]](#table-of-contents)**


## Functions

  - Function expressions:

~~~
// anonymous function expression
var anonymous = function() {
  return true;
};

// named function expression
var named = function named() {
  return true;
};

// immediately-invoked function expression (IIFE)
(function() {
  console.log('Welcome to the Internet. Please follow me.');
})();
~~~

  - Never declare a function in a non-function block (if, while, etc). 
  Assign the function to a variable instead. Browsers will allow you to do it, 
  but they all interpret it differently, which is bad news bears.
  - **Note:** ECMA-262 defines a `block` as a list of statements. A function 
  declaration is not a statement. 
  [Read ECMA-262's note on this issue](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97).

~~~
// bad
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// good
var test;
if (currentUser) {
  test = function test() {
    console.log('Yup.');
  };
}
~~~

  - Never name a parameter `arguments`, this will take precedence over the 
  `arguments` object that is given to every function scope.

~~~
// bad
function nope(name, options, arguments) {
  // ...stuff...
}

// good
function yup(name, options, args) {
  // ...stuff...
}
~~~

**[[⬆]](#table-of-contents)**



## Properties

  - Use dot notation when accessing properties.

~~~
var luke = {
  jedi: true,
  age: 28
};

// bad
var isJedi = luke['jedi'];

// good
var isJedi = luke.jedi;
~~~

  - Use subscript notation `[]` when accessing properties with a variable.

~~~
var luke = {
  jedi: true,
  age: 28
};

function getProp(prop) {
  return luke[prop];
}

var isJedi = getProp('jedi');
~~~

**[[⬆]](#table-of-contents)**


## Variables

  - Always use `var` to declare variables. Not doing so will result in global 
  variables. We want to avoid polluting the global namespace. 
  Captain Planet warned us of that.

~~~
// bad
superPower = new SuperPower();

// good
var superPower = new SuperPower();
~~~

  - Use one `var` declaration for multiple variables and declare each variable 
  on a newline. Still you won't be able to place debugger with one-line variable
  declarion, so it may be useful to have several of them.

~~~
// mostly bad
var items = getItems();
var goSportsTeam = true;
var dragonball = 'z';

// mostly good
var items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';
~~~

  - Declare unassigned variables last. This is helpful when later on you might 
  need to assign a variable depending on one of the previous assigned variables.

~~~
// bad
var i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
var i, items = getItems(),
    dragonball,
    goSportsTeam = true,
    len;

// good
var items = getItems(),
    goSportsTeam = true,
    dragonball,
    length,
    i;
~~~

  - Assign variables at the top of their scope. This helps avoid issues with
   variable declaration and assignment hoisting related issues. May not be a 
   constant rule, but hardly advised.

~~~
// bad
function() {
  test();
  console.log('doing stuff..');

  //..other stuff..

  var name = getName();

  if (name === 'test') {
    return false;
  }

  return name;
}

// good
function() {
  var name = getName();

  test();
  console.log('doing stuff..');

  //..other stuff..

  if (name === 'test') {
    return false;
  }

  return name;
}

// bad
function() {
  var name = getName();

  if (!arguments.length) {
    return false;
  }

  return true;
}

// good
function() {
  if (!arguments.length) {
    return false;
  }

  var name = getName();

  return true;
}
~~~

**[[⬆]](#table-of-contents)**


## Hoisting

  - Variable declarations get hoisted to the top of their scope, their assignment 
  does not.

~~~
// we know this wouldn't work (assuming there
// is no notDefined global variable)
function example() {
  console.log(notDefined); // => throws a ReferenceError
}

// creating a variable declaration after you
// reference the variable will work due to
// variable hoisting. Note: the assignment
// value of `true` is not hoisted.
function example() {
  console.log(declaredButNotAssigned); // => undefined
  var declaredButNotAssigned = true;
}

// The interpreter is hoisting the variable
// declaration to the top of the scope.
// Which means our example could be rewritten as:
function example() {
  var declaredButNotAssigned;
  console.log(declaredButNotAssigned); // => undefined
  declaredButNotAssigned = true;
}
~~~

  - Anonymous function expressions hoist their variable name, 
  but not the function assignment.

~~~
function example() {
  console.log(anonymous); // => undefined

  anonymous(); // => TypeError anonymous is not a function

  var anonymous = function() {
    console.log('anonymous function expression');
  };
}
~~~

  - Named function expressions hoist the variable name, 
  not the function name or the function body.

~~~
function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  superPower(); // => ReferenceError superPower is not defined

  var named = function superPower() {
    console.log('Flying');
  };
}

// the same is true when the function name
// is the same as the variable name.
function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  var named = function named() {
    console.log('named');
  }
}
~~~

  - Function declarations hoist their name and the function body.

~~~
function example() {
  superPower(); // => Flying

  function superPower() {
    console.log('Flying');
  }
}
~~~

  - For more information refer to [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting) by [Ben Cherry](http://www.adequatelygood.com/)

**[[⬆]](#table-of-contents)**



## Conditional Expressions & Equality

  - Use `===` and `!==` over `==` and `!=`.
  - Conditional expressions are evaluated using coercion with the 
  `ToBoolean` method and always follow these simple rules:

    + **Objects** evaluate to **true**
    + **Undefined** evaluates to **false**
    + **Null** evaluates to **false**
    + **Booleans** evaluate to **the value of the boolean**
    + **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**
    + **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

~~~
if ([0]) {
  // true
  // An array is an object, objects evaluate to true
}
~~~

  - Don't use shortcuts. In some cases value 0 may cause you pain as you will expect
  condition not to be truthy just for null and undefined.

~~~

// bad
if (name) {
  // ...stuff...
}

// good
if (name !== '') {
  // ...stuff...
}

- Still they can be used for variables of certain types when you cna expect
only one falsy value.

// bad
if (collection.length > 0) {
  // ...stuff...
}

// good
if (collection.length) {
  // ...stuff...
}
~~~

  - For more information see [Truth Equality and JavaScript](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll

**[[⬆]](#table-of-contents)**


## Blocks

  - Use braces with all multi-line blocks.

~~~
// bad
if (test)
  return false;

// good
if (test) return false;

// good
if (test) {
  return false;
}

// bad
function() { return false; }

// good
function() {
  return false;
}
~~~

  - if else statements should be always used with braces. Closing if brace should
  be placed on the line with else statement.

~~~
//bad
if (a === 5)
  doSmth();
else doSmthElse();

//bad
if (a === 5){
  doSmth();
}
else {
  doSmthElse();
}

//good
if (a === 5){
  doSmth();
} else {
  doSmthElse();
}
~~~

**[[⬆]](#table-of-contents)**


## Comments

  - Use `//` for single line comments. Place single line comments on a newline
   above the subject of the comment. Put an empty line before the comment.

~~~
// bad
var active = true;  // is current tab

// good
// is current tab
var active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  var type = this._type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  var type = this._type || 'no type';

  return type;
}
~~~

  - Prefixing your comments with `FIXME` or `TODO` helps other developers quickly 
  understand if you're pointing out a problem that needs to be revisited, or if 
  you're suggesting a solution to the problem that needs to be implemented. 
  These are different than regular comments because they are actionable. The 
  actions are `FIXME -- need to figure this out` or `TODO -- need to implement`.

  - Use `// FIXME:` to annotate problems

~~~
function Calculator() {

  // FIXME: shouldn't use a global here
  total = 0;

  return this;
}
~~~

  - Use `// TODO:` to annotate solutions to problems

~~~
function Calculator() {

  // TODO: total should be configurable by an options param
  this.total = 0;

  return this;
}
~~~

**[[⬆]](#table-of-contents)**


## Whitespace

  - Use tabs. Spaces count for tab doesn't matter, but 2 looks the best when 
  callbacks appear.

~~~
// bad
function() {
∙∙∙∙var name;
}

// bad
function() {
∙var name;
}

// good
function() {
  var name;
}
~~~

  - Place 1 space before the leading brace. Functions could be an exception.

~~~
// bad
function test(){
  console.log('test');
}

// good
function test() {
  console.log('test');
}

// bad
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog'
});

// good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog'
});
~~~

  - Set off operators with spaces.

~~~
// bad
var x=y+5;

// good
var x = y + 5;
~~~

  - Place an empty newline at the end of the file.

~~~
// bad
(function(global) {
  // ...stuff...
})(this);
~~~

~~~
// good
(function(global) {
  // ...stuff...
})(this);

~~~

  - Use indentation when making long method chains.

~~~
// bad
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// good
$('#items')
  .find('.selected')
    .highlight()
    .end()
  .find('.open')
    .updateCount();

// bad
var leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
    .attr('width',  (radius + margin) * 2).append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);

// good
var leds = stage.selectAll('.led')
    .data(data)
  .enter().append('svg:svg')
    .class('led', true)
    .attr('width',  (radius + margin) * 2)
  .append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);
~~~

**[[⬆]](#table-of-contents)**

## Commas

  - Leading commas: **Nope.**

~~~
// bad
var once
  , upon
  , aTime;

// good
var once,
    upon,
    aTime;

// bad
var hero = {
    firstName: 'Bob'
  , lastName: 'Parr'
  , heroName: 'Mr. Incredible'
  , superPower: 'strength'
};

// good
var hero = {
  firstName: 'Bob',
  lastName: 'Parr',
  heroName: 'Mr. Incredible',
  superPower: 'strength'
};
~~~

**[[⬆]](#table-of-contents)**


## Semicolons

  - **Yup.**

~~~
// bad
(function() {
  var name = 'Skywalker'
  return name
})()

// good
(function() {
  var name = 'Skywalker';
  return name;
})();

~~~

**[[⬆]](#table-of-contents)**


## Type Casting & Coercion

  - Perform type coercion at the beginning of the statement.
  - Strings:

~~~
//  => this.reviewScore = 9;

// bad
var totalScore = this.reviewScore + '';

// good
var totalScore = '' + this.reviewScore;

// bad
var totalScore = '' + this.reviewScore + ' total score';

// good
var totalScore = this.reviewScore + ' total score';
~~~

  - Use `parseInt` for Numbers and always with a radix for type casting.

~~~
var inputValue = '4';

// bad
var val = new Number(inputValue);

// bad
var val = +inputValue;

// bad
var val = inputValue >> 0;

// bad
var val = parseInt(inputValue);

// good
var val = Number(inputValue);

// good
var val = parseInt(inputValue, 10);
~~~

  - Still parseInt is not good when you may expect float value in input:

~~~
var inputValue = 0.00000003;

//bad
parseInt(0.00000003); //result is 3

//good
parseFloat(0.00000003); //result is 3e-8

//good
Number(0.00000003); //result is 3e-8
~~~



- If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](http://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you're doing.
- **Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](http://es5.github.io/#x4.3.19), but Bitshift operations always return a 32-bit integer ([source](http://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [Discussion](https://github.com/airbnb/javascript/issues/109)

~~~
    // good
    /**
     * parseInt was the reason my code was slow.
     * Bitshifting the String to coerce it to a
     * Number made it a lot faster.
     */
    var val = inputValue >> 0;
~~~

- Booleans:

~~~
    var age = 0;

    // bad
    var hasAge = new Boolean(age);

    // good
    var hasAge = Boolean(age);

    // good
    var hasAge = !!age;
~~~

**[[⬆]](#table-of-contents)**

## Type Checking

- For type checking use typeof construction.

~~~ 
  var isNum = typeof b === 'number'; 

  //bad
  var isUndefined = b === undefined; 

  //good
  var isUndefined = typeof b === 'undefined'; 
~~~

- Typeof `Array` is `object` so you should user `instanceof` construction.
  Another one way is invoke toString method.

~~~
var a = [];
typeof a === 'array'; //false

typeof a === 'object'; //true
a instanceof Array; //true

a.toString() === '[object Array]' //true
~~~

- Typeof `null` is `object` so you shouldn't check for object if you want
to know, that the value is assigned/

~~~
var b = null;

//bad
if (typeof b === 'object'){
  doSmth();
}

//better 
if (typeof b !== 'undefined' && b !== null){
  doSmth();
}
~~~

**[[⬆]](#table-of-contents)**

## Default values

- It is not a good practice to assign value to `null`. It should be applied only
to reference types. Instead use `void` and `delete` directives. 

~~~
  //bad
  var a = 5, 
  b = {
    c: 2
  };
  if (isSmth){
    a = null;
    b.c = null;
  }

  //.....

  if (a === null){...}
  if (b.c === null){...}

  //good
  var a = 5, b = {
    c: 2
  };
  if (isSmth){
    void a;
    delete b.c;
  }

  //.....

  if (typeof a !== 'undefined'){...}
  if (typeof b.c !== 'undefined'){...}

~~~ 

## Working with numbers

- Working with numbers can be tricky in javascript. 

- For determining if Number is int use such condition

~~~
  if (num === Math.floor(num))
~~~

- When you expect numbers to be small, keep in mind that
`0.1 + 0.2 = 0.30000000000000004`, so you should previously round numbers before 
check.

- Typeof `NaN` is `number` as well as `Infinity`.


## Naming Conventions

- Avoid single letter names. Be descriptive with your naming.

~~~
    // bad
    function q() {
      // ...stuff...
    }

    // good
    function query() {
      // ..stuff..
    }
~~~

- Use camelCase when naming objects, functions, and instances

~~~
    // bad
    var OBJEcttsssss = {};
    var this_is_my_object = {};
    function c() {};
    var u = new user({
      name: 'Bob Parr'
    });

    // good
    var thisIsMyObject = {};
    function thisIsMyFunction() {};
    var user = new User({
      name: 'Bob Parr'
    });
~~~

- Use PascalCase when naming constructors or classes

~~~
    // bad
    function user(options) {
      this.name = options.name;
    }

    var bad = new user({
      name: 'nope'
    });

    // good
    function User(options) {
      this.name = options.name;
    }

    var good = new User({
      name: 'yup'
    });
~~~

- Use a trailing underscore `_` when naming private properties

~~~
    // bad
    this.__firstName__ = 'Panda';
    this._firstName = 'Panda';

    // good
    this.firstName_ = 'Panda';
~~~

- When saving a reference to `this` use `self`.

~~~
    // bad
    function() {
      var _this = this;
      return function() {
        console.log(_this);
      };
    }

    // bad
    function() {
      var that = this;
      return function() {
        console.log(that);
      };
    }

    // good
    function() {
      var self = this;
      return function() {
        console.log(self);
      };
    }
~~~

- Name your functions. This is helpful for stack traces.

~~~
    // not so good
    var log = function(msg) {
      console.log(msg);
    };

    // good
    var log = function log(msg) {
      console.log(msg);
    };
~~~

**[[⬆]](#table-of-contents)**


## Accessors

- Accessor functions for properties are not required
- If you do make accessor functions use getVal() and setVal('hello')

~~~
    // bad
    dragon.age();

    // good
    dragon.getAge();

    // bad
    dragon.age(25);

    // good
    dragon.setAge(25);
~~~

- If the property is a boolean, use isVal(), hasVal() or doesVal()

~~~
    // bad
    if (!dragon.age()) {
      return false;
    }

    // good
    if (!dragon.hasAge()) {
      return false;
    }
~~~

- It's okay to create get() and set() functions, but be consistent.

~~~
    function Jedi(options) {
      options || (options = {});
      var lightsaber = options.lightsaber || 'blue';
      this.set('lightsaber', lightsaber);
    }

    Jedi.prototype.set = function(key, val) {
      this[key] = val;
    };

    Jedi.prototype.get = function(key) {
      return this[key];
    };
~~~

**[[⬆]](#table-of-contents)**


## Constructors

- Assign methods to the prototype object, instead of overwriting the prototype 
with a new object. Overwriting the prototype makes inheritance impossible:
by resetting the prototype you'll overwrite the base!

~~~
    function Jedi() {
      console.log('new jedi');
    }

    // not so good
    Jedi.prototype = {
      fight: function fight() {
        console.log('fighting');
      },

      block: function block() {
        console.log('blocking');
      }
    };

    // good
    Jedi.prototype.fight = function fight() {
      console.log('fighting');
    };

    Jedi.prototype.block = function block() {
      console.log('blocking');
    };
~~~

- Methods can return `this` to help with method chaining.

~~~
    // bad
    Jedi.prototype.jump = function() {
      this.jumping = true;
      return true;
    };

    Jedi.prototype.setHeight = function(height) {
      this.height = height;
    };

    var luke = new Jedi();
    luke.jump(); // => true
    luke.setHeight(20) // => undefined

    // good
    Jedi.prototype.jump = function() {
      this.jumping = true;
      return this;
    };

    Jedi.prototype.setHeight = function(height) {
      this.height = height;
      return this;
    };

    var luke = new Jedi();

    luke.jump()
      .setHeight(20);
~~~


- It's okay to write a custom toString() method, just make sure it works 
successfully and causes no side effects.

~~~
    function Jedi(options) {
      options || (options = {});
      this.name = options.name || 'no name';
    }

    Jedi.prototype.getName = function getName() {
      return this.name;
    };

    Jedi.prototype.toString = function toString() {
      return 'Jedi - ' + this.getName();
    };
~~~

**[[⬆]](#table-of-contents)**


## Events

- When attaching data payloads to events (whether DOM events or something more 
proprietary like Backbone events), pass a hash instead of a raw value. This 
allows a subsequent contributor to add more data to the event payload without 
finding and updating every handler for the event. For example, instead of:

~~~
    // bad
    $(this).trigger('listingUpdated', listing.id);

    ...

    $(this).on('listingUpdated', function(e, listingId) {
      // do something with listingId
    });
~~~

prefer:

~~~
    // good
    $(this).trigger('listingUpdated', { listingId : listing.id });

    ...

    $(this).on('listingUpdated', function(e, data) {
      // do something with data.listingId
    });
~~~

**[[⬆]](#table-of-contents)**

## jQuery

- Don't use jQuery.

**[[⬆]](#table-of-contents)**


## ECMAScript 5 Compatibility

- Refer to [Kangax](https://twitter.com/kangax/)'s ES5 [compatibility table](http://kangax.github.com/es5-compat-table/)

**[[⬆]](#table-of-contents)**


## Testing

- **Yup.**

~~~
    function() {
      return true;
    }
~~~

**[[⬆]](#table-of-contents)**


## Performance

  - [On Layout & Web Performance](http://kellegous.com/j/2013/01/26/layout-performance/)
  - [String vs Array Concat](http://jsperf.com/string-vs-array-concat/2)
  - [Try/Catch Cost In a Loop](http://jsperf.com/try-catch-in-loop-cost)
  - [Bang Function](http://jsperf.com/bang-function)
  - [jQuery Find vs Context, Selector](http://jsperf.com/jquery-find-vs-context-sel/13)
  - [innerHTML vs textContent for script text](http://jsperf.com/innerhtml-vs-textcontent-for-script-text)
  - [Long String Concatenation](http://jsperf.com/ya-string-concat)
  - Loading...

**[[⬆]](#table-of-contents)**


## Resources


**Read This**

  - [Annotated ECMAScript 5.1](http://es5.github.com/)

**Other Styleguides**

  - [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
  - [jQuery Core Style Guidelines](http://docs.jquery.com/JQuery_Core_Style_Guidelines)
  - [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwldrn/idiomatic.js/)

**Other Styles**

  - [Naming this in nested functions](https://gist.github.com/4135065) - Christian Johansen
  - [Conditional Callbacks](https://github.com/airbnb/javascript/issues/52)
  - [Popular JavaScript Coding Conventions on Github](http://sideeffect.kr/popularconvention/#javascript)

**Further Reading**

  - [Understanding JavaScript Closures](http://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/) - Angus Croll
  - [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html) - Dr. Axel Rauschmayer

**Books**

  - [JavaScript: The Good Parts](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) - Douglas Crockford
  - [JavaScript Patterns](http://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752) - Stoyan Stefanov
  - [Pro JavaScript Design Patterns](http://www.amazon.com/JavaScript-Design-Patterns-Recipes-Problem-Solution/dp/159059908X)  - Ross Harmes and Dustin Diaz
  - [High Performance Web Sites: Essential Knowledge for Front-End Engineers](http://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309) - Steve Souders
  - [Maintainable JavaScript](http://www.amazon.com/Maintainable-JavaScript-Nicholas-C-Zakas/dp/1449327680) - Nicholas C. Zakas
  - [JavaScript Web Applications](http://www.amazon.com/JavaScript-Web-Applications-Alex-MacCaw/dp/144930351X) - Alex MacCaw
  - [Pro JavaScript Techniques](http://www.amazon.com/Pro-JavaScript-Techniques-John-Resig/dp/1590597273) - John Resig
  - [Smashing Node.js: JavaScript Everywhere](http://www.amazon.com/Smashing-Node-js-JavaScript-Everywhere-Magazine/dp/1119962595) - Guillermo Rauch
  - [Secrets of the JavaScript Ninja](http://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X) - John Resig and Bear Bibeault
  - [Human JavaScript](http://humanjavascript.com/) - Henrik Joreteg
  - [Superhero.js](http://superherojs.com/) - Kim Joar Bekkelund, Mads Mobæk, & Olav Bjorkoy
  - [JSBooks](http://jsbooks.revolunet.com/)
  - [Third Party JavaScript](http://manning.com/vinegar/) - Ben Vinegar and Anton Kovalyov

**Blogs**

  - [DailyJS](http://dailyjs.com/)
  - [JavaScript Weekly](http://javascriptweekly.com/)
  - [JavaScript, JavaScript...](http://javascriptweblog.wordpress.com/)
  - [Bocoup Weblog](http://weblog.bocoup.com/)
  - [Adequately Good](http://www.adequatelygood.com/)
  - [NCZOnline](http://www.nczonline.net/)
  - [Perfection Kills](http://perfectionkills.com/)
  - [Ben Alman](http://benalman.com/)
  - [Dmitry Baranovskiy](http://dmitry.baranovskiy.com/)
  - [Dustin Diaz](http://dustindiaz.com/)
  - [nettuts](http://net.tutsplus.com/?s=javascript)

**[[⬆]](#table-of-contents)**

## In the Wild

  This is a list of organizations that are using this style guide. Send us a pull request or open an issue and we'll add you to the list.

  - **Aan Zee**: [AanZee/javascript](https://github.com/AanZee/javascript)
  - **Airbnb**: [airbnb/javascript](https://github.com/airbnb/javascript)
  - **American Insitutes for Research**: [AIRAST/javascript](https://github.com/AIRAST/javascript)
  - **Compass Learning**: [compasslearning/javascript-style-guide](https://github.com/compasslearning/javascript-style-guide)
  - **ExactTarget**: [ExactTarget/javascript](https://github.com/ExactTarget/javascript)
  - **Gawker Media**: [gawkermedia/javascript](https://github.com/gawkermedia/javascript)
  - **GeneralElectric**: [GeneralElectric/javascript](https://github.com/GeneralElectric/javascript)
  - **GoodData**: [gooddata/gdc-js-style](https://github.com/gooddata/gdc-js-style)
  - **Grooveshark**: [grooveshark/javascript](https://github.com/grooveshark/javascript)
  - **How About We**: [howaboutwe/javascript](https://github.com/howaboutwe/javascript)
  - **Mighty Spring**: [mightyspring/javascript](https://github.com/mightyspring/javascript)
  - **MinnPost**: [MinnPost/javascript](https://github.com/MinnPost/javascript)
  - **ModCloth**: [modcloth/javascript](https://github.com/modcloth/javascript)
  - **National Geographic**: [natgeo/javascript](https://github.com/natgeo/javascript)
  - **National Park Service**: [nationalparkservice/javascript](https://github.com/nationalparkservice/javascript)
  - **Razorfish**: [razorfish/javascript-style-guide](https://github.com/razorfish/javascript-style-guide)
  - **REI**: [reidev/js-style-guide](https://github.com/reidev/js-style-guide)
  - **Shutterfly**: [shutterfly/javascript](https://github.com/shutterfly/javascript)
  - **Userify**: [userify/javascript](https://github.com/userify/javascript)
  - **Zillow**: [zillow/javascript](https://github.com/zillow/javascript)
  - **ZocDoc**: [ZocDoc/javascript](https://github.com/ZocDoc/javascript)

## License

(The MIT License)

Copyright (c) 2012 Airbnb  
Copyright (c) 2014 Cicerone
Copyright (c) 2014 Tests4us

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[[⬆]](#table-of-contents)**