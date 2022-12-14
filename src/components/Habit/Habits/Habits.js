import { Card, DivSpaceBet } from "./styled";
import { BiTrash } from "react-icons/bi";
import WeekDays from "../WeekDays/WeekDays";

const Habits = () => {
    return (
        <Card>
            <DivSpaceBet>
                Ler 1 capítulo de livro
                <BiTrash />
            </DivSpaceBet>
            <WeekDays />
        </Card>
    );
}

export default Habits;