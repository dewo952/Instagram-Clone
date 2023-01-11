import React from "react";
import highlightyoutube from "../../Assets/ProfileHighlighs/highlight-youtube.png";
import highlightfacebook from "../../Assets/ProfileHighlighs/highlight-facebook.png";
import highlightmusic from "../../Assets/ProfileHighlighs/highlight-music.png";
import highlighttwitter from "../../Assets/ProfileHighlighs/highlight-twitter.png";

const HighLights = () => {
  return (
    <div className="flex flex-row p-2 content-center mb-8 space-x-2 md:space-x-10 text-sm font-semibold w-full overflow-auto">
      <div className="w-30">
        <a href="/">
          <div className="border p-1 rounded-full">
            <img
              className="rounded-full"
              src={highlightyoutube}
              alt="Youtube"
              width="80"
            />
          </div>
          <div className="text-center overflow-hidden text-ellipsis">
            Youtube
          </div>
        </a>
      </div>
      <div className="w-30">
        <a href="/">
          <div className="border p-1 rounded-full">
            <img
              className="rounded-full"
              src={highlightfacebook}
              alt="Facebook"
              width="80"
            />
          </div>
          <div className="text-center overflow-hidden text-ellipsis">
            Facebook
          </div>
        </a>
      </div>
      <div className="w-30">
        <a href="/">
          <div className="border p-1 rounded-full">
            <img
              className="rounded-full"
              src={highlightmusic}
              alt="Music"
              width="80"
            />
          </div>
          <div className="text-center overflow-hidden text-ellipsis">Music</div>
        </a>
      </div>
      <div className="w-30">
        <a href="/">
          <div className="border p-1 rounded-full">
            <img
              className="rounded-full"
              src={highlighttwitter}
              alt="Twitter"
              width="80"
            />
          </div>
          <div className="text-center overflow-hidden text-ellipsis">
            Twitter
          </div>
        </a>
      </div>
    </div>
  );
};

export default HighLights;
