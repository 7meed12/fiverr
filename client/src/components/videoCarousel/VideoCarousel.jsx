import "./video.css"
import React from "react";
import {Carousel} from "react-bootstrap";
import ReactPlayer from "react-player";

const VideoCarousel = () => {
    const video = [
        {
            id: 1,
            src : "./img/1.mp4"
        },
        {
            id: 2,
            src : "./img/2.mp4"
        }
      ]
    return   (<Carousel>
            {video.map((video) => {
                 return (
                 <Carousel.Item key = {video.id}>
                    <ReactPlayer 
                        url = {video.src}
                        height="25%"
                        width="50%"
                        
                        pip={true}
                        controls={true}
                        playing={true}
                    />
                </Carousel.Item>)
            }
            )}
        </Carousel>)
  

}

export default VideoCarousel;