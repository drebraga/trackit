import { Card, CheckBox, HabitText, HabitTitle } from "./styled";
import { BsFillCheckSquareFill } from "react-icons/bs";

const HabitCard = () => {
    return (
        <Card>
            <div>
                <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
                <HabitText>Sequência atual: 3 dias<br/>
                Seu recorde: 5 dias</HabitText>
            </div>
            <CheckBox>
                <BsFillCheckSquareFill />
            </CheckBox>
        </Card>
    );
}

export default HabitCard;