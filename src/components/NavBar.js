import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';

function NavBar(e) {
  const sideMenu = document.querySelector('#nav-menu');

  return (
    <div>
      <div id="navbar">
        <Link href="#" class="menu-bars" id="show-menu">
          <i class="fas fa-bars">bars</i>
        </Link>
      </div>
      <nav id="nav-menu">
        <ul class="nav-menu-items">
          <div id="navbar-toggle">
            <Link href="#" class="menu-bars" id="hide-menu">
              <i class="fas fa-bars nav-icon"></i>
            </Link>
            <Link href="#">
              <h1>
                <i class="fab fa-youtube" id="youtube-logo"></i>
                YouTube
              </h1>
            </Link>
          </div>
          <hr />
          <div class="nav-section">
            <li class="nav-text">
              <Link href="#"><i class="fas fa-home nav-icon"></i>Home</Link>
            </li>
            <li class="nav-text">
              <Link href="#"><i class="fas fa-fire nav-icon"></i>Trending</Link>
            </li>
            <li class="nav-text">
              <Link href="#"><i class="fab fa-youtube nav-icon"></i>Subscriptions</Link>
            </li>
          </div>
          <hr />
          <div class="nav-section">
            <li class="nav-text">
              <Link href="#"><i class="fas fa-play-circle nav-icon"></i>Library</Link>
            </li>
            <li class="nav-text">
              <Link href="#"><i class="fas fa-history nav-icon"></i>History</Link>
            </li>
            <li class="nav-text">
              <Link href="#"><i class="fas fa-clock nav-icon"></i>Watch Later</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
