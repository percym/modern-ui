import React from 'react';
import { Blog,Features,Footer,Header,Possibility,WhatGPT3 } from './containers';
import { CTA,Brand,NavBar } from './components';


const  App = ()=> {
  return (
    <div className='App'>
       <div className='gradient_bg'>
          <NavBar />
          <Header />
       </div>
       <Brand />
       <WhatGPT3 />
       <Features />
       <Possibility />
       <Blog/>
       <Footer />
    </div>
  )
}

export default App 