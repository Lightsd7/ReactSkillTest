import React from "react";

import Header from "../../components/Header";
import Branding from "../../components/Branding";
// import Text from '../../components/Text';
// import Cards from '../../components/Cards';
// import Footer from '../../components/Footer';

import { PageHome } from "./styles";

export default function Home() {
    return (
        <>
            <PageHome>
                <Header />
                <Branding />
                {/* <Text />
          <Cards />
          <Footer /> */}
            </PageHome>
        </>
    );
}
