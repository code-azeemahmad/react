import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // creates a DOM like structure for you bts just like browser dom
  <StrictMode>
    <App />
  </StrictMode>,
)

// createRoot compares main DOM and own DOM and updates(tracks) only those things that are actually updated in UI
// Browser DOM removes the whole DOM and repaints it(page reloading)

// every UI is not needed to update instantaneously to prevent intermediate updates in case of network calls


/*
  Fibre
React Fiber is an ongoing reimplementation of React's core algorithm. Incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

  reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.

  update
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.
*/

// Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." Keys used during reconciliation

/*
loop an array and return its values to lists, buttons, paragraphs. Why keys should be introduced?
In fibre, in order to improve list performance, Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."
*/