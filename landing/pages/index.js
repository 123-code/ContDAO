import Head from 'next/head'
import ConnectButton from './Components/ConnectWalllet'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
   <h1> ContrubutDAO </h1> 
    <ConnectButton/>
    <p> The Social Project Contribution DAO </p>
   </>
  )
}
