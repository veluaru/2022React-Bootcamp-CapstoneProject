import styled from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const WrapperSlider = styled.div`
  max-height: 600px;
  max-width: 400px;
  box-shadow: 0px 0px 10px -3px rgba(110,110,110,0.53);
  border-radius: 10px;
`
const Image = styled.img`
  height: 100%;
  max-width: 400px;
  object-fit: cover;
`

function Slider({ images }) {
  return (
    <WrapperSlider>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        {images.map((image, index) => (
          <Image
            style={{ borderRadius: '10px' }}
            key={index}
            src={image.image.url}
            alt='Product'
          />
        ))}
      </Carousel>
    </WrapperSlider>
  )
}

export default Slider
