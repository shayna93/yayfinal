import React, { Fragment, ReactFragment } from 'react'
import {Segment, Grid, Icon, Button} from 'semantic-ui-react';
import { useGetAllProductsQuery } from '../features/productsApi';


function SalonMenuItem({name, value}) {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred..</p>
      ) : (
    <Fragment>
      <Segment>
        <Grid  columns={3} textAlign="right">
        {data?.map(product => 
          <Grid.Row key={product.id}> 
            <Grid.Column width={10} textAlign="left">
              {product.name} 
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {product.price}
            </Grid.Column>
            <Grid.Column width={3}>
              <Button>Add to Cart</Button>
            <Icon name = 'cart' bordered/>
            </Grid.Column>
          </Grid.Row>
          )}
        </Grid>
        
      </Segment>
    </Fragment>
  )}
</div>
  );
      };
export default SalonMenuItem