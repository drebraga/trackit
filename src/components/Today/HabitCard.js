import { Card, CheckBox, CheckText, HabitText, HabitTitle } from "./styled";
import { BsFillCheckSquareFill } from "react-icons/bs";
import axios from "axios";
import { APIURL } from "../../constants/url";
import { useContext, useState } from "react";
import Context from "../Context/Context";

const HabitCard = ({ habit }) => {
    const { resLogin, setResLogin } = useContext(Context);
    const { name, id, highestSequence, currentSequence, done } = habit;
    const statusAPI = (done) ? "uncheck" : "check";
    const [statusRequest, setStatusRequest] = useState(statusAPI);
    const [checked, setChecked] = useState(done);
    const [localCurrentSequence, setLocalCurrentSequence] = useState(currentSequence);
    const [localHighestSequence, setLocalHighestSequence] = useState(highestSequence);
    const isHigher = checked ?
        ((localCurrentSequence >= localHighestSequence) ? true : false)
        : false;
    const position0 = 0;
    const diference = 1;
    const hundred = 100;


    function checkHabit(i, status) {
        axios.post(`${APIURL}/habits/${i}/${statusRequest}`, {}, {
            headers: { Authorization: `Bearer ${resLogin.token}` }
        })
            .then(() => {
                const newStatus = (!status) ? "uncheck" : "check";
                setStatusRequest(newStatus);
                setChecked(!checked);
                (!status) ?
                    setResLogin({
                        ...resLogin,
                        doneHabits: [...resLogin.doneHabits, resLogin.habits.filter(e => e.id === i)[position0]],
                        percent: Math.round(
                            [...resLogin.doneHabits,
                            resLogin.habits.filter(e => e.id === i)[position0]].length / resLogin.habits.length * hundred)
                    })
                    :
                    setResLogin({
                        ...resLogin,
                        doneHabits: resLogin.doneHabits.filter(e => e.id !== i),
                        percent: Math.round(
                            resLogin.doneHabits.filter(e => e.id !== i).length / resLogin.habits.length * hundred),
                    });
                (!status) ?
                    setLocalCurrentSequence(localCurrentSequence + diference)
                    :
                    setLocalCurrentSequence(localCurrentSequence - diference);
                (!status) ?
                    setLocalHighestSequence(localHighestSequence + diference)
                    :
                    setLocalHighestSequence(localHighestSequence - diference);
            })
            .catch((err) => alert(err.response.data.message))
    }

    return (
        <Card data-test="today-habit-container">
            <div>
                <HabitTitle data-test="today-habit-name">{name}</HabitTitle>
                <HabitText>
                    <p
                        data-test="today-habit-sequence">
                        Sequência atual:
                        <CheckText check={checked}> {localCurrentSequence} dias</CheckText></p>
                    <p
                        data-test="today-habit-record">
                        Seu recorde:
                        <CheckText check={isHigher}> {localHighestSequence} dias</CheckText></p>
                </HabitText>
            </div>
            <CheckBox check={checked}>
                <BsFillCheckSquareFill data-test="today-habit-check-btn" onClick={() => checkHabit(id, checked)} />
            </CheckBox>
        </Card>
    );
}

export default HabitCard;