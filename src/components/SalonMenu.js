import React from 'react'
import { SERVICES } from '../model/services'
import { List, Image, Container, Accordion, Header, Statistic, Grid, Segment, Icon } from 'semantic-ui-react'
import SalonMenuItem from './SalonMenuItem'
import '../App.css';
import { useGetAllProductsQuery } from '../features/productsApi';
import { useSelector } from 'react-redux';



function SalonMenu() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const entries = [

    { id: 1, title: 'Manicure' },
    { id: 2, title: 'Pedicure' },
    { id: 3, title: 'Hair' },
  ]

  const level1Panels = [
    { key: 'panel-1a', title: 'Level 1A', content: 'Level 1A Contents' },
    { key: 'panel-ba', title: 'Level 1B', content: 'Level 1B Contents' },
  ]

  const Level1Content = (
    <div>
      Welcome to level 1
      <Accordion.Accordion panels={level1Panels} />
    </div>
  )

  const level2Panels = [
    { key: 'panel-2a', title: 'Level 2A', content: 'Level 2A Contents' },
    { key: 'panel-2b', title: 'Level 2B', content: 'Level 2B Contents' },
  ]

  const Level2Content = (
    <div>
      Welcome to level 2
      <Accordion.Accordion panels={level2Panels} />
    </div>
  )


  const rootPanels = [
    { key: 'panel-1', title: 'Manicure', content: { content: Level1Content } },
    { key: 'panel-2', title: 'Pedicure', content: { content: Level2Content } },
  ]

  //const service_groups = groupBy(SERVICES, 'service_category');


  return ( 
    <Container>
      <Header as='h1'>Menu</Header>
        <SalonMenuItem/>
    </Container>
  );
}

export default SalonMenu