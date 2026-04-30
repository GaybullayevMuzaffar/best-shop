import './App.css';
import { menu } from "./data";
import { FaFacebookSquare, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import logoImg from "./assets/img/logo.png";
import heroImg from "./assets/img/photo.png"

function App() {
  return (
    <div>
      {/* HEADER */}
      <header className='header container'>
        <div className="header__messages">
          <button><FaFacebookSquare/></button>
          <button><FaTwitter/></button>
          <button><FaInstagramSquare/></button>
        </div>
        <div className="header__logo">
          <img src={logoImg} alt="" />
        </div>
        <div className="header__icons">
          <button><CiSearch/></button>
          <button><CiUser/></button>
          <button><CiShoppingCart/></button>
        </div>
      </header>
      <hr />

      {/* NAVBAR */}
      <div className="navbar container">
        <div className="navbar__links">
          {menu.map((item) => {
            return (
              <li key={item.title}>
                <a className='navbar__links--link' href="">{item.title}</a>
              </li>
            )
          })}
        </div>
      </div>

      {/* HERO */}
      <section className='hero'>
        <div className='hero__div container'>
          <div className="hero__left">
            <h1 className='hero__title'>Fantastic Features That <br /> Makes You Look Cool</h1>
            <p className='hero__subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi mollitia perspiciatis consequuntur totam rerum, magni sed natus fugit voluptates officiis ducimus sapiente impedit itaque.</p>
            <button className='hero__button'>View All Items</button>
        </div>
          <div className="hero__right">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;
