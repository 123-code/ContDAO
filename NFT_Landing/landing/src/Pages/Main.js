import React,{useState} from 'react';
import Connectbutton from '../Components/Connectbutton';
import {FaDiscord} from 'react-icons/fa';
import{AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import Description from '../Components/Description';


const Main = ()=>{
 let[icono,seticono] = useState(<AiFillFacebook/>);
 
return(
<div className="bg-gradient-to-t from-blue-400 to-emerald-400">
<div classname = "font-mono">
<Description/>
</div>

<div >

<Connectbutton/>

<div>
    <h1 className="font-mono"> Reach us At: </h1> 
    {botones()}
</div>

</div>

</div>
)
} 
export default Main;

// falta css aqui 
const botones = ()=>{
    const items = ["Discord","Twitter","Instagram","Facebook","Github","OpenSea Collection"];
    

    return(
items.map((item,index)=>{
    /// corregir.
    return(
        <ul>
        <div className = "whitespace-pre">
        <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded gap-y-4 " key={index}>{item}</button> 
        </div>

        <button> </button>
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
                    <div>
                    <div key={index}> {icon} </div>
                    </div>
                   
                    </>
                )

            })
        }
        </>
    )
}
      

    
