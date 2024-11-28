import style from './Calendar.module.scss';

export const Calendar = ({children}) => {
    return ( 
        <section className={style.calendarStyle}>
            {children}
        </section>
    )
}