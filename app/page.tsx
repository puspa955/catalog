import LandingPagenav from "./components/LandingPagenav";
import HomePage from "./components/HomePage";
import Campaigns from "./components/Campaigns";
import Who from "./components/Who";
import Logo from "./components/Logo";
import News from "./components/News";
import Resource from "./components/Resource";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  

  return (
    <main className="flex min-h-screen  flex-col items-center justify-between  bg-white">
    <div className='absolute top-0 right-0 z-20'>
          <LandingPagenav  />
          </div>

          <HomePage />
          <Campaigns />
          <Who/>
          <Logo/>
          <News/>
          <Resource/>
          <Contact/>
          <Footer />
          
          
        </main>
  );
}
