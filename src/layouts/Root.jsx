import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';
import { AuthContext } from '../authProvider/AuthProvider';

const Root = () => {
    
    return (
        <div className='container w-11/12 mx-auto overflow-hidden'>
            <Header/>
            <Outlet/>

            <Footer/>

            <Toaster />
        </div>
    );
};

export default Root;