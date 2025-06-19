import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
  const images = [
    'https://plus.unsplash.com/premium_photo-1670524465634-93cf255ffa8b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2xhZGVzaGklMjB3ZWRkaW5nfGVufDB8fDB8fHww',
    'https://www.nijolcreative.com/wp-content/uploads/2023/07/Nijol-creative-wedding-photography-services.jpg',
    'https://www.fearlessphotographers.com/images/photogs/Nipun-Hazra-414.jpg'
 
  ];

  return (
    <div className="h-[90vh] bg-black text-white">
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Slide Image */}
              <img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 bg-opacity-90"></div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
