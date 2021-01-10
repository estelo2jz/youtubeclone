import React from 'react';
import '../styles/Nav.scss';

function NavBar(e) {
  const sideMenu = document.querySelector('#nav-menu');

  return (
    <div>
      <div id="navbar">
        <a href="#" class="menu-bars" id="show-menu">
          <i class="fas fa-bars">bars</i>
        </a>
      </div>
      <nav id="nav-menu">
        <ul class="nav-menu-items">
          <div id="navbar-toggle">
            <a href="#" class="menu-bars" id="hide-menu">
              <i class="fas fa-bars nav-icon"></i>
            </a>
            <a href="#">
              <h1>
                <i class="fab fa-youtube" id="youtube-logo"></i>
                YouTube
              </h1>
            </a>
          </div>
          <hr />
          <div class="nav-section">
            <li class="nav-text">
              <a href="#"><i class="fas fa-home nav-icon"></i>Home</a>
            </li>
            <li class="nav-text">
              <a href="#"><i class="fas fa-fire nav-icon"></i>Trending</a>
            </li>
            <li class="nav-text">
              <a href="#"><i class="fab fa-youtube nav-icon"></i>Subscriptions</a>
            </li>
          </div>
          <hr />
          <div class="nav-section">
            <li class="nav-text">
              <a href="#"><i class="fas fa-play-circle nav-icon"></i>Library</a>
            </li>
            <li class="nav-text">
              <a href="#"><i class="fas fa-history nav-icon"></i>History</a>
            </li>
            <li class="nav-text">
              <a href="#"><i class="fas fa-clock nav-icon"></i>Watch Later</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
