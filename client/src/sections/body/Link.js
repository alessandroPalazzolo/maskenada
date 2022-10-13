import React from "react";

import "./Link.scss";

const Link = props => {
    const { text, imgUrl } = props;

    return (
      <li className="body__link">
        <a href="#" target="_blank">
          <div className="body__link--icon">
            { imgUrl 
                ?
                    <img alt="link img" src={imgUrl}></img>
                : 
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
            }
          </div>
          <p className="body__link--text">{text}</p>
          <div className="share-icon__wrapper">
            <svg 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
          </div>
        </a>
      </li>
    );
}

export default Link;