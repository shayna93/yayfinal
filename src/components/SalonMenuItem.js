import React, { Fragment, ReactFragment } from 'react'
import {Segment, Grid, Icon, Button} from 'semantic-ui-react';
import { useGetAllProductsQuery } from '../features/productsApi';
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { addToCart } from '../features/cartSlice';

function SalonMenuItem({name, value}) {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="menu-item-container">
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
              <Button onClick = {() => handleAddToCart(product)}>
                Add to Cart
                </Button>
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