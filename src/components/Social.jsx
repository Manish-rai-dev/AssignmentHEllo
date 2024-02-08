import React from 'react';
import '../pages/SignIn.css';

const Social = () => {
  return (
    <div className="socials__wrapper">
      <ul className="socials__links">
        <li>
          <a href="https://github.com/" target="blank" className="social__link">
            <i className="ri-github-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            target="blank"
            className="social__link"
          >
            <i className="ri-twitter-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/"
            target="blank"
            className="social__link"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="https://discord.com/"
            target="blank"
            className="social__link"
          >
            <i className="ri-discord-fill"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;