import React, { Fragment, ReactFragment } from 'react'
import { Segment, Grid, Icon, Button, Accordion } from 'semantic-ui-react';
import { useGetAllProductsQuery, useGetAllServicesQuery } from '../features/productsApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../features/cartSlice';



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
  console.log(data);
  const service_groups = groupBy(data, 'service_category');
  console.log(service_groups);



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

  function getLevelContent(group) {
    return group.map((info) => {
      return (
        <div key={info.id}>
          {info.service}
        </div>
      );
    }
    )
  }


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
    { key: 'panel-1', title: 'Level 1', content: { content: Level1Content } },
    { key: 'panel-2', title: 'Level 2', content: { content: Level2Content } },
  ]

  let panels = []
  let i = 0;
  for (i = 0; i < service_groups.length; i++) {
    panels.push({
      key: `sg-panel-${i}`, title: service_groups[i][0].service_category,
      content: getLevelContent(service_groups[i])
    })
  }
  const handleAddToCart = (service) => {
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
        <Fragment>
          <Segment>
            <Grid columns={3} textAlign="right">
              {service_groups.map((u, i) => {
                return (
                  <Grid.Row key={i}>
                    <Grid.Column width={10} textAlign="left">
                      {u[0].service_category}
                    </Grid.Column>
                    <Grid.Column width={3} textAlign="right">
                      10
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Button onClick={() => handleAddToCart(u)}>
                        Add to Cart
                      </Button>
                      <Icon name='cart' bordered />
                    </Grid.Column>
                  </Grid.Row>

                );
              }

              )}
            </Grid>
            <Accordion defaultActiveIndex={0} panels={panels} styled />


          </Segment>
        </Fragment>
      )}
    </div>
  );
};
export default SalonMenuItem