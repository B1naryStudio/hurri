# Git styleguide
* Keep your repository clean. Don’t commit big files unless they absolutely
  require git. Even in this case, prefer storing all big files in a separate
  submodule. That’s because git history can become very big and it will be pain
  for others to use the repo.
* Structure your commit message like this:

~~~
  One line summary (less than 50 characters)

  Longer description (wrap at 72 characters)
~~~

* Commit summary:
    * Less than 50 characters
    * What was changed
    * Commit messages start with lower case
    * Imperative present tense (fix, add, change): ("Fix bug 123.", "Add
      'foobar' command.", "Change default timeout to 123.").
      Commits in past tense look weird to other developers e.g.
      the change ain’t happened yet and there’s question like
      “What will applying the patch do?” and you answer to this shit
      like “it will *remove utils.wrapMethod.*”.
      Also it’s
      [official git style](http://repo.or.cz/w/git.git?a=blob;f=Documentation/SubmittingPatches;hb=HEAD)
    * End with period
    * Prefix Common Verbs In Commit Messages
      When committing to a main branch (one that won’t be squashed) it’s very 
      helpful to prefix all, or at least most of the commit messages with some 
      normalized set of verbs. The tense and casing is totally up to you but
      keeping them normalized makes it very easy to scan. I like to use “add”, 
      “remove”, “update”, “refactor”, “fix”, and so on as shown here.
          * bafaeac TJ Holowaychuk — add mixin property array support
          * e9df63a TJ Holowaychuk — remove opacity plugin. Closes #29
          * c5b1e85 TJ Holowaychuk — remove media macros. Closes #36
    * Prefix Commits
      Prefix all commits with the module’s name. It’s a lot harder for people to step 
      on each other’s feet. For example instead of “add gravatar support to signup”, 
      one should use “signup: add gravatar support”, making things even more obvious
      for someone scanning the log.
* Commit description:
    * Wrap at 72 characters
    * Why, explain intention and implementation approach
    * Present tense
* Commit atomicity:
    * Break up logical changes
    * Commit should not contain parts not described in commit message. Even small
    fixes deserve separate commit in order to have clear vision of what was done
    * Make whitespace changes separately

* Branches:
    * Always create a new branch to work on new features.
    * Never push to main untested code or code which breaks backwards compatibility
    without discussing it with the team.
    * Use hyphens as word separator.
    * Use namespaces, for example,
        * `topics/topic-name` namespace every time you
          want to create a pull request and just in everyday. Use hyphens between 
          words.
          Examples: `topics/fix-fs-utils`, `topics/add-reddit-button`.
        * `versions/x.y` namespace for supporting old versions.
          Examples: `versions/1.0`, `versions/2.1`.

* Updating dependencies:   
  When updating a dependency in your project you might be tempted to just commit 
  “update foo”, but if there’s a specific reason you’re updating a dependency it 
  can be really helpful to your collaborators (and your future self) to make note 
  of why you bumped the dep.

* Closing and Referencing Tickets
  When you commit with a string like “Close #123" bITbUCKET sees this and will 
  actually close the issue for you, along with referencing the commit in the issue. 
  The same goes for referencing, just place “#123" in the commit message or body
  To thread things along.


## License
The MIT License (MIT)

Copyright (c) 2013 Paul Miller (http://paulmillr.com)  
Copyright (c) 2014 TJ Holowaychuk  
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