import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from "next/image";

const ProductsItem = ({ blok }) => {
  console.log(blok, "blok");
  return (
    <div {...storyblokEditable(blok)}>
      {blok.prouctsItemItem.map((item) => {
        return (
          <div key={item._uid}>
            <h3>{item.title}</h3>
            <img src={item.image.filename} alt={item.title} />
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsItem;
