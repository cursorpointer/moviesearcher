import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Routers} from "./services/Routers";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
