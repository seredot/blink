import './Progress.css';
import cx from 'classnames';

interface ProgressProps {
    time: Date;
    blink: boolean;
}

const Progress = ({ time, blink }: ProgressProps) => {
    const hours = Array.from(Array(24).keys());
    const blocks = Array.from(Array(6).keys());
    const currentHour = time.getHours();

    const block = (h: number, m: number) => {
        const past = currentHour > h || (currentHour == h && time.getMinutes() >= m);
        const currentBlock = past && currentHour == h && time.getMinutes() - m < 10;
        const workHour = h > 8 && h < 19;
        return (
            <div className="progress-block-container">
                <div className={cx([
                    "progress-block",
                    past && "progress-past",
                    currentBlock && !blink && "progress-current",
                    workHour && "progress-work-hour"
                ])} />
            </div>
        );
    };

    const hour = (h: number) => {
        const strHour = String(h).padStart(2, '0');
        return <div className="progress-hour">
            <div className='progress-hour-text'>{strHour}</div>
            <div className='progress-hour-blocks'>
                {blocks.map(b => block(h, b * 10))}
            </div>
        </div>;
    };

    return <div className="progress">{hours.map(hour)}</div>;
};

export default Progress;