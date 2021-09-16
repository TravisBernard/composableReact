import React from "React"
import ReactDOM from "ReactDom"
import App from "./app"

window.componentMap = {
   componentA: 'http://127.0.0.1:8080/dist/bundleA.js',
   componentB: 'http://127.0.0.1:8080/dist/bundleB.js',
   componentC: 'http://127.0.0.1:8080/dist/bundleC.js'
}

console.log(window.componentMap)

ReactDOM.render(<App/>, document.querySelector('MyReactApp'))