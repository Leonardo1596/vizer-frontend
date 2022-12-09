import React from 'react';
import {  FaLock, FaUser, FaAt, FaCheck } from 'react-icons/fa'
import './RegisterBox.css';
import './responsive.css';
import axios from 'axios';

const RegisterBox = () => {

    function register() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const repeatPassword = document.getElementById('repeat-password').value;

        let body = {
            username: username,
            email: email,
            password: password,
            repeatPassword: repeatPassword
        };

        axios.post('https://api-vizer-authentication.herokuapp.com/auth/sign-up', body)
            .then(response => {
                // console.log(response.data);
                if (response.data.message === 'Successfully registered') {
                    window.location.href = '/';
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    return (
        <div className='RegisterBox-component'>
            <div className='container-registerBox'>
                <div className='title'>
                    <h1>Novo Usuário</h1>
                    <span>Tenha acesso a sua conta em segundos</span>
                </div>
                <form>
                    <div className='input'>
                        <input type='text' id='username' name='username' placeholder='Nome de usuário único' />
                        <FaUser className='icon' />
                    </div>
                    <div className='input'>
                        <input type='email' id='email' name='email' placeholder='Seu email' />
                        <FaAt className='icon' />
                    </div>
                    <div className='input'>
                        <input type='password' id='password' name='password' placeholder='Sua senha' />
                        <FaLock className='icon' />
                    </div>
                    <div className='input'>
                        <input type='password' id='repeat-password' name='repeatPassword' placeholder='Repita sua senha' />
                        <FaLock className='icon' />
                    </div>
                    <div className='info'>
                        <span>Criando essa conta, você aceita os termos de responsabilidade</span>
                    </div>
                    <div className='button'>
                        <button type='button' className='btn' onClick={register}>Enviar Cadastro</button>
                        <FaCheck className='icon-btn' />
                    </div>
                    <a href="/login" className='alreadyAnUser'>Já é usuário Vizer? <span className='login'>Entre na sua conta!</span></a>
                </form>
            </div>
        </div>
    )
}

export default RegisterBox