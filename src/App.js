import React from 'react';
//import './App.css';
import Navbar from './Navbar'
import './css/global.css';
import './css/layout.css'
import './css/sample-wallpaper.css'
import './css/components.css'
import Itext from './TEXT'
import Wallpaper from './wallpaper'
import hulk from './img/hulk-1.jpg'
import venom from './img/venom-1.jpg'
import venom2 from './img/venom-2.jpg'

function ABENA(){
    return (
        <div>
            <Navbar />

            <header className='header'>
            <div className='container'>
                <Itext />

                <div className='sample-wallpaper'>
                    <Wallpaper pic={venom} />
                    <Wallpaper pic={hulk} />
                    <Wallpaper pic={venom2} />

                </div>

            </div>

        </header>
        </div>
    );
}
export default ABENA;