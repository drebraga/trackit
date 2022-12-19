import Footer from "../../components/Footer/Footer";
import Habits from "../../components/Habit/Habits/Habits";
import Header from "../../components/Header/Header";
import NewHabit from "../../components/Habit/NewHabit/NewHabit";
import { NOHABITS } from "../../constants/Textos";
import { Button, Habit, Text, Title } from "./styled";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { APIURL } from "../../constants/url";
import Context from "../../components/Context/Context";
import PageLoad from "../../components/PageLoad/PageLoad";

const HabitPage = () => {
    const { resLogin } = useContext(Context);
    const [myHabits, setMyHabits] = useState(undefined);
    const [newHabitTab, setNewHabitTab] = useState(false);
    const [request, setRequest] = useState({
        name: "",
        days: []
    });

    useEffect(() => {
        axios.get(`${APIURL}/habits`, {
            headers: { Authorization: `Bearer ${resLogin.token}` }
        })
            .then((res) => setMyHabits(res.data))
            .catch((err) => alert(err.response.data.message));
    }, []);

    if (myHabits === undefined) {
        return <PageLoad />
    }

    return (
        <Habit>
            <Header />
            <Footer />
            <Title>Meus hábitos
                <Button
                    onClick={() =>
                        setNewHabitTab(!newHabitTab)}
                    type="button"
                    value="+" />
            </Title>
            {(newHabitTab) ?
                <NewHabit
                    myHabits={myHabits}
                    setMyHabits={setMyHabits}
                    setNewHabitTab={setNewHabitTab}
                    request={request}
                    setRequest={setRequest}
                />
                :
                <></>
            }
            {(myHabits.length === 0) ?
                <Text>
                    {NOHABITS}
                </Text>
                :
                myHabits.map((e) =>
                    <Habits
                        key={e.id}
                        habit={e}
                        myHabits={myHabits}
                        setMyHabits={setMyHabits}
                    />
                )
            }
        </Habit>
    );
}

export default HabitPage;