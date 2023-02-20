import React from 'react';
import './card.css';

function Card(props)
{
  
    return(
        <>
        <div className="cards">
            <div className="card bgW">
                <img src={props.imgsrc} alt="CoverImage" className="coverImage" />
                <div className="cardInfo bgW btmBrdr">
                    <span className="cardCotegory bgW">{props.title}</span>
                    <h3 className="cardTitle bgW">{props.sname}</h3>
                    <a href={props.link} target="_blank" >
                    <div className="buttonContainer bgW btmBrdr"> <button className="watchBtn">Watch Now</button></div>
                       
                    </a>
                </div>
            </div>
        </div>
    </>
    );
}
 export default Card;