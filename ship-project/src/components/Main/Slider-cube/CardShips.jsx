import style from '../About/About.module.scss';

export const CardShips = ({ship}) => {
    return (
        <div className={style.wrapper}>
            {ship.map(({
                 id,
                    title,
                    cargoCapacity,
                    icePassability,
                    iceClass,
                    azipodCount,
                    img,
            }) => (
                <div className={style["card-flex"]} key={id}>
                    <h2>{title}</h2>
                    <div className={style["card-flex_block"]}>
                        <div className={style["left_block"]}>
                            <div className={style.block}>
                                <p>Cargo capacity:</p>
                                <span>{cargoCapacity}</span>
                            </div>
                            <div className={style.block}>
                                <p>Ice passability:</p>
                                <span>{icePassability}</span>
                            </div>
                            <div className={style.block}>
                                <p>Ice class</p>
                                <span>{iceClass}</span>
                            </div>
                            <div className={style.block}>
                                <p>Azipod count:</p>
                                <span>{azipodCount}</span>
                            </div>
                        </div>
                        <div className={style["right_block"]}>
                            <img className={style.block} src={img} alt={title} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};