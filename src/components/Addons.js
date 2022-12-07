import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import {Segment, Grid, Icon} from 'semantic-ui-react'; 
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../features/cartSlice';





function Addons() {
    const navigate = useNavigate();
    const addons = useSelector((state) => state.services);
    console.log(`wtf`,addons)





  return (
    <Fragment>
    <Segment>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
          </Grid.Column>
          <Grid.Column width={3} textAlign="right">
            value
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" 
            bordered  />
            <Icon name="trash" bordered onClick={() => navigate("/salonmenu")}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Fragment>
   
  );
};

export default Addons;