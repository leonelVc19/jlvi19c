
import { Html, Head, Main, NextScript } from 'next/document';
import NavBar from './NavBar/nav';
import Footer from './Footer/footer';

export default function Document() {
  console.log('Handling scroll evenst');
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
