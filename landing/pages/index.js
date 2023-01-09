import Head from 'next/head'
import ConnectButton from './Components/ConnectWalllet'


export default function Home() {
  return (
   <>
   <h1> ContrubutDAO </h1> 
    <ConnectButton/>
    <p> The Social Project Contribution DAO </p>
    <button> Explore Projects </button>
    <button> Build Something </button>
   </>
  )
}
