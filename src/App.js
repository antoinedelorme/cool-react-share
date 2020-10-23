import React from "react";
import "./styles.css";

import { FacebookShareButton, FacebookIcon } from "react-share";

export default function SocialMediaButtons(props) {
  return (
    <FacebookShareButton
      url={"http://www.camperstribe.com"}
      quote={"CampersTribe - World is yours to explore"}
      hashtag="#camperstribe"
    >
      <FacebookIcon size={36} />
    </FacebookShareButton>
  );
}
