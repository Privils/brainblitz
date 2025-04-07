import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
<>
<section className="hero">
    <div className='intro'>
    <div className="quize-header">
        <h3>quize</h3>
    </div>
    <h1>Test Your knowledge with brain blitz</h1>
    <p>
  This project was created to provide users with an entertaining way to test their knowledge across various quiz topics. 
  Whether you're a trivia enthusiast or just looking for some fun, there's something for everyone!
  <br />
  The quiz covers exciting categories, including:
  <br />
  <span className="topics">Cartoons</span>,
  <span className="topics">Animals</span>,
  <span className="topics">Vehicles</span>,
  <span className="topics">Celebrities</span>,
  <span className="topics">Mathematics</span>,
  <span className="topics">Music</span>,
  <span className="topics">Film</span>,
  <span className="topics">Mythology</span>.
  <br />
  Get ready to challenge yourself and enjoy the game. Let the fun begin!
</p>
<div className="buttons">
    <button className='btn'>
        <Link to='/Quize'>start quize</Link>
    </button>
</div>
    </div>
    <div className='categories'>
        <h1>focus topics</h1>
    <p className="topics">Cartoons</p>
  <p className="topics">Animals</p>
  <p className="topics">Vehicles</p>
  <p className="topics">Celebrities</p>
  <p className="topics">Mathematics</p>
  <p className="topics">Music</p>
  <p className="topics">Film</p>
  <p className="topics">Mythology</p>
    </div>
</section>
</>
  )
}

export default Home
