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
    const [cont, setCont] = useState(0);

    
    useEffect(() => {
        axios.get(`${APIURL}/habits/today`, {
            headers: { Authorization: `Bearer ${resLogin.token}` }
        })
            .then((res) => {
                setMyTodayHabits(res.data);
                const newCont = res.data.filter(e => e.done === true).length;
                setCont(newCont);
                const percent = Math.round(newCont / res.data.length * 100);
                setResLogin({ ...resLogin, percent });
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
                <Text textColor={true}>{resLogin.percent}% dos hábitos concluídos</Text>
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
                        setResLogin={setResLogin}
                    />
                )
            }
        </Today>
    );
}

export default TodayPage;