import Image from "next/image";
import Hero from "./components/Home/Hero";
import Goto from "./components/Home/Goto";
import CTA from "./components/Home/CTA";
import Showcase from "./components/Home/Showcase";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <Goto />
      {/* <Showcase/> */}
      <CTA />
    </div>




  );
}
