import React, { Component } from 'react'

import { SimpleDropdown } from 'react-js-dropdavn'
import 'react-js-dropdavn/dist/index.css'

import netflixLogo from './assets/Netflix_Logo_RGB.png'
import backgroundHP from './assets/harry-potter.jpg'
import './App.css'

const data = [
  {label: 'Bahasa Indonesia', value: 1},
  {label: 'English', value: 2},
  {label: 'Spanish', value: 3},
  {label: 'French', value: 4},
]

function Header() {
  return (
    <>
      <div className="right-header">
        <img src={netflixLogo} className="logo" alt="React logo" />
      </div>
      <div className="left-header">
        <div className="col">
          <div className="dropdown">
            <SimpleDropdown
              label={data[0]}
              options={data}
              clearable
            />
          </div>
        </div>
        <div className="col">
          <button>Masuk</button>
        </div>
      </div>
    </>
  )
}

function Hero() {
  return (
    <>
      {/* <img src={backgroundHP}  alt="" /> */}

      <div className="row">
        <div className="text">
          <h1>Film, acara TV tak terbatas, dan banyak lagi</h1>
          <p>Tonton di mana pun. Batalkan kapan pun.</p>
          <p>Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</p>
        </div>
      </div>

      <div className="row">
        <form action="">
          <input type="text" placeholder='Alamat Email'/>
          <button>Mulai > </button>
        </form>
      </div>
    </>  
  )
}

function Content() {
  return (
    <>
      
    </>
  )
}

function Footer() {
  return <h1>Copyright © 2023 Fikri Al Jauzi</h1>
}

function App() {
  return (
    <>
    <div className="background-img">
      <header className='logo'>
        <Header/>
      </header>

      <section className='hero'>
        <Hero/>
      </section>
    </div>

      <footer className='logo'>
        <Footer/>
      </footer>
    </>
  )
}


export default App
