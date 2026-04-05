import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ForWhoSection from '@/components/ForWhoSection';
import WhatYouGetSection from '@/components/WhatYouGetSection';
import RealisationsSection from '@/components/RealisationsSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import ValueStackSection from '@/components/ValueStackSection';
import UrgencySection from '@/components/UrgencySection';
import FormSection from '@/components/FormSection';
import FAQSection from '@/components/FAQSection';
import CTAFinalSection from '@/components/CTAFinalSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ForWhoSection />
        <WhatYouGetSection />
        <RealisationsSection />
        <AboutSection />
        <TestimonialsSection />
        <ProcessSection />
        <ValueStackSection />
        <PricingSection />
        <UrgencySection />
        <FormSection />
        <FAQSection />
        <CTAFinalSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
