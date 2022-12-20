import { Card, DivSpaceBet } from "./styled";
import { BiTrash } from "react-icons/bi";
import WeekDays from "../WeekDays/WeekDays";
import axios from "axios";
import { APIURL } from "../../../constants/url";
import { useContext } from "react";
import Context from "../../Context/Context";

const Habits = ({ habit, myHabits, setMyHabits }) => {
    const { resLogin, setResLogin } = useContext(Context);

    function sendRequestRemove(id) {
        if (window.confirm("Deseja realmente apagar esse hábito?")) {
            axios.delete(`${APIURL}/habits/${id}`, {
                headers: { Authorization: `Bearer ${resLogin.token}` }
            })
                .then(() => {
                    const newHabits = myHabits.filter(e => e.id !== id);
                    const doneHabits = resLogin.doneHabits.filter(e => e.id !== id);
                    const habits = resLogin.habits.filter(e => e.id !== id);
                    setMyHabits(newHabits);
                    setResLogin({...resLogin, habits, doneHabits })
                    console.log(doneHabits, habits)
                })
                .catch((err) => console.log(err.response.data.message));
        }
    }

    return (
        <Card>
            <DivSpaceBet>
                {habit.name}
                <BiTrash onClick={() => sendRequestRemove(habit.id)} />
            </DivSpaceBet>
            <WeekDays dis={true} days={habit.days} />
        </Card>
    );
}

export default Habits;