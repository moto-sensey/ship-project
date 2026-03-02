import style from './About.module.scss';

export const Button = ({children, ...other}) => {
    return <button {...other}>{children}</button>
};