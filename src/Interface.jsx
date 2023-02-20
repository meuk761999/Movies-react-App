import React from 'react';
import './interface.css';
import Card from './Card';
import TopBar from './TopBar';
import Menu from './Menu'
import SData from './SData';



function replicator(cvalue,index)
{
   return(<Card key={index} imgsrc={cvalue.imgsrc} title={cvalue.title} sname={cvalue.sname} link={cvalue.link}/>);
}


function Interface()
{
    return(
        <>
        <div className="barContainer">
            <TopBar></TopBar>
        </div>
        <div className="bodyContainer">

    
            
            <div className="cardContainer">
                {SData.map(replicator)}
            </div>
        </div>

        </>
    );

}

export default Interface;