import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Wrapper = styled.div`
padding: 1% 0;
`;

function Slider({ banners }) {
  return (
    <Wrapper>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}>
        {banners.results.map((banner) =>
          <img key={banner.id.toString()}
            src={banner.data.main_image.url}
            alt={banner.data.main_image.alt} />
        )
        }
      </Carousel>
    </Wrapper>
  );
}

export default Slider;