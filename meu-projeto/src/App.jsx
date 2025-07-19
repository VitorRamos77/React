import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Vitor'
  const newName = name.toUpperCase()

  function sum(a, b){
    return a+b
  }

  function alerta(){
    alert("Uma nova aba com o youtube foi aberta!")
  }

  const url = 'https://www.youtube.com'

  return (
    <div className="App">
      <h1>Olá, mundo!</h1>
      <h2>Alterando JSX!</h2>
      <p> Olá {newName}!</p>
      <p>Soma: {sum(2,4)}</p>
      <a href={url} target='_blank'><button style={{backgroundColor: '#f5f5f5', cursor: 'pointer'}} id='botao' onClick={alerta}>YOUTUBE</button></a>
      <HelloWorld/>
    </div>
  );
  
}

export default App;
