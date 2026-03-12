import style from './Slider.module.scss';
import { Button } from '../About/Button';
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import { useState } from 'react';

export const Slider = ({onChangeSlide}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [0,1,2,3,4];
    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
        onChangeSlide(newIndex);
    };
    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(newIndex);
        onChangeSlide(newIndex);
    };
    return <div className={style["slider-buttons"]}>
        <Button onClick={prevSlide} className="prev">
            <FaArrowLeft/>
        </Button>
        <Button onClick={nextSlide} className="next">
            <FaArrowRight/>
        </Button>
    </div>
};