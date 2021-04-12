import React from 'react';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

const App = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default App;
