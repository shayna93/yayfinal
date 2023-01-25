import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment, useState } from 'react';
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





function Addons() {
  const { data = [], error, isLoading } = useGetAllServicesQuery();
  const [selection, setSelection] = useState([]);
  const dispatch = useDispatch();




  const navigate = useNavigate();
  const addons = useSelector((state) => state.services);
  console.log(`wtf`, addons)
  console.log(`wtaf`, addons.addons);
  const addon_groups = groupBy(addons.addons, 'category');

  console.log(addon_groups);

  const addOrRemove = (name) => {
    const newSelection = [...addons];
    const index = newSelection.indexOf(name);
    if (index === -1) {
      newSelection.push(name);
    } else {
      newSelection.splice(index, 1);
    }
    setSelection(newSelection);
    console.log(addons)
  }

  function getLevelContent(group) {
    return group.map((info) => {
      const addons = info.addons;
      return (
        <div key={info.id}>
  
          <Container>
            {info.category} {info.name} {info.price}
            <input type='checkbox' />
            <Button onClick={() => handleAddToCart(info)} />
  
          </Container>
        </div>
      );
    }
    )
  }


  let panels = []
  let i = 0;
  for (i = 0; i < addon_groups.length; i++) {
    panels.push({
      key: `sg-panel-${i}`, title: addon_groups[i][0].category,
      content: getLevelContent(addon_groups[i])
    })
  }

  const handleAddToCart = (service) => {
    console.log(`hi`,service);
    dispatch(addToCart(service));
    navigate("/cart");
  
  };
  



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