import React,{useState,useEffect} from 'react';
import{ethers }from 'ethers';
import {FaWallet} from 'react-icons/fa';


const Connectbutton = ()=>{

   

    let [texto,settexto] = useState("Conectar Billetera");
    let [address,setaddress] = useState("");
   
   
    

const conectar = async()=>{
    if(!window.ethereum){
        alert('No Web3 Detected');
        console.info('No Web3 Detected');
        return;
    }
    else{
        
        try{
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = signer.getAddress();
            setaddress(address);
            await window.ethereum.request({method: 'eth_requestAccounts'});
            console.info(`conectada:${(await address).toString()}`);

            

        } catch(err){
            console.info(err);
        }
       
    }
}

useEffect( async()=>{
    settexto(`Conectada: ${(await address).toString()}`);
},[address]);

return(
    <>
   
        <button className=  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={conectar}> <FaWallet/> {texto}</button>
       
     
    </>
)
}
export default Connectbutton;