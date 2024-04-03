import Navbar from './Navbar';
import About from './about';
import Footer from './footer';

import HomeMain from './homeMain';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Navbar tab={1}/>
      <About/>
      <Footer/>
    </main>
  );
}
