import React, { useMemo } from "React"
import ReactDOM from "ReactDom"
import App from "./app"

Promise.all([import('http://127.0.0.1:8080/dist/bundleA.js'), import('http://127.0.0.1:8080/dist/bundleB.js'), import('http://127.0.0.1:8080/dist/bundleC.js')]).then(([moduleA, moduleB, moduleC]) => {
   window.componentMap = { componentA: window.componentA, componentB: window.componentB, componentC: window.componentC }

   console.log(window.componentMap)

   ReactDOM.render(<App/>, document.querySelector('MyReactApp'))
})
