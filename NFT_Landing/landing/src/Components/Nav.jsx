import React from 'react';

const Nav = () => {
    const items = ['Home','NFT Gallery ','Vote',"Our Mission"];
  
    return (
        
      items.map((item,index)=>{
          return(
            <>
              <nav className = "w-65 h-65 shadow-md bg-white px-3 absolute inset-y-0 right-0 ">
            
               <li key={index}>{item.index} </li> 
            
               </nav>
            </>
          )
           
      })
    )}
export default Nav;