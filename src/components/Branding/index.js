import React, { useState } from "react";
import { Container, Invoice, Logo } from "./styles";

import image from "../../assets/metaware_logo.png";

export default function Branding(props) {
    const [number, setNumber] = useState(10);

    return (
        <Container>
            <Invoice>
                <label>Invoice #</label>
                <input type="text" value={number}></input>
            </Invoice>
            <Logo>
                <img src={image} />
                <div>
                    <a>Edit Logo</a>
                    <a>Hide logo</a>
                </div>
            </Logo>
        </Container>
    );
}
