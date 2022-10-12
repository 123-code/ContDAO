import React,{useState,useEffect,useRef} from 'react';
import Connectbutton from '../Components/Connectbutton';
import {FaDiscord} from 'react-icons/fa';
import{AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import Description from '../Components/Description';
import Footer from '../Components/Footer';
import Web3Modal from 'web3modal';

// ">

const Main = ()=>{

const Web3ModalRef = useRef();
const [walletConnected,setwalletConnected] = useState(false);

const connectwallet = async () => {
    try {

      await getProviderOrSigner();
      setwalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };


  const getProviderOrSigner = async (needSigner = false) => {
    
    const provider = await Web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 5) {
      window.alert("Change the network to goerli");
      throw new Error("Change network to goerli");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  useEffect(()=>{
    if(!walletConnected){
      Web3ModalRef.current = new Web3Modal({
        network:"rinkeby",
        providerOptions:{},
        disableInjectedProvider:false,
      });
      connectwallet();
    }


  },[])


  const showbuttons = async()=>{
    if(!walletConnected){
        return(
            <button onClick={connectwallet}> Conectar Billetera </button>
        )
    }

    else{
        return(
            <buttton>conectada</buttton>
        )
    }
  }



 let[icono,seticono] = useState(<AiFillFacebook/>);
 
return(
    <>
    {showbuttons()}
<div className="bg-gradient-to-t from-blue-400 to-emerald-400">
<div classname = "font-mono">
<Description/>
</div>

<div >



<div>
    <h1 className="font-mono"> Reach us At: </h1> 
    {botones()}
</div>

</div>

</div>
</>
)
} 
export default Main;

// falta css aqui 
const botones = ()=>{
    const items = ["Discord","Twitter","Instagram","Facebook","Github","OpenSea Collection"];
    const links = ["https://twitter.com/dao_leaf1"]
    

    return(
items.map((item,index,links)=>{
    /// corregir.
    return(
        <ul>
        <div className = "whitespace-pre">
        <button onClick={links} className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded gap-y-4 " key={index}>{item}</button> 
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
      

    
// macro 