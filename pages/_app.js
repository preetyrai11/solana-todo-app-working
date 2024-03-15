import Head from 'next/head'
import '../styles/global.css'
// Import WalletConnectionProvider from components
// Import the solana wallet css
import { WalletConnectProvider } from '../components/WalletConnectProvider'
import '@solana/wallet-adapter-react-ui/styles.css' 


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Todo App</title>
            </Head>
            <main>
              <WalletConnectProvider> 
                {/* Wrap provider around App */}
                    <Component {...pageProps} />
              </WalletConnectProvider>
            </main>
        </>
    )
}

export default MyApp




























