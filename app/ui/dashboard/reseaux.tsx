import React from "react";

import { SOCIAL_LINKS } from "app/data/social-links";
import { SocialLinkItem } from "./social-link-item";

export function SocialLinks() {
  return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SOCIAL_LINKS.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />;
          })}
        </div>
  );
}