import './App.css';
import Line from './Components/Line/Line';
import Header from './Components/Header/Header';
import Estante from './Components/estante/estante';
import Button from './Components/buttons/button';
import photo from './img/myphoto.png';
import livro_1 from './img/livro-1.jpg';
import livro_2 from './img/livro_2.png';
import livro_3 from './img/livro_3.png';
import livro_4 from './img/livro_4.png';
import livro_5 from './img/livro_5.png';
import livro_6 from './img/livro_6.png';
import livro_7 from './img/livro_7.png';
import livro_8 from './img/livro_8.png';
import livro_9 from './img/livro_9.png';
import livro_10 from './img/livro_10.png';



import Avaliacoes from './Components/avaliacoes/avaliacoes';
function App() {
  return (
    <div className="App">
      <Header  imagem={photo} titulo="Jeniffer Sousa" lidos="Lidos" qtd="23"
        qtdler="36" vouLer="Vou Ler"/>
      <Line />
      <Estante titulo_estante="Minha Estante"
      imagem={livro_1} imagem2={livro_2} imagem3={livro_3} imagem4={livro_4} imagem5={livro_5} imagem6={livro_6} imagem7={livro_7} imagem8={livro_10}/>  
      <Button/>

      <Avaliacoes imagemRating={livro_8} imagemRating2={livro_9}
      titulo_Rating="Últimas Avaliações" titulo_livro="O retrato de Dorian Gray" rating="O livro é sem dúvidas fascinante. As filosofias de Wilde me fizeram refletir. Eu como gosto de livros darks é realmente muito bom"
      titulo_livro2="Territorio Lovecraft" rating2="O livro é excelente. Além de juntar o horror cósmico lovecraftiano ainda faz uma crítica ao racismo presente na obra de Lovecraft e outros autores. "/>
   
      
    
    </div>
  );
}

export default App;
