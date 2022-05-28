import React ,{ createContext }  from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
let obj={o1:1,o2:2};
let Content = createContext(obj);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Content.Provider value={obj} >
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Content.Provider>
  </React.StrictMode>
);

