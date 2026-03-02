import style from './About.module.scss';
import {Button} from './Button';

export const About = () => {
    return <section className={style.about}>
                <div className={style.about__info}>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae numquam laudantium assumenda fuga! Natus maiores tempore quis mollitia voluptatum repellendus veniam, sunt corrupti necessitatibus illo officia molestiae eligendi quas iusto!</p>
                    <Button className={style.about__btn}>read more</Button>
                </div>
                <div className={style.about__card}></div>
            </section>
};