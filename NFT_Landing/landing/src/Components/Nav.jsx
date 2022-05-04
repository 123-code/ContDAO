import React from 'react';

const Nav = () => {
    const items = ['Inicio','Galeria','Votar'];
    return (
        
      items.map((item,index)=>{
          return(
              
              <li key={index}>{item}</li>
        
          )
           
      })
    )}
export default Nav;