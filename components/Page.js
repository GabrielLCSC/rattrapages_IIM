import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";

const Page = ({ blok }) => (
  <div className="" {...storyblokEditable(blok)}>
    <header>
      <nav>
        <img className="header__logo" src="./icons/logo.png" alt="Picard" />
        <div className="header__links">
          <Link href="/">
            <a>Accueil</a>
          </Link>
          <Link href="products">
            <a>Nos produits</a>
          </Link>
          <Link href="contact">
            <a>Nous contacter</a>
          </Link>
        </div>
      </nav>
    </header>
    <main>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  </div>
);

export default Page;
