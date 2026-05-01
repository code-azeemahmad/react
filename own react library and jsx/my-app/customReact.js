// how a tag is given behind the scene? How react see it?
// react tries to make it a tree

const reactElement = {  // this is the work of react
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'Click me to visit',
}   // at the end of day, react element is evaluated in this way

// now we want a method that renders it, add this element into root

function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement);
     */

    // make the code modular and flexible

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {        
        if (prop === `children`)  continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer)