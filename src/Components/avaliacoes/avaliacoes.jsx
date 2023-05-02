import React from "react"; 
import './avaliacoes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function avaliacoes(props){
    return(
          <div className="Container_Rating_Main">
                <div className="tituloAvaliacoes"> <h1>{props.titulo_Rating}</h1></div> 
            <div className="Container_Rating">
                <div className="Elemento_Rating">
                <div className="book_rating">
                        <img src={props.imagemRating}  alt=""  />
                            <div className="stars-rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    <div>
                    <h1 className="title_rating">{props.titulo_livro}</h1>            
                        <p className="text_rating">{props.rating}</p>
                    </div>
                </div>
                <div className="Elemento_Rating">
                    <div className="book_rating">
                        <img src={props.imagemRating2}  alt=""  />
                            <div className="stars-rating" >
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
    
                    <div>
                        <h1 className="title_rating" style={{fontSize: '11px'}}>{props.titulo_livro2}</h1>            
                        <p className="text_rating" style={{fontSize: '11px'}}>{props.rating2}</p>
                    </div>
                </div>
                </div>
          </div>
    );
}

export default avaliacoes;