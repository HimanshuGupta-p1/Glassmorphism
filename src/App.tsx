import './App.css'
// import Home from './pages/Home';
import viteLogo from '/vite.svg'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const user: any = {
    instagram : "https://www.instagram.com/invites/contact/?i=15qth0sqh0b53&utm_content=kixv2g6",
    linkedIn: "https://www.linkedin.com/in/himanshu-gupta-28a6ba207",
    github: "https://github.com/HimanshuGupta-p1",
    facebook: "https://www.facebook.com/profile.php?id=100017297291417",
    codepen: "https://codepen.io/Himanshu_Styles"
  };
  return (
    <header>
        <div className="navbar">
          <div className="logo1">
            <a href="#"> Logo</a>
          </div>
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="buttons">
            <input type="button" name="" value="Login" />
            <input type="button" value="Register" />
          </div>
        </div>
        <img src={viteLogo} className="logo react" alt="logo" />
        <div className="text-content">
          <div><h2>Learn To Enjoy, <br /> Every Moment of Your life</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta dolorem suscipit ab! Molestias mollitia totam placeat eos sequi ipsam, velit impedit dignissimos magni odit porro eaque sed non voluptates.</p></div>
          <div className='links'>
            <a href={user.instagram} ><i className="bi bi-instagram"></i></a>
            <a href={user.linkedIn}><i className="bi bi-linkedin"></i></a>
            <a href={user.github}><i className="bi bi-github"></i></a>
            <a href={user.facebook}><i className="bi bi-facebook"></i></a>
            <a href={user.codepen}><i className="bi bi-codepen"></i></a>
          </div>
        </div>

      </header>
  )
}

export default App
