import WeekDays from "../WeekDays/WeekDays";
import { DivButton, Form, InputFinal, InputText } from "./styled";

const NewHabit = () => {
    return (
        <Form>
            <InputText type="text" placeholder="nome do hábito" required />
            <WeekDays />
            <DivButton>
                <InputFinal type="button" value="Cancelar" />
                <InputFinal type="submit" value="Salvar" />
            </DivButton>
        </Form>
    );
}

export default NewHabit;