import './TimeProgress.css';
import cx from 'classnames';

interface TimeProgressProps {
    time: Date;
}

const TimeProgress = ({ time }: TimeProgressProps) => {
    const hours = [];

    for (let h = 0; h < 24; h++) {
        hours.push(h);
    }

    const hour = (h: number) => {
        const strHour = String(h).padStart(2, '0');
        const currentHour = time.getHours();
        const workHour = h > 8 && h < 19;
        return <div className={cx([
            "hour-box",
            currentHour > h && "past-hour",
            currentHour === h && "current-hour",
            workHour && "work-hour"
        ])}>{strHour}</div >;
    };
    return <div className="time-progress">{hours.map(hour)}</div>;
};

export default TimeProgress;