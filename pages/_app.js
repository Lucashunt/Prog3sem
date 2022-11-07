import '../styles/globals.css'
import Layout from '../comps/layout'

function MyApp({ Component, pageProps }) {
  return (
    <div>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </div>
  )
}

export default MyApp
