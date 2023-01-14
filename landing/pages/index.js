import Head from 'next/head'
import ConnectButton from './Components/ConnectWalllet'
import {useNavigate} from 'react-router-dom'
import { useRouter } from 'next/router'
import AddProposal from './AddProposal'


export default function Home() {

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
   <>
   <h1> ContrubutDAO </h1> 
    <ConnectButton/>
    <p> The Social Project Contribution DAO </p>
    <button> Explore Projects </button>
    <button onClick = {()=>router.push('/AddProposal')}> Build Something </button>
   </>
  )
}
