import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import React from "react"; 
import './button.css'

function button(props){
    return(
            <div className="buttons">
                <button><FontAwesomeIcon icon={faHeart} id='iconButton'/>Favoritos</button>
                <button><FontAwesomeIcon icon={faGift}id='iconButton'/>Desejados</button>
                <button><FontAwesomeIcon icon={faStar} id='iconButton'/>Avaliados</button>
                <button><FontAwesomeIcon icon={faComment} id='iconButton'/>Resenha</button>               
            </div>         
    );
}

export default button;