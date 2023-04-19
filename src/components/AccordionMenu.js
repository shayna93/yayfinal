import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';
import { setItem, setOpenIndex } from '../features/accordionSlice';
import { useGetAllServicesQuery } from '../features/productsApi';
import '../App.css';

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

const AccordionMenu = () => {
  const { data = [], error, isLoading } = useGetAllServicesQuery();
  console.log(data);

  const service_groups = groupBy(data, 'service_category');
  console.log(service_groups);

  let panels = []
  let i = 0;
  for (i = 0; i < service_groups.length; i++) {
    panels.push({
      key: {i}, title: service_groups[i][0].service_category,
      content: service_groups[i]
    })
  }

  const openIndex = useSelector((state) => state.accordion.openIndex);
  const items = useSelector((state) => state.accordion.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showPanels = false;
  
  const handleItemClick = (index) => {
    let showPanels = true;

    dispatch(setOpenIndex(openIndex === index ? null : index));
  };

  const handleConfigureClick = (item) => {
    console.log(item);
    dispatch(setItem(item));
    navigate(`/configure/${item.id}`);
  };

  const [visibleStates, setVisibleStates] = useState({});

  const handleToggleVisibility = (id) => {
    setVisibleStates((prevVisibleStates) => ({
      ...prevVisibleStates,
      [id]: !prevVisibleStates[id],
    }));
  };

  return (
    <div>
      {panels.map((category, id) => (
        <div key={category.key}>
          <Button onClick={() => handleToggleVisibility(id)}>
            {category.title}
          </Button>
          {visibleStates[id] && (
            <div>
              {category.content.map((info) => (
                <div key={info.id}>
                  <Container>
                    {info.service} {info.time} {info.price}
                    <input type='checkbox' />
                    <Button
                      onClick={() => handleConfigureClick(info)}
                      content="Configure"
                    />
                  </Container>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionMenu;
