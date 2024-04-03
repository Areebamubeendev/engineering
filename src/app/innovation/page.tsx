import Navbar from '../Navbar';
import InnovationComponent from './innovation';
import Footer from '../footer';


export default function Innovation() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Navbar tab={3}/>
      <InnovationComponent/>
      <Footer/>
    </main>
  );
}