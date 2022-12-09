import React from 'react';
import './Buttons.css';
import './responsive.css';
import { FaListAlt, FaListOl, FaListUl, FaTasks } from 'react-icons/fa';

const Buttons = () => {
  return (
    <div className='Buttons-component'>
      <div className='container-buttons'>
        <button className='btn btn-like'>
          <div className='like'>
            <FaListUl className='icon'/>
            CURTIR
          </div>
        </button>
        <button className='btn btn-seeLater'>
          <div className='seeLater'>
            <FaTasks className='icon'/>
            VER DEPOIS
          </div>
        </button>
      </div>
    </div>
  )
}

export default Buttons