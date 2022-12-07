import React from 'react'
import { SERVICES } from '../model/services'
import { List, Image, Container, Accordion, Header, Statistic, Grid, Segment, Icon } from 'semantic-ui-react'
import SalonMenuItem from './SalonMenuItem'
import '../App.css';
import { useGetAllProductsQuery } from '../features/productsApi';
import { useSelector } from 'react-redux';



function SalonMenu() {


  return ( 
    <Container>
      <Header as='h1'>Menu</Header>
        <SalonMenuItem/>
    </Container>
  );
}

export default SalonMenu