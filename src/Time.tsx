import cx from 'classnames';

interface TimeProps {
    hour: number;
    minute: number;
    separator: boolean;
}

const Time = ({ hour, minute, separator }: TimeProps) => {
    const hourStr = String(hour).padStart(2, '0');
    const minuteStr = String(minute).padStart(2, '0');

    return (
        <div className="time">
            <div className="hour">{hourStr}</div>
            <div className={cx("separator", { hidden: !separator })}>:</div>
            <div className="minute">{minuteStr}</div>
        </div >
    );
};

export default Time;