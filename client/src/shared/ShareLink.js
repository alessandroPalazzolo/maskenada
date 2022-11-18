import React from 'react';
import { useSelector } from "react-redux";

import './ShareLink.scss';

const ShareLink = ({ platform, platformIcon, redirect }) => {
  let itemUrl = useSelector(state => state.bodyLink.selected);
  const noUrlShareSupport = redirect.includes("messenger");
  console.log(itemUrl, noUrlShareSupport);
  itemUrl = noUrlShareSupport ? "" : itemUrl;

  return (
    <li className="share__link">
      <a href={redirect + itemUrl} target='_blank'>
        <div className="link__icon--platform">
          { 
            platformIcon 
          }
        </div>
        <p>Share on {platform}</p>
        <div className="link__icon--redirect">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            enable-background="new 0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
              fill="black"
            ></path>
          </svg>
        </div>
      </a>
    </li>
  );
}

export default ShareLink;