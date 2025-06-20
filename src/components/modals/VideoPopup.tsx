import React from 'react';
import 'react-modal-video/css/modal-video.css';

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "bgMEvrd2E", // This parameter is no longer used for Facebook video
}: any) => {
  return (
    <>
      {isVideoOpen && (
        <div className="cs_video_popup active" onClick={() => setIsVideoOpen(false)}>
          <div className="cs_video_popup_overlay"></div>
          <div className="cs_video_popup_content">
            <div className="cs_video_popup_container" style={{ maxWidth: '300px' }}>
              <div className="cs_video_popup_align">
                <div className="embed-responsive" style={{ paddingTop: '178%' }}> {/* Adjusted for portrait video */}
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61573060680959%2Fvideos%2F2972142416509949%2F&show_text=false&width=267&t=0" 
                    width="267" 
                    height="476" 
                    style={{border: 'none', overflow: 'hidden', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
              <button className="cs_video_popup_close" onClick={(e) => {
                e.stopPropagation();
                setIsVideoOpen(false);
              }}></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopup;

