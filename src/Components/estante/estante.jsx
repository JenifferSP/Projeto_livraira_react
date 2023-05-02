import React from "react"; 
import './estante.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function estante(props){
    return(
        <div className="Container_Livros"> 
            <div className="tituloEstante"> <h1>{props.titulo_estante}</h1></div> 
        <div className="elemento">       
                <div className="livros">
                    <img id="livro_1" src={props.imagem} alt="imagem"  /> 
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className="livros">
                    <img id="livro_1" src={props.imagem2} alt="imagem"  /> 
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className="livros">
                    <img id="livro_1" src={props.imagem3} alt="imagem"  /> 
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className="livros">
                    <img id="livro_1" src={props.imagem4} alt="imagem"  /> 
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className="livros">
                    <img id="livro_1" src={props.imagem5} alt="imagem"  /> 
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
      
                <div className="livros">
                    <img id="livro_1" src={props.imagem6} alt="imagem"  /> 
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className="livros">
                    <img id="livro_1" src={props.imagem7} alt="imagem"  /> 
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className="livros">
                    <img id="livro_1" src={props.imagem8} alt="imagem"  /> 
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
            </div>
        </div>
    );

    
}

export default estante;