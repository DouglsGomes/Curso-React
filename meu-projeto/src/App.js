import './App.css';
import Frase from './components/Frase';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {

  const nome= 'Annabeth'

  return (
    <div className="App">
    <h1>Hello World</h1>
    <Frase />
    <Frase />
    <SayMyName nome='Matheus'/>
    <SayMyName nome='Percy'/>
    <SayMyName nome={nome}/>
    <Pessoa nome={'Roberto'} idade={'24'} profissao={'Pedreiro'} foto={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UU-EfssNaaxZzfvqOvFl1qdWg7XAuptr3Q0EG0lJIA&s=10'}/>
    <List/>
    </div>
  );
}

export default App;
