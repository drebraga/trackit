import { InputDays } from "./styled";

const WeekDays = () => {
    const WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"];
    return (
        <div>
            {WEEKDAYS.map((e, i) => <InputDays key={i} type="button" value={e} />)}
        </div>
    );
}

export default WeekDays;