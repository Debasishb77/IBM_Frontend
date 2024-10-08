import React from 'react';
import '../css/Videos.css';
import videos from '../data/videos.json';
import Aos from 'aos';
// import 'bootstrap/dist/css/bootstrap.min.css';
Aos.init()
const Videos = () => {
  return (
    <div data-aos='fade-up' className='parent-container'>
      <div className='heading-container'>
        <h1 className='heading'><span>Wellness Watch</span> Top Health Videos 📺</h1>
      </div>
      
      <div className='video-container'>
        {videos.map((video) => (
          <div className='video-content' key={video.id} data-aos='fade-up'>
            <div className="iframe-video ratio ratio-21x9">
              <iframe src={video.content} title="YouTube video" allowFullScreen></iframe>
            </div>
              <h2>{video.title}</h2>
              <p>{video.owner}</p>
              <hr/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;