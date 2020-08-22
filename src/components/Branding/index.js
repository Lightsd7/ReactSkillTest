import React, { useState } from "react";
import { Container, Invoice, Logo } from "./styles";

import image from "../../assets/metaware_logo.png";

export default function Branding(props) {
    const [number, setNumber] = useState(10);
    const [img, setImg] = useState(true);
    const hide = () => setImg(false);
    const show = () => setImg(true);

    function change(e) {
        setNumber(e.target.value);    
    }

    return (
        <Container>
            <Invoice>
                <label>Invoice #</label>
                <input type="text" value={number} onChange={change}></input>
            </Invoice>
            <Logo>
                <img src={img ? image : null} className="logo-img" />
                <div>
                    <a onClick>Edit Logo</a>
                    <a onClick={hide} className={img ? '' : 'hidden'}>Hide logo</a>
                    <a onClick={show} className={img ? 'hidden' : ''}>Show logo</a>
                </div>
            </Logo>
        </Container>
    );
}
