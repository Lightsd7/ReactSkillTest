import React from 'react';

import Header from '../../components/Header';
import Text from '../../components/Text';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';

import {  PageHome } from './styles';

export default function Home() {
    return (
      <>
        <PageHome>
          <Header />
          <Text />
          <Cards />
          <Footer />
        </PageHome>
      </>
    ); 
}