import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

interface ImageInterface {
    filename_1: string;
    filename_2: string;
    filename_3: string;
  }

const PhotoCarousel: React.FC<ImageInterface> = ({filename_1, filename_2, filename_3}) => {
    return (
        <MDBCarousel>
            <MDBCarouselItem itemId={1}>
                <img src={`${filename_1}`} className="img-fluid w-100" alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
                <img src={`${filename_2}`} className="img-fluid w-100" alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
                <img src={`${filename_3}`} className="img-fluid w-100" id="img-carousel" alt='...' />
            </MDBCarouselItem>
        </MDBCarousel>
    );
  };
  
export default PhotoCarousel;