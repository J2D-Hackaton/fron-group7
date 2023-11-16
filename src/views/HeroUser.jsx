import { Navbar } from "../components/Navbar";
import { TitleHeader } from "../components/TitleHeader";
import { ToGoButton } from "../components/ToGoButton";

function HeroUser() {

  return (
    <div className="hero min-h-screen bgPrin">
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