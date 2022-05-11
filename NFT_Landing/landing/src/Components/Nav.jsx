import React,{useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';



const Nav = () => {
    let[show,setshow] = useState(true);
    const items = ['Home','NFT Gallery ','Vote',"Our Mission"];
  
setshow=()=>{show = !show};

    return (
        <>
      {items.map((item,index)=>{
          return(
            <>
            
{show ?
              <nav className = "w-65 h-65 shadow-md bg-white px-3 absolute inset-y-0 right-0 ">
            
               <li key={index}>{item.index} </li> 
                
               </nav>
              
              : null}

            </>
          )
           
      })}
      <button onClick = { setshow }><AiOutlineMenu/> </button>
      </>
    )}
export default Nav;