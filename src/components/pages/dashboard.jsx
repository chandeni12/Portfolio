import { useEffect } from 'react';
import ProfileTop from '../ProfileTop'
import Hero from '../Hero'
import Testimonials from '../Testimonials'
import Project from '../Project'
import Quotes from '../Quotes'
import About from '../About'
import Certification from '../Certification'
import CodingStats from '../CodingStats'
import Qualification from '../Qualification'
import FooterNew from '../FooterNew'
import { Skiper39 } from '../ui/skiper-ui/skiper39'

function Dashboard() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ProfileTop />
      <section id="home">
        <Hero />
      </section>
      <Testimonials />
      <Project />
     
      <Quotes />
      <About />
      <Qualification />
      <Certification />
            <CodingStats />
      <FooterNew />
      {/* <Footer /> */}
      <Skiper39 />
    </main>
  );
}

export default Dashboard;
