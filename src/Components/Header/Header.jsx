import React from "react"; 
import './Header.css'


function Header(props){
    return(
        <header>
            <div className="container">
                <div id="imagem">
                    <img id="photo" src={props.imagem} alt="imagem"  /> 
                </div>
                <div id="nameUser"> {props.titulo}</div>
            </div>
            <div className="reading">
                <div className="qtdBooks">
                    <h1 style={{fontSize: '1.5em', color: 'rgb(124, 4, 4)'}}>{props.qtd}</h1>
                    <p style={{fontSize: '25px', color: 'rgb(124, 4, 4)', fontWeight:'700'}}>{props.lidos}</p>
                </div>
                <div className="qtdBooks" >
                    <h1 style={{fontSize: '1.5em', color: 'rgb(124, 4, 4)'}}>{props.qtdler}</h1>
                     <p style={{fontSize: '25px', color: 'rgb(124, 4, 4)', fontWeight:'700'}}>{props.vouLer}</p>
                 </div>
            </div>
            
        </header>
    );
}

export default Header;