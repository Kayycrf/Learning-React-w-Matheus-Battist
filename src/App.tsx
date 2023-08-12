import * as React from 'react';
import './style.css';
import HelloWorld from './Components/HelloWorld'

export default function App() {

  const name:string = "Kayki";
  const newName: string = name.toUpperCase();

  function sum(a: number, b: number) : number {
    return a + b;
  }


  const url: string = 'https://via.placeholder.com/150'

  return (
    <div className=".App">
      <h1> Hello, World </h1>
      <p> Olá, {name}! </p>
      <p> Soma: {sum(2, 6)} </p>
      <img src={url} alt="Minha imagem"/>
      <HelloWorld/>
    </div>
  );
}
