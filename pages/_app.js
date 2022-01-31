import Structure from '../components/Structure'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Structure>
      <Component {...pageProps} />
    </Structure>
  )
}

export default MyApp
