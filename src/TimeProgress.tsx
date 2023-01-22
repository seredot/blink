const TimeProgress = () => {
    const hours = [];

    for (let h = 0; h < 24; h++) {
        hours.push(String(h).padStart(2, '0'));
    }

    return <div className="time-progress">{hours.map(h => <div className="hour-box">{h}</div>)}</div>;
};

export default TimeProgress;