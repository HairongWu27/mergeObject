import React, { Component } from 'react';

const reactInf=[
  { id:'start',
    content: [ {
                title:'Create a New React App',
                content:'This page describes a few popular React toolchains which help with tasks like: Scaling to many files and components;' +
                'Using third-party libraries from npm; Detecting common mistakes early;Live-editing CSS and JS in development;Optimizing the output for production.'
               },
              { 
                title:'Recommended Toolchains',
                content:'The React team primarily recommends these solutions:'+
               'If you’re learning React or creating a new single-page app, use Create React App.'+
               'If you’re building a server-rendered website with Node.js, try Next.js.'+
               'If you’re building a static content-oriented website, try Gatsby.' +
               'If you’re building a component library or integrating with an existing codebase, try More Flexible Toolchains.',
             }
            ]
  },
  { id:'setup',
    content:[{
              title:'ReactJS - Environment Setup',
              content:'In this chapter, we will show you how to set up an environment for successful React '+
              'development. Notice that there are many steps involved but this will help speed up the development '+
              'process later. We will need NodeJS, so if you dont have it installed, check the link from the'+
               'following table.'
            },
            {
              title:'Step 1 - Create the Root Folder',
              content:'Create a folder with name reactApp on the desktop to install all the required files, using the mkdir command.'+
              'To do so you need to run the npm init command from the command prompt.'
            },
            {
              title:'Step 2 - install React and react dom',
              content:'Since our main task is to install ReactJS, install it, and its dom packages, using install react and react-dom commands of npm respectively. You can add the packages we install, to package.json file using the --save option.',
            },
            {
              title:'Step 3 - Install webpack',
              content:'Since we are using webpack to generate bundler install webpack, webpack-dev-server and webpack-cli.',
            },
            {
              title:'Step 4 - Create the Files',
              content:'To complete the installation, we need to create certain files namely, index.html, App.js, main.js, webpack.config.js and, .babelrc. You can create these files manually or, using command prompt.',
            },
            {
              title:'Step 5 - Running the Server',
              content:'The setup is complete and we can start the server by running the following command: npm start',
            }

    ],
  },
  {
    id:'jsx',
    content:[
            {
              title:"Introducing JSX",
              content:'It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.',
            }
      ],
  },
  {
    id:'vdom',
    content:[
            {
              title:'Virtual DOM and Internals',
              content:'The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.',
            },
            {
              title:'Is the Shadow DOM the same as the Virtual DOM?',
              content:'No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.',
            },
            {
              title:'What is “React Fiber”?',
              content:'Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM. Read more.',
            }

    ],
  },
  {
    id:'elements',
    content:[
            {
              title:'Rendering Elements',
              content:'Elements are the smallest building blocks of React apps.',
            },
            {
              title:'Rendering an Element into the DOM',
              content:'We call this a “root” DOM node because everything inside it will be managed by React DOM.'+
              'Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.'+
              'To render a React element into a root DOM node, pass both to ReactDOM.render():',
            }

    ],
  },
  {
    id:'components',
    content:[
            {
              title:'React.Component',
              content:'This page contains a detailed API reference for the React component class definition. It assumes you’re familiar with fundamental React concepts, such as Components and Props, as well as State and Lifecycle. If you’re not, read them first.',
            },
            {
              title:'Overview',
              content:'React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page. To define a React component class, you need to extend React.Component:',
            },
            {
              title:'Note:',
              content:'React doesn’t force you to use the ES6 class syntax. If you prefer to avoid it, you may use the create-react-class module or a similar custom abstraction instead. Take a look at Using React without ES6 to learn more.',
            }
    ],
  },
  {
    id:'patterns',
    content:[
            {
              title:'React Patterns',
              content:'Function component'+
              'Destructuring props'+
              'JSX spread attributes'+
              'Merge destructured props with other values'+
              'Conditional rendering'+
              'Children types'+
              'Array as children'+
              'Function as children'+
              'Render prop'+
              'Children pass-through'+
              'Proxy component'+
              'Style component'+
              'Event switch'+
              'Layout component'+
              'Container component'+
              'Higher-order component'+
              'State hoisting'+
              'Controlled input',
            } 

    ],
  },
  {
    id:'additional',
    content:[
            {
              title:'React Native Elements',
              content:'Cross-Platform\n'+
              'Easy to use\n'+
              'Customizable\n'+
              'Community-Driven',
            },
    ],
  },
  {
    id:'resources',
    content:[
            {
              title:'External Resources',
              content:
              'There are many wonderful curated resources the React community has put together.'+
              'Reactiflux - A community of 20,000+ React developers. They keep a well curated learning section.'+        
              'React-Redux Links - Mark Erikson’s highly curated list of tutorials and resources for React/Redux/ES6 and more.'+
              'Awesome React - A collection of awesome things regarding React ecosystem.'+             
              'Awesome React Components - A curated list of React components.'+              
              'Awesome React Talks - A curated list of React talks.',
            },
    ],
  },
  {
    id:'react16',
    content:[
            {
              title:'React v16.0',
              content:'We’re excited to announce the release of React v16.0! Among the changes are some long-standing feature requests, including fragments, error boundaries, portals, support for custom DOM attributes, improved server-side rendering, and reduced file size.',
            },
            {
              title:'New render return types: fragments and strings',
              content:'You can now return an array of elements from a component’s render method. Like with other arrays, you’ll need to add a key to each element to avoid the key warning',
            },
    ],
  }
];
function React16(){
  return(
    <div>
       <h2>React16</h2>
      { reactInf.filter( x=> x.id ==='react16')[0].content.map(({title, content})=>(
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      ))     
    }
    </div>
);
}




