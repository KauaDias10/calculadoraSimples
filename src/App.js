import { Input } from './components/Input';
import { Button } from './components/Button';
import React, { useState } from 'react';
import { Container, Content, Row } from "./styles";

const App = () => {
  const [numeroAtual, setNumeroAtual] = useState('0');
  const [primeiroNumero, setPrimeiroNumero] = useState(null);
  const [operacao, setOperacao] = useState('');

  // Função para limpar os valores
  const limpar = () => {
    setNumeroAtual('0');
    setPrimeiroNumero(null);
    setOperacao('');
  };

  // Função para adicionar um número ao display
  const adicionarNumero = (numero) => {
    setNumeroAtual((anterior) => (anterior === '0' ? numero : anterior + numero));
  };

  // Função para somar números
  const somarNumeros = () => {
    if (primeiroNumero === null) {
      setPrimeiroNumero(Number(numeroAtual));
      setNumeroAtual('0');
    } else {
      const soma = primeiroNumero + Number(numeroAtual);
      setPrimeiroNumero(soma);
      setNumeroAtual('0');
    }
    setOperacao('+');
  };

  // Função para subtrair números
  const subtrairNumeros = () => {
    if (primeiroNumero === null) {
      setPrimeiroNumero(Number(numeroAtual));
      setNumeroAtual('0');
    } else {
      const diferenca = primeiroNumero - Number(numeroAtual);
      setPrimeiroNumero(diferenca);
      setNumeroAtual('0');
    }
    setOperacao('-');
  };

  // Função para multiplicar números
  const multiplicarNumeros = () => {
    if (primeiroNumero === null) {
      setPrimeiroNumero(Number(numeroAtual));
      setNumeroAtual('0');
    } else {
      const produto = primeiroNumero * Number(numeroAtual);
      setPrimeiroNumero(produto);
      setNumeroAtual('0');
    }
    setOperacao('*');
  };

  // Função para dividir números
  const dividirNumeros = () => {
    if (primeiroNumero === null) {
      setPrimeiroNumero(Number(numeroAtual));
      setNumeroAtual('0');
    } else {
      const quociente = primeiroNumero / Number(numeroAtual);
      setPrimeiroNumero(quociente);
      setNumeroAtual('0');
    }
    setOperacao('/');
  };

  // Função para calcular o resultado final
  const calcularResultado = () => {
    if (primeiroNumero !== null && operacao !== '' && numeroAtual !== '0') {
      let resultado;
      switch (operacao) {
        case '+':
          resultado = primeiroNumero + Number(numeroAtual);
          break;
        case '-':
          resultado = primeiroNumero - Number(numeroAtual);
          break;
        case '*':
          resultado = primeiroNumero * Number(numeroAtual);
          break;
        case '/':
          resultado = primeiroNumero / Number(numeroAtual);
          break;
        default:
          resultado = Number(numeroAtual);
          break;
      }
      setNumeroAtual(String(resultado));
      setPrimeiroNumero(null);
      setOperacao('');
    }
  };

  // Exibe o número atual seguido da operação (se houver)
  const exibirNoDisplay = () => {
    if (operacao) {
      return `${primeiroNumero} ${operacao} ${numeroAtual}`; // Mostra a operação e o número atual
    }
    return numeroAtual;
  };

  return (
    <Container>
      <Content>
        <Input value={exibirNoDisplay()} />
        <Row> 
          
          <Button label="C" onClick={limpar}/>
          <Button label="/" onClick={dividirNumeros}/>
          
        </Row>
        <Row>
          <Button label="9" onClick={() => adicionarNumero('9')}/>
          <Button label="8" onClick={() => adicionarNumero('8')}/>
          <Button label="7" onClick={() => adicionarNumero('7')}/>
          <Button label="x" onClick={multiplicarNumeros}/>
        </Row>
        <Row>
          <Button label="6" onClick={() => adicionarNumero('6')}/>
          <Button label="5" onClick={() => adicionarNumero('5')}/>
          <Button label="4" onClick={() => adicionarNumero('4')}/>
          <Button label="+" onClick={somarNumeros}/>
        </Row>
        <Row>
          <Button label="3" onClick={() => adicionarNumero('3')}/>
          <Button label="2" onClick={() => adicionarNumero('2')}/>
          <Button label="1" onClick={() => adicionarNumero('1')}/>
          <Button label="-" onClick={subtrairNumeros}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => adicionarNumero('0')}/>
          <Button label="=" onClick={calcularResultado}/>
        </Row>
      </Content>  
    </Container>
  );
};

export default App;
