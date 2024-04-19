import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/CharlesBZ">
        <BsTwitter />
      </a>
    </div>

    <div>
    <a href="https://www.facebook.com/profile.php?id=100005557367170">
    <FaFacebookF />
    </a>
    </div>

    <div>
      <a href="https://www.instagram.com/charlescbz/?hl=en">
        <BsInstagram />
      </a>
    </div>

    <div>
      <a href="https://github.com/CharlesBZ">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;

//chang