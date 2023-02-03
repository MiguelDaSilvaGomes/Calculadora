import React, { useState } from 'react';
import './App.css'


const App = () => {

    const [ValorTela, setValorTela]=useState('')
    const [Resultado, setResultado]=useState(0)
    const [Acumulador, setAcumulador]=useState(0)
    const [Operado, setOperado]=useState(false)
  
  //Componentes
    const Tela = (valor, res) => {
        return(
          <div id='Tela'>
            <span id='valor'>{valor}</span>
            <span id='result'>{res}</span>
          </div>
        )
    }

    const btn = (label, onClick) => {
      return(
      <button id='botao' onClick={onClick} >{label}</button>
      )
    }
  //Funções   Acumulador
   
     const addDigitoTela = (d) => {
        if((d==='+')  || (d==='-') || (d==='*') || (d==='/') && Operado)  {
          console.log('+-*/')
          setOperado(false)
          setValorTela(Resultado+d)
          return
        }else if (Operado) {
            setValorTela(d)
            setOperado(false) 
            return
        }

        const valorDigitadoTela = (ValorTela+d)
        setValorTela(valorDigitadoTela)
  
     }

     const limparMemoria = () => {
      setAcumulador(0)
      setValorTela('')
      setOperado(false)
      setResultado(0)
      return
     }
    
    const Operacao = (oper) => {
      if (oper==='bs'){
        let vTela = ValorTela
        vTela = vTela.substring(0, (vTela.length-1))
        setValorTela(vTela)
        setOperado(false)
        return
      }
      try{
          const r=eval(ValorTela)
          setAcumulador(r)
          setResultado(r)
          setOperado(true)
          return
        }catch{
          setResultado('ERRO!!')
        }
      }
        
      

  return ( 
    <>
      <div className='conteiner'>
         <h3 className='h3'>Calculadora Matemática Simples</h3>
         {Tela(ValorTela, Resultado)}
         <div className='botoes'>
           {btn('AC', limparMemoria)}
           {btn('(', ()=>addDigitoTela('('))}
           {btn(')', ()=>addDigitoTela(')'))}
           {btn('/', ()=>addDigitoTela('/'))}
           {btn('7', ()=>addDigitoTela('7'))}
           {btn('8', ()=>addDigitoTela('8'))}
           {btn('9', ()=>addDigitoTela('9'))}
           {btn('*', ()=>addDigitoTela('*'))}
           {btn('4', ()=>addDigitoTela('4'))}
           {btn('5', ()=>addDigitoTela('5'))}
           {btn('6', ()=>addDigitoTela('6'))}
           {btn('-', ()=>addDigitoTela('-'))}
           {btn('1', ()=>addDigitoTela('1'))}
           {btn('2', ()=>addDigitoTela('2'))}
           {btn('3', ()=>addDigitoTela('3'))}
           {btn('+', ()=>addDigitoTela('+'))}
           {btn('0', ()=>addDigitoTela('0'))}
           {btn('.', ()=>addDigitoTela('.'))}
           {btn('<-', ()=>Operacao('bs'))}
           {btn('=', ()=>Operacao('='))}

         </div>
      </div> 
    </>
  );
}
 
export default App;