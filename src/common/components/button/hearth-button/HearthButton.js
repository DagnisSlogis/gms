import React from "react";

import { LikeButton } from './HearthButton.style';


export const HearthButton = () => (
  <LikeButton>
    <img
      src={require("../../../../assets/images/post/like.svg")}
      alt='Heath'
    />
    MAN PATĪK
  </LikeButton>
);
