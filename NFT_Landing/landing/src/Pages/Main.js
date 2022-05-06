import React,{useState} from 'react';
import Connectbutton from '../Components/Connectbutton';
import {FaDiscord} from 'react-icons/fa';
import{AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';


const Main = ()=>{
 let[icono,seticono] = useState(<AiFillFacebook/>);
 
return(
<>
<body className="bg-gradient-to-t from-blue-400 to-emerald-400">

<Connectbutton/>

<div>
    <h1> Reach us At: </h1> 
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
        <button className = "content-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" key={index}>{item}</button> 
        </div>
        </ul>
        
    )
})
    )}

    // bugs aqui. 
const iconos = ()=>{
   
    const icons = [<AiFillFacebook/>,<AiFillInstagram/>,<AiFillGithub/>,<FaDiscord/>,<BsTwitter/>];
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
      

    
