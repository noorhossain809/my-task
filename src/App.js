import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import MiddleHeader from './components/MiddleHeader/MiddleHeader';
import About from './components/About/About';
import Services from './components/Services/Services';
import PricingSection from './components/PricingSection/PricingSection';
import SignSection from './components/SignSection/SignSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <MiddleHeader></MiddleHeader>
      <About></About>
      <Services></Services>
      <PricingSection></PricingSection>
      <SignSection></SignSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
