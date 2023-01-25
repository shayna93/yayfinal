import React, { Fragment, ReactFragment } from 'react'
import { Segment, Grid, Icon, Button, Accordion, Container } from 'semantic-ui-react';
import { useGetAllProductsQuery, useGetAllServicesQuery } from '../features/productsApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../features/cartSlice';
import { configureAddons } from '../features/servicesSlice';



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

function SalonMenuItem({ name, value }) {


  const { data = [], error, isLoading } = useGetAllServicesQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(`data`,data);
  const service_groups = groupBy(data, 'service_category');
  console.log(service_groups);
  const addons = []

  function getLevelContent(group) {
    return group.map((info) => {
      const addons = info.addons;
      return (
        <div key={info.id}>

        <Container onClick={() => { handleConfigureAddons(info); handleAddToCart(info);}}>
          {info.service} {info.time} {info.price}
          <input type='checkbox'/>
          <Button onClick={() => handleAddToCart(info)} />
        
        </Container>
        </div>
      );
    }
    )
  }

  let panels = []
  let i = 0;
  for (i = 0; i < service_groups.length; i++) {
    panels.push({
      key: `sg-panel-${i}`, title: service_groups[i][0].service_category,
      content: getLevelContent(service_groups[i])
    })
  }
  const handleAddToCart = (service) => {
    console.log(`hi`,service);
    dispatch(addToCart(service));
    navigate("/addons");
  
  };

  const handleConfigureAddons = (addons) => {
    console.log(`addon234`, addons);
    dispatch(configureAddons(addons));
    navigate("/addons");
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
export default SalonMenuItem