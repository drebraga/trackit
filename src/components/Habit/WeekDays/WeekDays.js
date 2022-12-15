import { InputDays } from "./styled";
import { WEEKDAYSLETTERS } from "../../../constants/Textos";

const WeekDays = ({ dis, handleInput, days }) => {
    return (
        <div>
            {WEEKDAYSLETTERS.map((e, i) =>
                <InputDays
                    onClick={handleInput}
                    name={i}
                    key={i}
                    type="button"
                    value={e}
                    disabled={dis}
                    includes={days.includes(i)}
                />
            )}
        </div>
    );
}

export default WeekDays;