import Navbar from "@/components/Navbar";
import NeuralBackground from "@/components/NeuralBackground";
import Hero from "@/components/Hero";
import ExploreWork from "@/components/ExploreWork";
import AboutMe from "@/components/AboutMe";
import CreativeIdentity from "@/components/CreativeIdentity";
import Journey from "@/components/Journey";
import TechStack from "@/components/TechStack";
import CredentialsVault from "@/components/CredentialsVault";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NeuralBackground />
      <Navbar />
      <main>
        <Hero />
        <ExploreWork />
        <AboutMe />
        <CreativeIdentity />
        <Journey />
        <TechStack />
        <CredentialsVault />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
