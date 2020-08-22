import React, { useState } from "react";
import { Left, Right } from "./styles";

import Input from "../Input/index";

export default function Infos() {
    const [name, setName] = useState("Mr. John Doe");
    const [inc, setInc] = useState("John Doe Designs Inc.");
    const [loop, setLoop] = useState("1 Infinite Loop");
    const [lab, setLab] = useState("Metaware Labs");

    function changeName(e) {
        setName(e.target.value);
    }

    function changeInc(e) {
        setInc(e.target.value);
    }

    function changeLoop(e) {
        setLoop(e.target.value);
    }

    function changeLab(e) {
        setLab(e.target.value);
    }

    return (
        <div className="col">
            <Left>
                <Input type="text" value={name} onChange={changeName} />
                <Input type="text" value={inc} onChange={changeInc} />
                <Input type="text" value={loop} onChange={changeLoop} />
                <select>
                    <option>British Pound (£)</option>
                    <option>Canadian Dollar ($)</option>
                    <option>Indian Rupee (₹)</option>
                    <option>Norwegian krone (kr)</option>
                    <option>US Dollar ($)</option>
                </select>
            </Left>
            <Right>
                <Input type="text" value={lab} onChange={changeLab} />
            </Right>
        </div>
    );
}
