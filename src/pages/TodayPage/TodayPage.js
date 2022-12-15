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
    const { token } = useContext(Context);
    const [myTodayHabits, setMyTodayHabits] = useState(undefined);
    const date = new Date();
    const dia = date.getDay();
    const [cont, setCont] = useState(0);
    const [donePercent, setDonePercent] = useState(0);

    useEffect(() => {
        axios.get(`${APIURL}/habits/today`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                setMyTodayHabits(res.data);
                const newCont = res.data.filter(e => e.done === true).length;
                setCont(newCont);
                const percent = Math.round(newCont / res.data.length * 100);
                setDonePercent(percent);
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
            <Title>{WEEKDAY[dia]}, {date.toLocaleDateString()}</Title>
            {cont === 0 ?
                <Text textColor={false}>{NOHABITSTODAY}</Text>
                :
                <Text textColor={true}>{donePercent}% dos hábitos concluídos</Text>
            }
            {myTodayHabits.length === 0 ?
                <></>
                :
                myTodayHabits.map((e) =>
                    <HabitCard
                        key={e.id}
                        habit={e}
                        cont={cont}
                        setCont={setCont}
                        myTodayHabits={myTodayHabits}
                        setDonePercent={setDonePercent}
                    />
                )
            }
        </Today>
    );
}

export default TodayPage;