import { CardShips } from "./CardShips";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCube, Navigation, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";

export const SliderShips = ({ship}) => {
    return (
        <Swiper
            modules={[Navigation, EffectCube, Autoplay]}
            effect="cube"
            grabCursor={true}
            slidesPerView={1}
            rewind={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            navigation={{
                nextEl: ".next",
                prevEl: ".prev"
            }}
            speed={1000}
            cubeEffect={{
                shadow: false,
                slideShadows: false
            }}
            >
                {ship.map((obj) => (
                    <SwiperSlide key={obj.id}>
                        <CardShips ship={[obj]}/>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}