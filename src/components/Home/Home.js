import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';
import MiddleHeader from '../MiddleHeader/MiddleHeader';
import PricingSection from '../PricingSection/PricingSection';
import Services from '../Services/Services';
import SignSection from '../SignSection/SignSection';


const Home = () => {
    return (
        <div>
            
            <MiddleHeader></MiddleHeader>
            <About></About>
            <Services></Services>
            <PricingSection></PricingSection>
            <SignSection></SignSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;