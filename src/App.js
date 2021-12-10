import React from 'react'
import './App.css'
import {Features, Blog, Footer, Header, Possibility, WhatGPT3} from './containers'
import {Article, Feature, CTA, Navbar, Brand} from './components'

const App = () => {
    return (
        <div className='APP'>
            <div className='gradient__bg'>
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App;