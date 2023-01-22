interface TodayProps {
    today: Date;
}

const Today = ({ today }: TodayProps) => {
    const dateStr = today.toLocaleDateString(
        undefined,
        { weekday: 'long', month: "long", day: "numeric" }
    );

    return (
        <div className="today">
            {dateStr}
        </div>
    );
};

export default Today;