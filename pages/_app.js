import React from 'react'
import '../styles/base.css'

const MyApp = ({ Component, pageProps, store }) => {
    return (
        <Component {...pageProps} />
    )
}


export default MyApp