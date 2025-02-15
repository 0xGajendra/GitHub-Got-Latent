import React from "react";
import { lazy, Suspense } from 'react';
import Fallback from "./components/Fallback";
const LazyComponent = lazy(()=> import('./LazyComponent')) 
const App = () => {
  
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <Suspense fallback = {<Fallback/>} >
      <LazyComponent/>
      </Suspense>
    </div>
  );
};

export default App;
