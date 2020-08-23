import React, { useState } from "react";
import { Head } from "./styles";
import Input from "../Input/index";

export default function Table(props) {
    const [desc, setDesc] = useState("Gadget");
    const [quant, setQuant] = useState(10);
    const [cost, setCost] = useState(9.95);
    const [tax, setTax] = useState(10);

    function changeDesc(e) {
        setDesc(e.target.value);
    }

    function changeQuant(e) {
        setQuant(e.target.value);
    }

    function changeCost(e) {
        setCost(e.target.value);
    }

    function changeTax(e) {
        setTax(e.target.value);
    }

    function reload() {
        alert("Are you sure you would like to clear the invoice?");
        window.location.reload(false);
    }

    return (
        <Head>
            <table>
                <thead>
                    <tr>
                        <th className="col-xs-1"></th>
                        <th className="col-xs-5">Description</th>
                        <th className="col-xs-2">Quantity</th>
                        <th className="col-xs-2">Cost {props.value}</th>
                        <th className="col-xs-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="one">
                        <td className="col-xs-1">
                            <button type="button" className="btn btn-danger">
                                [X]
                            </button>
                        </td>
                        <td>
                            <Input
                                type="text"
                                value={desc}
                                onChange={changeDesc}
                            />
                        </td>
                        <td>
                            <div className="quantity">
                                <Input
                                    type="text"
                                    value={quant + " " + props.value}
                                    onChange={changeQuant}
                                />
                            </div>
                        </td>
                        <td>
                            <div className="quantity">
                                <Input
                                    type="text"
                                    value={cost}
                                    onChange={changeCost}
                                /><span></span>
                            </div>
                        </td>
                        <td>
                            <div className="quantity">
                                <p>{(quant * cost).toFixed(2)}</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick
                        >
                            [+]
                        </button>
                    </tr>
                    <tr className="one">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="menu">Sub Total</td>
                        <td className="menu">{(quant * cost).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="menu">
                            Tax(%):
                            <span className="tax">
                                <Input
                                    type="text"
                                    value={tax}
                                    onChange={changeTax}
                                />
                            </span>
                        </td>
                        <td className="menu">
                            {(quant * cost * (tax / 100)).toFixed(2)}
                        </td>
                    </tr>
                    <tr className="one">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="menu">Grand Total</td>
                        <td className="menu">
                            {(quant * cost + (quant * cost * (tax / 100))).toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="button" className="btn btn-primary" onClick={reload}>
                Reset
            </button>
            <button type="button" className="btn btn-primary" onClick>
                Turn On Print Mode
            </button>
        </Head>
    );
}
