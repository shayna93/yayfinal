import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { Segment, Grid, Icon, Button, Accordion, Container } from 'semantic-ui-react';
import { useGetAllProductsQuery, useGetAllServicesQuery } from '../features/productsApi';

import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../features/cartSlice';

function groupBy(collection, property) {
  var i = 0, val, index, values = [], result = [];
  for (; i < collection.length; i++) {
    val = collection[i][property];
    index = values.indexOf(val);
    if (index > -1) result[index].push(collection[i]);
    else {
      values.push(val);
      result.push([collection[i]]);
    }
  }
  return result;
}

function getLevelContent(group) {
  return group.map((info) => {
    const addons = info.addons;
    return (
      <div key={info.id}>

        <Container>
          {info.category} {info.name} {info.price}
          <input type='checkbox' />
          <Button />

        </Container>
      </div>
    );
  }
  )
}



function Addons() {
  const { data = [], error, isLoading } = useGetAllServicesQuery();

  const navigate = useNavigate();
  const addons = useSelector((state) => state.services);
  console.log(`wtf`, addons)
  console.log(`wtaf`, addons.addons);
  const addon_groups = groupBy(addons.addons, 'category');

  console.log(addon_groups);


  let panels = []
  let i = 0;
  for (i = 0; i < addon_groups.length; i++) {
    panels.push({
      key: `sg-panel-${i}`, title: addon_groups[i][0].category,
      content: getLevelContent(addon_groups[i])
    })
  }



  return (
    <div className="menu-item-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred..</p>
      ) : (

        <Accordion defaultActiveIndex={0} panels={panels} styled />

      )}
    </div>
  );

};

export default Addons;