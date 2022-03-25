import React from "react";
import logo from './img/logo.svg';
import next from './img/next.svg';
import exit from './img/exit.svg';
import back from './img/back.svg';

import './header.css'


const Header = function({slide, nextSlide, previousSlide, zeroSlide}){
    var slideClass = 'slide'+String(slide) + ' progressBar';
    if (slide === 0){
        return (
            <header className='startHeader' data-testid='header'>
                <img src={logo} className='logo' alt=''/>
                <img src={next} className='next' alt='' onClick={nextSlide}/>
            </header>
        )
    } else if(slide === 11){
        return(
            <header className='defineHeader' data-testid='header'>
            <img src={logo} className='logo' alt=''/>
            <img src={exit} className='exit' alt='' onClick={zeroSlide}/>
            <span className={slideClass} data-testid='progress'></span>
        </header>
        );
    }
    else{
        return (
            <header className='defineHeader' data-testid='header'>
                <img src={back} className='before' alt='' onClick={previousSlide}/>
                <p>{slide}/10</p>
                <img src={exit} className='exit' alt='' onClick={zeroSlide}/>
                <span className={slideClass} data-testid='progress'></span>
            </header>
        )
    }
}

export default Header;