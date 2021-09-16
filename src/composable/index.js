import React from "React"
import ReactDOM from "ReactDom"
import App from "./app"

let componentMap = {
   componentA: 'http://127.0.0.1:8080/dist/bundleA.js',
   componentB: 'http://127.0.0.1:8080/dist/bundleB.js',
   componentC: 'http://127.0.0.1:8080/dist/bundleC.js'
}

ReactDOM.render(<App componentMap={componentMap}/>, document.querySelector('MyReactApp'))