import style from './About.module.scss';
import {Button} from './Button';
import { SliderShips } from '../Slider-cube/SliderShips';
import {ships} from "../Slider-cube/ships";
import {info} from "./info";

export const About = ({currentIndex}) => {
    const info_card = info[currentIndex];
    console.log(info_card.title);
    return <section className={style.about}>
                <div className={style.about__info}>
                    <h1>{info_card.title}</h1>
                    <p>{info_card.desc}</p>
                    <Button className={style.about__btn}>read more</Button>
                </div>
                    
                    
                <div className={style.about__card}>
                    <SliderShips ship={ships}/>
                </div>
            </section>
};