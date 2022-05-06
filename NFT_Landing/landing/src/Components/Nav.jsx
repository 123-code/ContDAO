import React from 'react';

const Nav = () => {
    const items = ['Inicio','Galeria','Votar',"Acerca de"];
  
    return (
        
      items.map((item,index)=>{
          return(
              
              <li style={{display:"flex"}}key={index}>{item}</li>
          )
           
      })
    )}
export default Nav;