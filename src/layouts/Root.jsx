import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className='container w-11/12 mx-auto overflow-hidden'>
            <Header/>
            <Outlet/>
            <Toaster />
        </div>
    );
};

export default Root;