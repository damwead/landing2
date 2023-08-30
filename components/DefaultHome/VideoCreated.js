import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const VideoCreated = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);
  
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="video-created-area ptb-100">
        <div className="container">
          <div className="video-created-wrap">
            <img src="/img/video-created-img1.jpg" alt="Image" />

            <div className="video-wrap">
              <div
                onClick={() => setToggler(!toggler)}
                className="play-video"
              >
                <i className="flaticon-play"></i>
              </div>
            </div>

            <h2>Наши Видео Отчеты</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCreated;
