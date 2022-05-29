import React from "react";
import Login from "./Login";

const Yt = () => {
    return (
        <>
        <div className="youtube-links">
            <h1>Youtube links</h1>
                <h2>~Related to your Queries!</h2> <a href="https://www.youtube.com/channel/UCmXqzuTVafuLjYDy2WKqIpw">View Moree--/ </a> <br />
                      <div>
                      <iframe width="360" height="215" src="https://www.youtube.com/embed/mFNKjiJZw7s" 
                      title="YouTube video player" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; 
                      clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen></iframe>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <iframe width="360" height="215" src="https://www.youtube.com/embed/P62tCC6mecY" 
                      title="YouTube video player"
                       frameborder="0"
                        allow="accelerometer; autoplay;
                         clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                         allowfullscreen></iframe>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <iframe width="360" height="215" src="https://www.youtube.com/embed/AxTDkfLcTEU" 
                      title="YouTube video player"
                       frameborder="0"
                        allow="accelerometer; autoplay;
                         clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                         allowfullscreen></iframe>&nbsp;&nbsp;&nbsp;
    </div>
           
        </div>
        </>
    );
};

export default Yt;