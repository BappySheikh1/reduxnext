import '../styles/globals.css'
import { productStore } from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return <Provider store={productStore}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
