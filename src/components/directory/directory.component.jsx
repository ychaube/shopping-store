import React, { useState } from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const DEFAULT_SECTIONS = [
  {
    id: 1,
    title: "HATS",
    subtitle: "SHOP NOW",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },

  {
    id: 2,
    title: "JACKETS",
    subtitle: "SHOP NOW",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },

  {
    id: 3,
    title: "SNEAKERS",
    subtitle: "SHOP NOW",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },

  {
    id: 4,
    title: "WOMENS",
    subtitle: "SHOP NOW",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    size: 'large'
  },

  {
    id: 5,
    title: "MENS",
    subtitle: "SHOP NOW",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    size: 'large'
  },
];
const Directory = () => {
  const [sections, setSections] = useState(DEFAULT_SECTIONS);

  return (
    <div className="directory-menu">
      {sections.map(({ id, title, subtitle, imageUrl, size }) => (
        <MenuItem key={id} title={title} subtitle={subtitle} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
