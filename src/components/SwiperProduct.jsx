// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import './SwiperProduct.scss'

// // import Swiper core and required modules
// import SwiperCore, {
//   FreeMode, Navigation, Thumbs,
// } from 'swiper';

// // install Swiper modules
// SwiperCore.use([FreeMode, Navigation, Thumbs]);


// function SwiperProduct({ images }) {
//   const [thumbsSwiper, setThumbsSwiper] = React.useState(null)
//   console.log(images);

//   return (
//     <div className='Wrapper'>
//       <Swiper
//         style={{
//           '--swiper-navigation-color': '#fff',
//           '--swiper-pagination-color': '#fff',
//         }}
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         className="mySwiper2"
//       >
//         {images.map((image) => (
//           <SwiperSlide key={image.image.url}>
//             <img src={image.image.url} alt='Product'/>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         loop={true}
//         // spaceBetween={10}
//         slidesPerView={3}
//         freeMode={true}
//         watchSlidesProgress={true}
//         className="mySwiper"
//       >
//         {images.map((image) => (
//           <SwiperSlide key={image.image.url}>
//             <img src={image.image.url} alt='Product'/>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }

// export default SwiperProduct
