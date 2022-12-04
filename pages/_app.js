import '../styles/globals.css'
import Layout from '../comps/layout'
import { AuthProvider } from "../comps/AuthProvider"
import  { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <div>
       <AuthProvider>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </AuthProvider>
  <Toaster />
  </div>
  )
}

export default MyApp
