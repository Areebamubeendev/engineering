import Navbar from '../Navbar';
import About from '../about';
import Footer from '../footer';

import ServiceComponent from './services';

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Navbar tab={2}/>
      <ServiceComponent/>
      <Footer/>
    </main>
  );
}