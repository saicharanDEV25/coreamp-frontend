import Hero from "../../components/Hero/Hero";
import HowWeWork from "../../components/HowWeWork/HowWeWork";

import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";

import "./Home.css";

export default function Home({ onConsult }) {
  return (
    <>
      <Hero onConsult={onConsult} />
      <Services />
      <Projects />
      <HowWeWork />
      <Contact compact />
    </>
  );
}