import React, { useMemo, useState } from "react";

export default function App() {
   const componentMap = useMemo(() => {
      return window.componentMap
   }, [])

   const firstComponent = Object.keys(componentMap)[0];
   const [selectedComponent, setSelectedComponent] = useState(firstComponent)

   const ComponentToRender = componentMap[selectedComponent]

   return <div>
      <h2>Select A Component</h2>
      <select size={3}>
         {
            Object.keys(componentMap).map(c => {
               return <option onClick={() => setSelectedComponent(c)}
                              selected={c === selectedComponent}>{c}
               </option>
            })
         }
      </select>
      <hr/>
      <h2>Rendered Component</h2>
      <ComponentToRender/>
   </div>
}