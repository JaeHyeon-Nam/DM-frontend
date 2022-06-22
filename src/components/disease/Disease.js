import "./disease.css";
import React, {useState} from 'react'

export default function Disease() {
    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [btn4, setBtn4] = useState(false);
    const [btn5, setBtn5] = useState(false);
    const [btn6, setBtn6] = useState(false);
    const [btn7, setBtn7] = useState(false);
    
    const [rank1, setRank1] = useState([0, ""]);
    const [rank2, setRank2] = useState([0, ""]);
    const [rank3, setRank3] = useState([0, ""]);
    const [rank4, setRank4] = useState([0, ""]);
    const [rank5, setRank5] = useState([0, ""]);
    const [rank6, setRank6] = useState([0, ""]);

    
    const [tag, setTag] = useState([]);

    const [cnt1, setCnt1] = useState(0);
    const [cnt2, setCnt2] = useState(0);
    const [cnt3, setCnt3] = useState(0);
    const [cnt4, setCnt4] = useState(0);
    const [cnt5, setCnt5] = useState(0);
    const [cnt6, setCnt6] = useState(0);

    let tagDisease = [];
    const buttonOnClick = (id) => {
        if (id === 1) {
            if (cnt1 === 0) {
                setRank1([id, "first"]);
                setBtn1(true);
                setCnt1(cnt1+1);
                setTag((tag) => [...tag, "#두통"]);
                return "button_select1"; 

            } else if (cnt1 === 1) {
                setRank1([id, "second"])
                setBtn1(true);
                setTag((tag) => [...tag, "#두통"]);
                setCnt1(cnt1+1);
                return "button_select2"; 
            } else if (cnt1 === 2) {
                setRank1([id, "third"])
                setBtn1(true);
                setTag((tag) => [...tag, "#두통"]);
                setCnt1(cnt1+1);
                return "button_select3"; 
            } else if (cnt1 === 3) {
                setRank1([id ,"four"])
                setBtn1(true);
                setTag((tag) => [...tag, "#두통"]);
                setCnt1(cnt1+1);
                return "button_select4"; 
            } else if (cnt1 === 4) {
                setRank1([id, "five"])
                setBtn1(true);
                setTag((tag) => [...tag, "#두통"]);
                setCnt1(cnt1+1);
                return "button_select5"; 
            } else if (cnt1 === 5){
                setCnt1(0);
                return "disease_button";
            }
            
        } else if (id === 2) {
        
            if (cnt2 === 0) {
                setRank2([id, "first"]);
                setBtn2(true);
                setTag((tag) => [...tag, "#암"]);
                setCnt2(cnt2+1);
                return "button_select1"; 
            } else if (cnt2 === 1) {
                setRank2([id, "second"]);
                setBtn2(true);
                setTag((tag) => [...tag, "#암"]);
                setCnt2(cnt2+1);
                return "button_select2"; 
            } else if (cnt2 === 2) {
                setRank2([id, "third"]);
                setBtn2(true);
                setTag((tag) => [...tag, "#암"]);
                setCnt2(cnt2+1);
                return "button_select3"; 
            } else if (cnt2 === 3) {
                setRank2([id, "four"]);
                setBtn2(true);
                setTag((tag) => [...tag, "#암"]);
                setCnt2(cnt2+1);
                return "button_select4"; 
            } else if (cnt2 === 4) {
                setRank2([id, "five"]);
                setTag((tag) => [...tag, "#암"]);
                setCnt2(cnt2+1);
                return "button_select5"; 
            } else if (cnt2 === 5){
                setCnt2(0);
                console.log(cnt2);
                return "disease_button";
            }

        } else if (id === 3) {
            if (cnt3 === 0) {
                setRank3([id, "first"]);
                setBtn3(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt3(cnt3+1);
                return "button_select1"; 
                
            } else if (cnt3 === 1) {
                setRank3([id, "second"]);
                setBtn3(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt3(cnt3+1);
                return "button_select2"; 
            } else if (cnt3 === 2) {
                setRank3([id, "third"]);
                setBtn3(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt3(cnt3+1);
                return "button_select3"; 
            } else if (cnt3 === 3) {
                setRank3([id, "four"]);
                setBtn3(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt3(cnt3+1);
                return "button_select4"; 
            } else if (cnt3 === 4) {
                setRank3([id, "five"]);
                setBtn3(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt3(cnt3+1);
                return "button_select5"; 
            } else if (cnt3 === 5) {
                setCnt3(0);
                return "disease_button";
            }
        } else if (id === 4) {
            if (cnt4 === 0) {
                setRank4([id, "first"]);
                setBtn4(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt4(cnt4+1);
                return "button_select1"; 
                
            } else if (cnt4 === 1) {
                setRank4([id, "second"]);
                setBtn4(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt4(cnt4+1);
                return "button_select2"; 
            } else if (cnt4 === 2) {
                setRank4([id, "third"]);
                setBtn4(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt4(cnt4+1);
                return "button_select3"; 
            } else if (cnt4 === 3) {
                setRank4([id, "four"]);
                setBtn4(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt4(cnt4+1);
                return "button_select4"; 
            } else if (cnt4 === 4) {
                setRank4([id, "five"]);
                setBtn4(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt4(cnt4+1);
                return "button_select5"; 
            } else if (cnt4 === 5){
                setCnt4(0);
                return "disease_button";
            }
        } else if (id === 5) {
            if (cnt5 === 0) {
                setRank5([id, "first"]);
                setBtn5(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt5(cnt5+1);
                return "button_select1"; 
                
            } else if (cnt5 === 1) {
                setRank5([id, "second"]);
                setBtn5(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt5(cnt5+1);
                return "button_select2"; 
            } else if (cnt5 === 2) {
                setRank5([id, "third"]);
                setBtn5(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt5(cnt5+1);
                return "button_select3"; 
            } else if (cnt5 === 3) {
                setRank5([id, "four"]);
                setBtn5(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt5(cnt5+1);
                return "button_select4"; 
            } else if (cnt5 === 4) {
                setRank5([id, "five"]);
                setBtn3(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt5(cnt5+1);
                return "button_select5"; 
            } else if (cnt5 === 5){
                setCnt5(0);
                return "disease_button";
            }
        }else if (id === 6) {
            if (cnt6 === 0) {
                setTag((tag) => [...tag, "#증상3"]);
                setRank6([id, "first"]);
                setBtn6(true);
                setCnt6(cnt6+1);
                return "button_select1"; 
                
            } else if (cnt6 === 1) {
                setRank6([id, "second"]);
                setBtn6(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt6(cnt6+1);
                return "button_select2"; 
            } else if (cnt6 === 2) {
                setRank6([id, "third"]);
                setBtn6(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt6(cnt6+1);
                return "button_select3"; 
            } else if (cnt6 === 3) {
                setRank6([id, "four"]);
                setBtn6(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt6(cnt6+1);
                return "button_select4"; 
            } else if (cnt6 === 4) {
                setRank6([id, "five"]);
                setBtn6(true);
                setTag((tag) => [...tag, "#증상3"]);
                setCnt6(cnt6+1);
                return "button_select5"; 
            } else if (cnt6 === 5){
                setCnt6(0);
                return "disease_button";
            }
        }
    };

    const colorChange1 = () => {
        if (rank1[0] === 1 && rank1[1] === "first") {
            return "button_select1";
        } else if (rank1[0] === 1 && rank1[1] === "second") {
            return "button_select2";
        } else if (rank1[0] === 1 && rank1[1] === "third") {
            return "button_select3";
        } else if (rank1[0] === 1 && rank1[1] === "four") {
            return "button_select4";
        } else if (rank1[0] === 1 && rank1[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange2 = () => {
        if (rank2[0] === 2 && rank2[1] === "first") {
            return "button_select1";
        } else if (rank2[0] === 2 && rank2[1] === "second") {
            return "button_select2";
        } else if (rank2[0] === 2 && rank2[1] === "third") {
            return "button_select3";
        } else if (rank2[0] === 2 && rank2[1] === "four") {
            return "button_select4";
        } else if (rank2[0] === 2 && rank2[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange3 = () => {
        if (rank3[0] === 3 && rank3[1] === "first") {
            return "button_select1";
        } else if (rank3[0] === 3 && rank3[1] === "second") {
            return "button_select2";
        } else if (rank3[0] === 3 && rank3[1] === "third") {
            return "button_select3";
        } else if (rank3[0] === 3 && rank3[1] === "four") {
            return "button_select4";
        } else if (rank3[0] === 3 && rank3[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange4 = () => {
        if (rank4[0] === 4 && rank4[1] === "first") {
            return "button_select1";
        } else if (rank4[0] === 4 && rank4[1] === "second") {
            return "button_select2";
        } else if (rank4[0] === 4 && rank4[1] === "third") {
            return "button_select3";
        } else if (rank4[0] === 4 && rank4[1] === "four") {
            return "button_select4";
        } else if (rank4[0] === 4 && rank4[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange5 = () => {
        if (rank5[0] === 5 && rank5[1] === "first") {
            return "button_select1";
        } else if (rank5[0] === 5 && rank5[1] === "second") {
            return "button_select2";
        } else if (rank5[0] === 5 && rank5[1] === "third") {
            return "button_select3";
        } else if (rank5[0] === 5 && rank5[1] === "four") {
            return "button_select4";
        } else if (rank5[0] === 5 && rank5[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }

    const colorChange6 = () => {
        if (rank6[0] === 6 && rank6[1] === "first") {
            return "button_select1";
        } else if (rank6[0] === 6 && rank6[1] === "second") {
            return "button_select2";
        } else if (rank6[0] === 6 && rank6[1] === "third") {
            return "button_select3";
        } else if (rank6[0] === 6 && rank6[1] === "four") {
            return "button_select4";
        } else if (rank6[0] === 6 && rank6[1] === "five") {
            return "button_select5";
        } else {
            return "disease_button";
        }
    }
    return (
        <div>
            <div className="button_container">
                <button onClick={() => buttonOnClick(1)} className={ colorChange1()}>증상</button>
                <button onClick={() => buttonOnClick(2)} className={ colorChange2()}>증상</button>
                <button onClick={() => buttonOnClick(3)} className={ colorChange3()}>증상</button>
                <button onClick={() => buttonOnClick(4)} className={ colorChange4()}>증상</button>
                <button onClick={() => buttonOnClick(5)} className={ colorChange5()}>증상</button>
                <button onClick={() => buttonOnClick(6)} className={ colorChange6()}>증상</button>
            </div>
            <div className="search_container">
                <button className="search_button">검색</button>
            </div>
            <div>
                <h5>작성한 타이틀</h5>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
            </div>
        </div>
    );
};
