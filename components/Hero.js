import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from "next/image";

const Hero = ({ blok }) => {
  console.log(blok, "blok");
  return (
    <div {...storyblokEditable(blok)}>
      <h2 className="hero__title">{blok.title}</h2>
      <p className="hero__text">{blok.text}</p>
      <img src={blok.image.filename} alt="Picard" />
    </div>
  );
};

export default Hero;
