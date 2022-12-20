import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Context from "../../components/Context/Context";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HabitCard from "../../components/Today/HabitCard";
import PageLoad from "../../components/PageLoad/PageLoad";
import { NOHABITSTODAY, WEEKDAY } from "../../constants/Textos";
import { APIURL } from "../../constants/url";
import { Text, Title, Today } from "./styled";

const TodayPage = () => {
    const { resLogin, setResLogin } = useContext(Context);
    const [myTodayHabits, setMyTodayHabits] = useState(undefined);
    const date = new Date();
    const dia = date.getDay();
    const hundred = 100;



    useEffect(() => {
        axios.get(`${APIURL}/habits/today`, {
            headers: { Authorization: `Bearer ${resLogin.token}` }
        })
            .then((res) => {
                const habits = res.data;
                const doneHabits = res.data.filter(e => e.done === true);
                const percent = Math.round(doneHabits.length / habits.length * hundred);
                setResLogin({ ...resLogin, habits, doneHabits, percent });
                setMyTodayHabits(res.data);
            })
            .catch((err) => console.log(err.response.data.message));
    }, []);

    if (myTodayHabits === undefined) {
        return <PageLoad />
    }

    return (
        <Today>
            <Header />
            <Footer />
            <Title data-test="today">{WEEKDAY[dia]}, {date.toLocaleDateString()}</Title>
            {resLogin.percent === 0 ?
                <Text
                    data-test="today-counter"
                    textColor={false}>
                    {NOHABITSTODAY}
                </Text>
                :
                isNaN(resLogin.percent) ?
                    <Text
                        data-test="today-counter"
                        textColor={false}>
                        {NOHABITSTODAY}
                    </Text>
                    :
                    <Text
                        data-test="today-counter"
                        textColor={true}>
                        {resLogin.percent}% dos hábitos concluídos
                    </Text>
            }
            {myTodayHabits.length === 0 ?
                <></>
                :
                myTodayHabits.map((e) =>
                    <HabitCard
                        key={e.id}
                        habit={e}
                    />
                )
            }
        </Today>
    );
}

export default TodayPage;