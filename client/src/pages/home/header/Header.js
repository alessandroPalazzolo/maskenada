import React from "react";

import "./Header.scss";

const Header = props => {
    return (
      <header className="header__wrapper center">
        <div id="logo"></div>
        <h1>maskenada</h1>
        <div className="header__links--wrapper">
          <a
            href="https://www.instagram.com/maskenada_firenze/"
            target="_blank"
          >
            <svg
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              className="header__links--item"
            >
              <path d="M21.938,7.71a7.329,7.329,0,0,0-.456-2.394,4.615,4.615,0,0,0-1.1-1.694,4.61,4.61,0,0,0-1.7-1.1,7.318,7.318,0,0,0-2.393-.456C15.185,2.012,14.817,2,12,2s-3.185.012-4.29.062a7.329,7.329,0,0,0-2.394.456,4.615,4.615,0,0,0-1.694,1.1,4.61,4.61,0,0,0-1.1,1.7A7.318,7.318,0,0,0,2.062,7.71C2.012,8.814,2,9.182,2,12s.012,3.186.062,4.29a7.329,7.329,0,0,0,.456,2.394,4.615,4.615,0,0,0,1.1,1.694,4.61,4.61,0,0,0,1.7,1.1,7.318,7.318,0,0,0,2.393.456c1.1.05,1.472.062,4.29.062s3.186-.012,4.29-.062a7.329,7.329,0,0,0,2.394-.456,4.9,4.9,0,0,0,2.8-2.8,7.318,7.318,0,0,0,.456-2.393c.05-1.1.062-1.472.062-4.29S21.988,8.814,21.938,7.71Zm-1,8.534a6.351,6.351,0,0,1-.388,2.077,3.9,3.9,0,0,1-2.228,2.229,6.363,6.363,0,0,1-2.078.388C15.159,20.988,14.8,21,12,21s-3.159-.012-4.244-.062a6.351,6.351,0,0,1-2.077-.388,3.627,3.627,0,0,1-1.35-.879,3.631,3.631,0,0,1-.879-1.349,6.363,6.363,0,0,1-.388-2.078C3.012,15.159,3,14.8,3,12s.012-3.159.062-4.244A6.351,6.351,0,0,1,3.45,5.679a3.627,3.627,0,0,1,.879-1.35A3.631,3.631,0,0,1,5.678,3.45a6.363,6.363,0,0,1,2.078-.388C8.842,3.012,9.205,3,12,3s3.158.012,4.244.062a6.351,6.351,0,0,1,2.077.388,3.627,3.627,0,0,1,1.35.879,3.631,3.631,0,0,1,.879,1.349,6.363,6.363,0,0,1,.388,2.078C20.988,8.841,21,9.2,21,12S20.988,15.159,20.938,16.244Z"></path>
              <path d="M17.581,5.467a.953.953,0,1,0,.952.952A.954.954,0,0,0,17.581,5.467Z"></path>
              <path d="M12,7.073A4.927,4.927,0,1,0,16.927,12,4.932,4.932,0,0,0,12,7.073Zm0,8.854A3.927,3.927,0,1,1,15.927,12,3.932,3.932,0,0,1,12,15.927Z"></path>
            </svg>
          </a>

          <a
            href="https://open.spotify.com/user/316xpy4rw6vedeerjjhgrkr2nkcm"
            target="_blank"
          >
            <svg
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              className="header__links--item"
            >
              <path d="M18,10.561a.494.494,0,0,1-.245-.065,15.2,15.2,0,0,0-10.95-1.55.5.5,0,0,1-.232-.973A16.2,16.2,0,0,1,18.25,9.626a.5.5,0,0,1-.247.935Z"></path>
              <path d="M16.646,13.632a.5.5,0,0,1-.249-.066,12.459,12.459,0,0,0-9.121-1.292.5.5,0,1,1-.237-.971A13.458,13.458,0,0,1,16.9,12.7a.5.5,0,0,1-.25.933Z"></path>
              <path d="M15.312,16.583a.5.5,0,0,1-.251-.068,9.777,9.777,0,0,0-7.295-1.033.5.5,0,0,1-.245-.97,10.768,10.768,0,0,1,8.043,1.139.5.5,0,0,1-.252.932Z"></path>
              <path d="M12,23A11,11,0,1,1,23,12,11.013,11.013,0,0,1,12,23ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z"></path>
            </svg>
          </a>

          <a
            href="https://youtube.com/channel/UC7dJx0mww7MRpR_xRaS_vmQ"
            target="_blank"
          >
            <svg
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              className="header__links--item"
            >
              <path d="M12,20.55c-.3,0-7.279-.006-9.115-.5A3.375,3.375,0,0,1,.5,17.665,29.809,29.809,0,0,1,0,12,29.824,29.824,0,0,1,.5,6.334,3.375,3.375,0,0,1,2.885,3.948c1.836-.492,8.819-.5,9.115-.5s7.279.006,9.115.5A3.384,3.384,0,0,1,23.5,6.334,29.97,29.97,0,0,1,24,12a29.97,29.97,0,0,1-.5,5.666,3.384,3.384,0,0,1-2.388,2.386C19.279,20.544,12.3,20.55,12,20.55Zm0-16.1c-.072,0-7.146.006-8.857.464A2.377,2.377,0,0,0,1.464,6.593,29.566,29.566,0,0,0,1,12a29.566,29.566,0,0,0,.464,5.407,2.377,2.377,0,0,0,1.679,1.679c1.711.458,8.785.464,8.857.464s7.146-.006,8.857-.464a2.377,2.377,0,0,0,1.679-1.679A29.66,29.66,0,0,0,23,12a29.66,29.66,0,0,0-.464-5.407h0a2.377,2.377,0,0,0-1.679-1.679C19.146,4.456,12.071,4.45,12,4.45ZM9.7,15.95a.5.5,0,0,1-.5-.5V8.55a.5.5,0,0,1,.75-.433l5.975,3.45a.5.5,0,0,1,0,.866L9.95,15.883A.5.5,0,0,1,9.7,15.95Zm.5-6.534v5.168L14.675,12Z"></path>
            </svg>
          </a>

          <a href="https://soundcloud.com/maskenada_firenze" target="_blank">
            <svg
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              className="header__links--item"
            >
              <path d="M19.119,19.071H9.262a.5.5,0,0,1,0-1h9.857a3.881,3.881,0,1,0,0-7.761,1.084,1.084,0,0,0-.161.016l-.165.019a.482.482,0,0,1-.515-.334A6.055,6.055,0,0,0,9.513,6.748a.5.5,0,0,1-.5-.866A7.056,7.056,0,0,1,19.082,9.31h.037a4.881,4.881,0,1,1,0,9.761Z"></path>
              <path d="M.5,17.429a.5.5,0,0,1-.5-.5V10.357a.5.5,0,0,1,1,0v6.572A.5.5,0,0,1,.5,17.429Z"></path>
              <path d="M3.238,19.071a.5.5,0,0,1-.5-.5V7.619a.5.5,0,0,1,1,0V18.571A.5.5,0,0,1,3.238,19.071Z"></path>
              <path d="M5.977,19.071a.5.5,0,0,1-.5-.5V8.714a.5.5,0,0,1,1,0v9.857A.5.5,0,0,1,5.977,19.071Z"></path>
            </svg>
          </a>

          <a href="https://drive.google.com/drive/folders/1BQgUaN4iY_9yFG7thgb66cehQsFV5j05?usp=sharing" target="_blank">
            <svg
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              className="header__links--item"
              id='header__link--gdrive'
            >
              <path
                fill="#fff"
                d="m4.12 22.5c-.18 0-.345-.096-.434-.251l-3.62-6.317c-.089-.154-.089-.344 0-.498l7.88-13.684c.089-.154.254-.25.433-.25h.001c.178 0 .343.094.432.248l3.683 6.315c.091.155.091.347.001.503l-7.943 13.685c-.09.154-.255.249-.433.249zm-3.044-6.817 3.047 5.316 7.361-12.684-3.101-5.318z"
              />
              <path
                fill="#fff"
                d="m23.5 16.183h-7.158c-.178 0-.343-.095-.433-.249l-7.962-13.683c-.09-.155-.09-.346-.001-.5.09-.155.255-.251.434-.251h7.24c.179 0 .344.096.434.25l7.88 13.683c.089.155.089.345-.001.5-.089.154-.254.25-.433.25zm-6.871-1h6.006l-7.304-12.683h-6.082z"
              />
              <path
                fill="#fff"
                d="m19.88 22.5h-15.76c-.179 0-.344-.096-.434-.25-.089-.155-.089-.346.001-.5l3.666-6.317c.09-.154.254-.249.433-.249h15.714c.179 0 .343.095.433.25s.09.344.001.499l-3.62 6.317c-.089.154-.254.25-.434.25zm-14.892-1h14.602l3.047-5.317h-14.563z"
              />
            </svg>
          </a>
        </div>
      </header>
    );
}

export default Header;

