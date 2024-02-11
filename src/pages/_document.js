
import { Html, Head, Main, NextScript } from 'next/document';
import NavBar from './NavBar/nav';
import Footer from './Footer/footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body >      
          <NavBar />
          <Main/>
          <NextScript />
          <Footer/>
      </body>
    </Html>
  )
}
