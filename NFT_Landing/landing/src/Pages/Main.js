import React from 'react';
import Connectbutton from '../Components/Connectbutton';
import {FaDiscord} from 'react-icons/fa';
import{AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';


const Main = ()=>{
return(
<>
<body className="bg-lime-400">
<h1 className = "text"> owjnfg3orig </h1> 
<Connectbutton/>

<div>
    {botones()}
</div>

</body>

</>
)
} 
export default Main;

// falta css aqui 
const botones = ()=>{
    const items = ["Discord","Twitter","Instagram","Facebook","Github"];
    
    return(
items.map((item,index)=>{
    /// corregir.
    return(
        <ul>
        <div>
        <button key={index}>{item}</button> 
        {iconos()}
        </div>
        </ul>
        
    )
})
    )}

    // bugs aqui. 
const iconos = ()=>{
    const icons = [<AiFillFacebook/>,<FaDiscord/>,<AiFillInstagram/>,<AiFillGithub/>,<FaDiscord/>,<BsTwitter/>];
    return(
        <>
        {
            icons.map((icon,index)=>{
                return(
                    <>
                    <div key={index}> {icon} </div>
                    </>
                )

            })
        }
        </>
    )
}
      

    
