import React from "react";

import Header from "../../components/Header";
import Branding from "../../components/Branding";
import Infos from "../../components/Infos";
import Table from "../../components/Table";

import { PageHome } from "./styles";

export default function Home() {
    return (
        <>
            <PageHome>
                <Header />
                <Branding />
                <Infos />
                <Table />
            </PageHome>
        </>
    );
}
