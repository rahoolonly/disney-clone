import React from 'react'
import styled from 'styled-components';
import logo from './images/logo.svg'
import home from './images/home-icon.svg'
import search from './images/search-icon.svg'
import movies from './images/movie-icon.svg'
import original from './images/original-icon.svg'
import series from './images/series-icon.svg'
import watchlist from './images/watchlist-icon.svg'


function Navbar() {
  return (
    <div>
      <Nav>
<a href=""><Logo src={logo} alt='not found' /></a>
<NavMenu>
    <a href="">
        <img src={home} alt="" />
        <span>HOME</span>
    </a>

    <a href="">
        <img src={search} alt="" />
        <span>SEARCH</span>
    </a>

    <a href="">
        <img src={watchlist} alt="" />
        <span>WATCHLIST</span>
    </a>

    <a href="">
        <img src={movies} alt="" />
        <span>MOVIES</span>
    </a>
    
    <a href="">
        <img src={original} alt="" />
        <span>ORIGINAL</span>
    </a>

    <a href="">
        <img src={series} alt="" />
        <span>SERIES</span>
    </a>

</NavMenu>

<Btn>SIGNUP</Btn>
      </Nav>
    </div>
  )
}

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    position: fixed;
    color: #ffff;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo=styled.img`
    width: 90px;
`

const NavMenu= styled.div`
    margin-right: auto;
    margin-left: 30px;
    display: flex;
    flex-direction: row;

    @media screen and (max-width : 768px) {
        display: none;
    }

    a{
        display: flex;
    flex-direction: row;
        align-items:center ;
        text-decoration: none;
        margin-right: 19px;
    }

    img{
        height: 33px;
    }

    span{font-size:15px;
        color: #FFFF;
        letter-spacing: 1.3px;
        position: relative;
    }

    span:before{
        content: "";
        position: absolute;
        top: 0;
        left :0;
        width: 0;
        height: 2.6px;
        background-color: white;
        transition: all 0.2s linear;
        margin-top: 23px;
    }

    a:hover{
        span:before{
            width:100%
        }
    }
`

const Btn = styled.a`
    padding: 8px 16px;
    border: 1px solid white;
    background-color: #090b13;
    color: #FFFF;
    border-radius: 4px;
letter-spacing: 1.3px;
transition: all .25s ease;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid transparent;
    }
`
export default Navbar
