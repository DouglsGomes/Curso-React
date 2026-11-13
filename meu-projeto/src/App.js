import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Matheus'

  const newname = name.toUpperCase();
  function sum(a, b){
    return a + b
  }

  const url = 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-1024x683.jpg'

  return (
    <div className="App">
    <h1>Olá React</h1>
    <h2>Alterando o JSX</h2>
    <p>Olá, {newname}</p>
    <p> {sum(3, 2)}</p>
    <img src={url} alt="minha imagem"/>  
    <HelloWorld/>
    </div>
  );
}

export default App;