function Resources(){
  return(
    <div>
      <h2>Resources</h2>
      { reactInf.filter( x=> x.id ==='resources')[0].content.map(({title, content})=>(
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      ))     
    }
    </div>
);
}

function Additional(){
  return(
    <div>
      <h2>Additional Topics</h2>
      { reactInf.filter( x=> x.id ==='additional')[0].content.map(({title, content})=>(
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      ))     
    }
    </div>
);
}

function Patterns(){
  return(
    <div>
      <h2>Patterns</h2>
      { reactInf.filter( x=> x.id ==='patterns')[0].content.map(({title, content})=>(
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      ))     
    }
    </div>
);
}

function Components(){
  return(
    <div>
      <h2>Components</h2>
      { reactInf.filter( x=> x.id ==='components')[0].content.map(({title, content})=>(
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      ))     
    }
    </div>
);
}

function VDOM(){
  return(
    <div>
      <h2>VDOM</h2>
      { reactInf.filter( x=> x.id ==='vdom')[0].content.map(({title, content})=>(
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      ))     
    }
    </div>
);
}

function Elements(){
  return(
    <div>
      <h2>Elements</h2>
      { reactInf.filter( x=> x.id ==='elements')[0].content.map(({title, content})=>(
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      ))     
    }
    </div>
);
}

function Setup(){
  return(
    <div>
      <h2>Set Up</h2>
      { reactInf.filter( x=> x.id ==='setup')[0].content.map(({title, content})=>(
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      ))     
    }
    </div>
);
}
function Start (){
   
    return (
    <div>
      <h2>Start</h2>
      { reactInf.filter( x=> x.id ==='start')[0].content.map(({title, content})=>(
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      ))     
    }
    </div>
    );
  };

function JSX() {
    
    return (
    <div>
      <h2>JSX</h2>
      { reactInf.filter( x=> x.id ==='jsx')[0].content.map(({title, content})=>(
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      ))     
    }
    </div>
    );
  };

  export  {JSX, Start, Setup, VDOM, Elements, Components, Patterns, Additional, Resources, React16,reactInf};
 
  
  /*


                   //   {  id: 'elements',   name: 'Elements',   path: '/api/elements', },
                   //   {  id: 'components', name: 'Components', path: '/api/components', },
                   //   {  id: 'patterns',   name: 'Patterns',   path: '/api/patterns', },
                   //   {  id: 'additional',   name: 'Additional Topics',   path: '/api/additional', },
                   //   {  id: 'resources',   name: 'Resources',   path: '/api/resources', },
                   //   {  id: 'react16',   name: 'React16',   path: '/api/react16', },
  class JSX extends Component{

    


    render() {
        return(
        <div>
          <h2>JSX</h2>
        </div>
        );    
    }
    
 
}

  */