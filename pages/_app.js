import '../styles/globals.css'
import Layout from '../comps/layout'
import { AuthProvider } from "../comps/AuthProvider"

function MyApp({ Component, pageProps }) {
  return (
    <div>
       <AuthProvider>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </AuthProvider>
  </div>
  )
}

export default MyApp
