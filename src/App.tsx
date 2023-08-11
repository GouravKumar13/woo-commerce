import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';
import CopyRight from './components/copyright/copyRight';

function App() {
  return (
    <div className=" w-[95%] overflow-hidden mx-auto">
      <Header />
      <Body />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
