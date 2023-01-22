import cx from 'classnames';

interface DaysOfWeekProps {
    today: Date;
}

const DaysOfWeek = ({ today }: DaysOfWeekProps) => {
    const week = [];
    const current = today;
    current.setDate((current.getDate() - current.getDay()));

    for (let i = 0; i < 7; i++) {
        week.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }

    const day = (d: Date) => {
        const dayStr = d
            .toLocaleDateString(undefined, { weekday: 'short' })
            .substring(0, 2);
        const isToday = d.getDay() === today.getDay();
        return <div className={cx(["day", isToday && "same-day"])}>{dayStr}</div>;
    };

    return <div className="days-of-week">{week.map(day)}</div>;
};

export default DaysOfWeek;
