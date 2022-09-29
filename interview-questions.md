# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:
JSX is a combination of JS and HTML.
JSX has a power of JavaScript.
It is worth to mention that React DOM uses camelCase property naming convention. For example: class -> in HTML, but className - > in React.
As well as DOM event: onclick -> in HTML, but onClick -> in React.

Researched answer:

There are more differences between React syntax and HTML. For example:
- We write React event handlers inside curly braces:
    onClick={shoot} // React
    onclick="shoot()" // HTML


2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer:
Yarn is a JavaScript package manager. 

Researched answer:

- Yarn is responsible for managing node modules, which is needed to create a React app. Yarn helps keep it organized. 
- yarn create react-app movie-application -> it is a yarn command that will create the file structure of a React. 
- yarn creates all the files and installs all the node module dependencies to get a base app in React.

- yarn.lock
- package.json
- node_modules


3. What is an anonymous function in JavaScript?

Your answer:
Anonymous function in JavaScript is a function which daoes not have any name.

Researched answer:

- The syntaxt of anonymous function is following:
    (function () {
        //...
    })

- anonymous function can be assigned to the variable if we need to call the function later. In this case the assignment makes valid expression, and we dont need to wrap the anonymous function inside the parentheses ()
 Ex.: 
        let show = function() {
            console.log('This is my anonymous function');
        };
        show();

4. What is the difference between state values and props in React?

Your answer:

 - state is a data storage
 - we send information to our child component using props. 

Researched answer:
- We use props to pass data from one component to another.
 - Props are read-only. It is similar to function arguments. 
- We can not modify the props from inside the component. 

- The state is a data storage. It holds the information about the components.  It is local to the component only and cannot be passed to other components. 


5. What is the DOM?

Your answer:
DOM is a Document Object Model. It is a visual representation of your code. This is what we see when open a web page. You can interact with the web page using DOM events (Ex. onclick)

Researched answer:
DOM is a programming interface for web documents. It allows programms and scripts to dynamically access and update the content, structure, and style of a document. 

6. STRETCH: Which is the difference between a div and a span?

Your answer:
div - stands for Division tag. It is used to make division of content on the web page. 
Using div you can create different sections (Ex.: footer, header, text, ect).
span is an inline container. We usually use it for styling purposes. 

Researched answer:

- The div tag is a block level element. We use it wrap a section. for highlighting that section. It accept align attribute.
- The span tag is inline element. Most often it is used to attach CSS to a small section of a linein a web page. We use it if we need to wrap a  specific word that we want to highlight in our webpage. It doesn`t accept align attribut. 

## Looking Ahead: Terms for Next Week

1. Object-oriented programming
OOPs refers to languages that uses objects in programming. The main aim of OOP is to bind together the data and the functions that operate on them.

2. Ruby:
It is an open sorce programming language with a focus on simplicity and productivity.

3. Implicit return:
Implicit return it is when a function is returned values without using the return keyword. 

4. Ruby blocks:
Rubt blocks are little anonymous functions that can be passed into methods. 
Blocks are enclosed in do / end statement or between a {}

5. Ruby hashes:
Ruby hash is  a collection of unique keys and values. They are similar to arrays but arrays use integer as an index and hash use any object type. 
