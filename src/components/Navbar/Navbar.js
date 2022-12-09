import React from 'react';
import './Navbar.css';
import './responsive.css';
import { FaListUl, FaSearch, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='Navbar-component'>
            <div className='container-navbar'>
                <div className='left-side'>
                    <FaListUl className='hamburger-icon' />
                </div>

                <div className='middle'>
                    <div className='logo'><a href="/"><img src="https://vizer.tv/img/logo.png" className='vizer-logo' alt='vizer-logo' /></a></div>

                    <div className='nav-list'>
                        <a href="/"><span>Início</span></a>
                        <a href="/filmes/online"><span>Filmes</span></a>
                        <a href="/series/online"><span>Séries</span></a>
                        <a href="#"><span>Animes</span></a>
                        <a href="#"><span>Aplicativo</span></a>
                    </div>
                </div>

                <div className='right-side'>
                    <a href="/pesquisar"><FaSearch className='search-icon' /></a>
                    <a href='/login'><button className='my-account'>
                        <FaUserAlt className="user-icon" />
                        <span>MINHA CONTA</span>
                    </button></a>
                </div>
            </div>
            {/* <div className='container-hidden'>
                    <h1>Teste</h1>
                </div> */}
        </div>
    )
}

export default Navbar