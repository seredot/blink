import './Progress.css';
import cx from 'classnames';

interface ProgressProps {
    time: Date;
}

const Progress = ({ time }: ProgressProps) => {
    const hours = Array.from(Array(24).keys());
    const blocks = Array.from(Array(6).keys());

    const hour = (h: number) => {
        const strHour = String(h).padStart(2, '0');
        const currentHour = time.getHours();
        const workHour = h > 8 && h < 19;
        return <div className={cx([
            "progress-hour",
            currentHour > h && "progress-past-hour",
            currentHour === h && "progress-current-hour",
            workHour && "progress-work-hour"
        ])}>
            <div className='progress-hour-text'>{strHour}</div>
            <div className='progress-hour-blocks'>
                {blocks.map(b => (<div className='progress-block' />))}
            </div>
        </div>;
    };

    return <div className="progress">{hours.map(hour)}</div>;
};

export default Progress;