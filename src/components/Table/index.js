import React, { useState } from "react";
import { Head } from "./styles";
import Input from "../Input/index";

export default function Table() {
    const [desc, setDesc] = useState("Gadget");
    const [quant, setQuant] = useState(10);
    const [cost, setCost] = useState(9.95);

    function changeDesc(e) {
        setDesc(e.target.value);
    }

    function changeQuant(e) {
        setQuant(e.target.value);
    }

    function changeCost(e) {
        setCost(e.target.value);
    }

    return (
        <Head>
            <table>
                <thead>
                    <tr>
                        <th className="col-xs-1"></th>
                        <th className="col-xs-5">Description</th>
                        <th className="col-xs-2">Quantity</th>
                        <th className="col-xs-2">Cost</th>
                        <th className="col-xs-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="one">
                        <td className="col-xs-1"></td>
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
                                    value={quant}
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
                                />
                            </div>
                        </td>
                        <td>
                            <div className="quantity">
                                <p>{quant * cost}</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Head>
    );
}
