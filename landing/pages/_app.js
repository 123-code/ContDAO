import '../styles/globals.css'
import { useRouter } from 'next/router'
import { Route,Routes } from 'react-router-dom';
import AddProposal from './AddProposal'
import Home from './index'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
