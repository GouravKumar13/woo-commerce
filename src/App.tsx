import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import AllProducts from './components/allProducts/allProducts';
function App() {
  return (
    <div className=" w-[full] h-[2997px]  overflow-x-hidden ">
      <Header />
      <Outlet />
      <Footer />

    </div>
  );
}

export default App;

export const AppRoute = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/AllProducts", element: <AllProducts /> },


    ]

  }

])