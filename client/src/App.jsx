import './App.css'
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import FeaturesSection from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
export default function App()
{
  return(
<div>
    <NavBar />
    <Hero/>
    <FeaturesSection/>
    <FAQ/>
    <Footer/>

</div>
  );
}