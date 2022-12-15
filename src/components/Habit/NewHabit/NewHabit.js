import axios from "axios";
import { useContext, useState } from "react";
import { APIURL } from "../../../constants/url";
import Context from "../../Context/Context";
import WeekDays from "../WeekDays/WeekDays";
import { DivButton, Form, InputFinal, InputText } from "./styled";

const NewHabit = ({ myHabits, setMyHabits, setNewHabitTab }) => {
    const { token } = useContext(Context);
    const [request, setRequest] = useState({
        name: "",
        days: []
    });

    function handleInput(e) {
        if (e.target.name === "name") {
            setRequest({
                ...request, [e.target.name]: e.target.value
            });
        } else {
            const newdays = request.days.includes(e.target.name) ?
                request.days.filter(d => d !== e.target.name) : [...request.days, Number(e.target.name)];
            setRequest({ ...request, days: newdays });
        }
    }

    function sendRequest(e) {
        e.preventDefault();
        if (request.days.length > 0) {
            setNewHabitTab(false);
            axios.post(`${APIURL}/habits`, request, {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then((res) => setMyHabits([...myHabits, res.data]))
                .catch((err) => console.log(err.response.data.message));
        } else {
            alert("Adicione pelo menos um dia ao hábito");
        }
    }

    return (
        <Form onSubmit={sendRequest}>
            <InputText
                type="text"
                placeholder="nome do hábito"
                name="name"
                value={request.name}
                onChange={handleInput}
                required
            />
            <WeekDays
                dis={false}
                handleInput={handleInput}
                days={request.days}
            />
            <DivButton>
                <InputFinal onClick={() => setNewHabitTab(false)} type="button" value="Cancelar" />
                <InputFinal type="submit" value="Salvar" />
            </DivButton>
        </Form>
    );
}

export default NewHabit;