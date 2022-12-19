import axios from "axios";
import { useContext, useState } from "react";
import { APIURL } from "../../../constants/url";
import Context from "../../Context/Context";
import WeekDays from "../WeekDays/WeekDays";
import { DivButton, Form, InputFinal, InputText } from "./styled";
import { ThreeDots } from "react-loader-spinner";

const NewHabit = ({ myHabits, setMyHabits, setNewHabitTab, request, setRequest }) => {
    const { resLogin } = useContext(Context);
    const [sendStatus, setSendStatus] = useState(false);

    function handleInput(e) {
        if (e.target.name === "name") {
            setRequest({
                ...request, [e.target.name]: e.target.value
            });
        } else {
            const newdays = request.days.includes(e.target.name) ?
                request.days.filter(d => d !== e.target.name)
                :
                [...request.days, Number(e.target.name)];
            setRequest({ ...request, days: newdays });
        }
    }

    function sendRequestAdd(e) {
        e.preventDefault();
        if (request.days.length > 0) {
            setSendStatus(true);
            axios.post(`${APIURL}/habits`, request, {
                headers: { Authorization: `Bearer ${resLogin.token}` }
            })
                .then((res) => {
                    setMyHabits([...myHabits, res.data])
                    setSendStatus(false);
                    setNewHabitTab(false);
                    setRequest({
                        name: "",
                        days: []
                    });
                })
                .catch((err) => console.log(err.response.data.message));
        } else {
            alert("Adicione pelo menos um dia ao hábito");
        }
    }

    return (
        <Form onSubmit={sendRequestAdd}>
            <InputText
                type="text"
                placeholder="nome do hábito"
                name="name"
                value={request.name}
                onChange={handleInput}
                disabled={sendStatus}
                required
            />
            <WeekDays
                dis={sendStatus}
                handleInput={handleInput}
                days={request.days}
            />
            <DivButton>
                <InputFinal
                    onClick={() => setNewHabitTab(false)}
                    disabled={sendStatus}
                    value="Cancelar"
                >
                    Cancelar
                </ InputFinal>
                <InputFinal
                    type="submit"
                    value="Salvar"
                    disabled={sendStatus}
                >
                    {(!sendStatus) ? "Salvar" :
                        <ThreeDots
                            height="45"
                            width="45"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />}
                </ InputFinal>
            </DivButton>
        </Form>
    );
}

export default NewHabit;