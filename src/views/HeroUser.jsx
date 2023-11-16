import { Navbar } from "../components/Navbar";
import { TitleHeader } from "../components/TitleHeader";
import { ToGoButton } from "../components/ToGoButton";

function HeroUser() {

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.mundodinero.com.ar/wp-content/uploads/2018/03/sequia-1000x500.jpg)' }}>
      <div className="hero-overlay bg-opacity-40"></div>
      <Navbar />
      <div className="hero-content text-center text-neutral-content flex-col">
        <TitleHeader />
        <ToGoButton />
      </div>
    </div>
  )
}

export default HeroUser