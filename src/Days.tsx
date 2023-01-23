import './Days.css';
import cx from 'classnames';

interface DaysProps {
    today: Date;
}

const NrOfDays = 14;

const getWeekDays = (today: Date) => {
    const week = [];
    const current = new Date(today);
    current.setDate((current.getDate() - current.getDay()));

    for (let i = 0; i < NrOfDays; i++) {
        week.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }

    return week;
};

const day = (d: Date, today: Date) => {
    const dayStr = d
        .toLocaleDateString(undefined, { weekday: 'short' })
        .substring(0, 2);
    const isToday = d.getDate() === today.getDate();
    const isWeekEnd = d.getDay() === 0 || d.getDay() === 6;
    return <div className={cx(["day", isToday && "same-day", isWeekEnd && "weekend"])}>
        <div className="day-of-week">{dayStr}</div>
        <div className="day-of-month">{d.getDate()}</div>
    </div>;
};

const Days = ({ today }: DaysProps) => {
    const week = getWeekDays(today);

    return <div className="days-of-week">{week.map(d => day(d, today))}</div>;
};

export default Days;
