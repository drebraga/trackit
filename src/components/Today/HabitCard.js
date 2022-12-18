import { Card, CheckBox, CheckText, HabitText, HabitTitle } from "./styled";
import { BsFillCheckSquareFill } from "react-icons/bs";
import axios from "axios";
import { APIURL } from "../../constants/url";
import { useContext, useState } from "react";
import Context from "../Context/Context";

const HabitCard = ({ habit, cont, setCont, myTodayHabits, setResLogin }) => {
    const user = useContext(Context);
    const { name, id, highestSequence, currentSequence, done } = habit;
    const statusAPI = (done) ? "uncheck" : "check";
    const [statusRequest, setStatusRequest] = useState(statusAPI);
    const [checked, setChecked] = useState(done);
    const [localCurrentSequence, setLocalCurrentSequence] = useState(currentSequence);
    const [localHighestSequence, setLocalHighestSequence] = useState(highestSequence);
    const isHigher = checked ?
        ((localCurrentSequence >= localHighestSequence) ? true : false)
        : false;

    function checkHabit(i, status) {
        axios.post(`${APIURL}/habits/${i}/${statusRequest}`, {}, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then(() => {
                const newStatus = (!status) ? "uncheck" : "check";
                setStatusRequest(newStatus);
                setChecked(!checked);
                if (!status) {
                    const newCont = cont + 1
                    setCont(newCont)
                    const percent = Math.round(newCont / myTodayHabits.length * 100);
                    setResLogin({...user, percent});
                } else {
                    const newCont = cont - 1
                    setCont(newCont)
                    const percent = Math.round(newCont / myTodayHabits.length * 100);
                    setResLogin({...user, percent});
                }
                (!status) ?
                    setLocalCurrentSequence(localCurrentSequence + 1)
                    :
                    setLocalCurrentSequence(localCurrentSequence - 1);
                (!status) ?
                    setLocalHighestSequence(localHighestSequence + 1)
                    :
                    setLocalHighestSequence(localHighestSequence - 1)
            })
            .catch((err) => alert(err.response.data.message))
    }

    return (
        <Card>
            <div>
                <HabitTitle>{name}</HabitTitle>
                <HabitText>
                    Sequência atual: <CheckText check={checked}>{localCurrentSequence} dias</CheckText><br />
                    Seu recorde: <CheckText check={isHigher}> {localHighestSequence} dias</CheckText>
                </HabitText>
            </div>
            <CheckBox check={checked}>
                <BsFillCheckSquareFill onClick={() => checkHabit(id, checked)} />
            </CheckBox>
        </Card>
    );
}

export default HabitCard;