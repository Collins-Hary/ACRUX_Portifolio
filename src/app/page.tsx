import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import Services from "@/components/Services";
 
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Team />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}