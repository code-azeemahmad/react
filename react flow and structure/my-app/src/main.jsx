// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'


// function MyApp() {  // if is this is a function, then it is jsx syntax, every react uses a bundler like babel or vite
//   return(
//     <>
//       <h2>Custom App!</h2>
//     </>
//   )
// }

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'http://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit',
// }

// const AnotherElement = (
//   <a href="http://google.com" target='_blank'>Visit Google here</a>
// )

const anotherUser = 'hello chai and react';
// inject variable at the end of the tree creation and come at the end as it is

const ReactElement = React.createElement( // special predefined syntax
  'a',
  {
    href: 'http://google.com',
    target: '_blank'
  },
  'click me to visit google',
  anotherUser,
)


createRoot(document.getElementById('root')).render( // react creates its own dom
  // <App />
  // <MyApp />
  // <ReactElement />
  // AnotherElement
  ReactElement
)



/*
babel parses the jsx syntax into tree like syntax of reactElement
function can also be executed in this way, MyApp();, but we dont do it.
if react takes tree like syntax, then we should directly save one step

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'Click me to visit',
}
    and execute it like <reactElement /> or reactElement() but it is an object reactElement
    but it still does not run beacuse react does not know how to render it, instead of type: 'a', we could write azeem: 'a', it was a custom method(we gave the names and defined the logic)
    But this time we make a component according to syntax defined by React (React knows how to render it)
 */