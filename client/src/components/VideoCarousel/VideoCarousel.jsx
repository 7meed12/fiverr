import Carousel from 'react-bootstrap/Carousel';
function VideoCarousel({ videos }) {
    return (
        <Carousel>
            {
                videos.map((item) => {
                    return (
                        <Carousel.Item>
                            <video video src={item} controls height={700}></video>


                        </Carousel.Item>
                    )
                })
            }

        </Carousel>
    );
}

export default VideoCarousel;