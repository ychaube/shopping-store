import React, { useState } from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const DEFAULT_SECTIONS = [
  {
    id: 1,
    title: "HATS",
    subtitle: "SHOP NOW",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    linkUrl: 'hats',
  },

  {
    id: 2,
    title: "JACKETS",
    subtitle: "SHOP NOW",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    linkUrl: 'jackets',
  },

  {
    id: 3,
    title: "SNEAKERS",
    subtitle: "SHOP NOW",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    linkUrl: 'sneakers',
  },

  {
    id: 4,
    title: "WOMENS",
    subtitle: "SHOP NOW",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    linkUrl: 'womens',
    size: 'large'
  },

  {
    id: 5,
    title: "MENS",
    subtitle: "SHOP NOW",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    linkUrl: 'mens',
    size: 'large'
  },
];
const Directory = () => {
  const [sections, setSections] = useState(DEFAULT_SECTIONS);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
