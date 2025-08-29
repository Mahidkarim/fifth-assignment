1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 getElementById  ----  One element is chosen by its unique ID using getElementById().

 getElementsByClassName ----  Multiples are selected by class (live HTMLCollection) using getElementsByClassName().

 querySelector() → CSS selector for first match.

 querySelectorAll() → (NodeList) all matches.

 

 2. How do you create and insert a new element into the DOM?

 --To create an element, use document.createElement('tag').

 Use insertBefore(), prepend(), or appendChild() to insert it.

 

 3. What is Event Bubbling and how does it work?

 The event begins with the target element and progresses to the parents.

 For instance, pressing a button causes both button and parent events to occur.


 

 4. What is Event Delegation in JavaScript? Why is it useful?

 Assign a listener to a parent to manage child-related situations.

 beneficial for dynamic elements and performances.



 

 5. What is the difference between preventDefault() and stopPropagation() methods?

 preventDefault() → halts the browser's default action, such as submitting a form.

 stopPropagation() → prevents the event from spreading to its parent elements.
