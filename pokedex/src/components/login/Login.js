import React, { useState } from 'react'
import api from '../../services/api';

export default function Login({history}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
    
    const response = await api.post('/sessions', {
      email,
      password
    })

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  return(
    <>
      <p>O modo fácil de gerenciar sua rotina</p>

      <form onSubmit = {handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input 
        type="email" 
        id="email" 
        placeholder="Digite seu e-mail"
        value = {email}
        onChange= { event => setEmail(event.target.value)} 
        />
        <label htmlFor="password">Senha</label>
        <input 
        type="password" 
        id="password" 
        placeholder="Senha com mínimo de 6 caracteres"
        value = {password}
        onChange= { event => setPassword(event.target.value)} 
        />
        <button className="btn"type="submit">Entrar</button>
      </form>
    </>
  )
}