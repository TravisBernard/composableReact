import React, { lazy, Suspense, useMemo, useState } from "react";

export default function App() {
   const componentMap = useMemo(() => {
      return window.componentMap
   }, [])

   const firstComponent = Object.keys(componentMap)[0];
   const [selectedComponent, setSelectedComponent] = useState(firstComponent)

   const ComponentToRender = lazy(() => {
      return import((componentMap[selectedComponent]))
   })

   return <div>
      <h2>Select A Component</h2>
      <select size={3} defaultValue={selectedComponent}>
         {
            Object.keys(componentMap).map(c => {
               return <option key={c} onClick={() => setSelectedComponent(c)}>
                  {c}
               </option>
            })
         }
      </select>
      <hr/>
      <h2>Rendered Component</h2>
      <Suspense fallback={<div>Loading...</div>}>
         <ComponentToRender/>
      </Suspense>
   </div>
}