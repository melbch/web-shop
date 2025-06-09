import React from 'react';
import HeroSection from './components/HeroSection';
import CategorySection from './components/Categories/CategorySection';
import LeavingSoonSection from './components/LeavingSoonSection';
import MembershipBanner from '../Membership/MembershipBanner';
import BestSellers from './components/BestSellers/BestSellers';
import PreOrderSection from './components/PreOrderSection';
import TeaserBanner from './components/TeaserBanner';
import SpecialOffers from './components/SpecialOffers';
import TestimonialsSlider from './components/Testimonials/TestimonialsSlider';
import JoinTheFamily from '../../components/JoinTheFamily';

const Home: React.FC = () => {
    
    return (
        <div>
            <HeroSection />
            <CategorySection />
            <LeavingSoonSection />
            <MembershipBanner />
            <BestSellers />
            <SpecialOffers />
            <TeaserBanner />
            <PreOrderSection />
            <TestimonialsSlider />
            <JoinTheFamily />
        </div>
    );
};

export default Home;