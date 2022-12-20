import axios from "axios";
import { useContext, useState } from "react";
import { APIURL } from "../../../constants/url";
import Context from "../../Context/Context";
import WeekDays from "../WeekDays/WeekDays";
import { DivButton, Form, InputFinal, InputText } from "./styled";
import { ThreeDots } from "react-loader-spinner";

const NewHabit = ({ myHabits, setMyHabits, setNewHabitTab, request, setRequest }) => {
    const { resLogin, setResLogin } = useContext(Context);
    const [sendStatus, setSendStatus] = useState(false);
    const date = new Date();
    const dia = date.getDay();
    const hundred = 100;


    function handleInput(e) {
        if (e.target.name === "name") {
            setRequest({
                ...request, [e.target.name]: e.target.value
            });
        } else {
            const newdays = request.days.includes(Number(e.target.name)) ?
                request.days.filter(d => d !== Number(e.target.name))
                :
                [...request.days, Number(e.target.name)];
            setRequest({ ...request, days: newdays });
            console.log(request.days)
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
                    (res.data.days.includes(dia)) &&
                        setResLogin({
                            ...resLogin,
                            habits: [...resLogin.habits, res.data],
                            percent: Math.round(resLogin.doneHabits.length / [...resLogin.habits, res.data].length * hundred)
                        });
                    setMyHabits([...myHabits, res.data]);
                    setSendStatus(false);
                    setNewHabitTab(false);
                    setRequest({
                        name: "",
                        days: []
                    });
                })
                .catch((err) => {
                    setSendStatus(false);
                    alert(err.response.data.message);
                });
        } else {
            alert("Adicione pelo menos um dia ao hábito");
        }
    }

    return (
        <Form data-test="habit-create-container" onSubmit={sendRequestAdd}>
            <InputText
                data-test="habit-name-input"
                type="text"
                placeholder="nome do hábito"
                name="name"
                value={request.name}
                onChange={handleInput}
                disabled={sendStatus}
            />
            <WeekDays
                dis={sendStatus}
                handleInput={handleInput}
                days={request.days}
            />
            <DivButton>
                <InputFinal
                    data-test="habit-create-cancel-btn"
                    onClick={() => setNewHabitTab(false)}
                    disabled={sendStatus}
                    value="Cancelar"
                >
                    Cancelar
                </ InputFinal>
                <InputFinal
                    data-test="habit-create-save-btn"
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