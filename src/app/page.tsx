import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Thoughts from "@/components/Thoughts";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Stack from "@/components/Stack";
import Tagline from "@/components/Tagline";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />
      <main className="flex-1 space-y-20 py-16 md:space-y-24">
        <Hero />
        <About />
        <Work />
        <Thoughts />
        <Experience />
        <Education />
        <Stack />
        <Tagline />
        <Quote />
      </main>
      <Contact />
    </div>
  );
}
