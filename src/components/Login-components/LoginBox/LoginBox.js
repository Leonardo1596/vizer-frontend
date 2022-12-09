import React from 'react';
import { FaAt, FaLock, FaRegArrowAltCircleRight } from 'react-icons/fa'
import './LoginBox.css';
import './responsive.css';
import axios from 'axios';

const LoginBox = () => {
    function login() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        let body = {
            email: email,
            password: password
        };

        axios.post('https://api-vizer-authentication.herokuapp.com/auth/sign-in', body)
            .then(response => {
                console.log(response.data.message);
                if (response.data.message === 'Successfully signed') {
                    window.location.href = '/';
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    return (
        <div className='LoginBox-component'>
            <div className='container-loginBox'>
                <div className='title'>
                    <h1>Conta de usuário</h1>
                    <span>Uma única conta, conteúdo infinitamente grátis</span>
                </div>
                <div>
                    <div className='input'>
                        <input type='email' id='email' name='email' placeholder='Seu email' />
                        <FaAt className='icon' />
                    </div>
                    <div className='input'>
                        <input type='password' id='password' name='password' placeholder='Sua senha' />
                        <FaLock className='icon'/>
                    </div>
                    <div className='forgot-password'>
                        <a href="recuperar-senha">Esqueceu sua senha?</a>
                    </div>
                    <div className='button'>
                        <button type='button' className='btn' onClick={login}>Logar na Conta</button>
                        <FaRegArrowAltCircleRight className='icon-btn'/>
                    </div>
                    <a href="/cadastro" className='notAnUser'>Ainda não é usuário? <span className='register'>Faça seu cadastro!</span></a>
                </div>
            </div>
        </div>
    )
}

export default LoginBox