import React, { useState } from "react";
import { Left, Right } from "./styles";

import Input from "../Input/index";
import Table from "../Table/index";

export default function Infos() {
    //Left Inputs
    const [name, setName] = useState("Mr. John Doe");
    const [inc, setInc] = useState("John Doe Designs Inc.");
    const [loop, setLoop] = useState("1 Infinite Loop");
    const [state, setState] = useState("Cupertino, California, US");
    const [sendNumber, setSendNumber] = useState("90210");

    //Right Inputs
    const [lab, setLab] = useState("Metaware Labs");
    const [email, setEmail] = useState("www.metawarelabs.com");
    const [street, setStreet] = useState("123 Yonge Street");
    const [country, setCountry] = useState("Toronto, ON, Canada");
    const [number, setNumber] = useState("M5S 1B6");

    //Options
    const [money, setMoney] = useState("");

    //Left Inputs
    function changeName(e) {
        setName(e.target.value);
    }

    function changeInc(e) {
        setInc(e.target.value);
    }

    function changeLoop(e) {
        setLoop(e.target.value);
    }

    function changeState(e) {
        setState(e.target.value);
    }

    function changeSendNumber(e) {
        setSendNumber(e.target.value);
    }

    //Right Inputs
    function changeLab(e) {
        setLab(e.target.value);
    }

    function changeEmail(e) {
        setEmail(e.target.value);
    }

    function changeStreet(e) {
        setStreet(e.target.value);
    }

    function changeCountry(e) {
        setCountry(e.target.value);
    }

    function changeNumber(e) {
        setNumber(e.target.value);
    }

    //Options
    function changeMoney(e) {
        setMoney(e.target.value);
    }

    return (
        <div className="col">
            <Left>
                <Input type="text" value={name} onChange={changeName} />
                <Input type="text" value={inc} onChange={changeInc} />
                <Input type="text" value={loop} onChange={changeLoop} />
                <Input type="text" value={state} onChange={changeState} />
                <Input type="text" value={sendNumber} onChange={changeSendNumber} />
                <select onChange={changeMoney} >
                    <option value="£">British Pound (£)</option>
                    <option value="CAD $">Canadian Dollar ($)</option>
                    <option value="€">Euro (€)</option>
                    <option value="₹">Indian Rupee (₹)</option>
                    <option value="kr">Norwegian krone (kr)</option>
                    <option value="$">US Dollar ($)</option>
                </select>
                <div className="inv">
                    <Table value={money} />
                </div>
            </Left>
            <Right>
                <Input type="text" value={lab} onChange={changeLab} />
                <Input type="text" value={email} onChange={changeEmail} />
                <Input type="text" value={street} onChange={changeStreet} />
                <Input type="text" value={country} onChange={changeCountry} />
                <Input type="text" value={number} onChange={changeNumber} />
            </Right>
        </div>
    );
}
