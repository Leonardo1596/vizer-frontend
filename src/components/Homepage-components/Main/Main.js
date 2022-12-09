import React from 'react';
import './Main.css';
import './responsive.css';
import { FaPlay, FaGripVertical } from "react-icons/fa";


const Main = () => {
  return (
    <div className='Main'>
      <div className='background'>
        <div className='container-main'>
          <div className='logo'>
            <img src="https://vizer.tv/content/series/logos/4202.webp" draggable='false' />
          </div>

          <div className='options'>
            <a href="#"><button>
              <div className='play-icon'><FaPlay id="play-icon" /></div>
              <div className='name-button'>Assistir Série</div>
            </button></a>

            <a href="#"><button className='add-list'>
              <div className='grid-icon'><FaGripVertical id="grid-icon" /></div>
              <div className='name-button'>Adicionar a ver depois</div>
            </button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main