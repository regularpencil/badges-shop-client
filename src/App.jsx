import './App.css';

import {Provider} from "react-redux";
import {store} from "./store/store";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import RouteManager from './components/RouteManager/RouteManager';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <RouteManager/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
