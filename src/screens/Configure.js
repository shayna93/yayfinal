import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Accordion, Card, Button } from 'react-bootstrap';
import {addToCart} from '../features/cartSlice';
function groupBy(collection, property) {
  const result = {};
  collection.forEach((item) => {
    const key = item[property];
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  });
  return result;
}


const Configure = () => {
  const dispatch = useDispatch();

  const [selectedAddons, setSelectedAddons] = useState([]);

  const item = useSelector((state) => state.accordion.item);
  const data = item && item.addons ? item.addons : [];

  const groupedData = groupBy(data, 'category');
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const handleAddonSelection = (addon) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter((item) => item.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const handleSubmit = () => {
    const cartItem = {
      ...item,
      addons: selectedAddons,
      service: item.name, 
    };
    dispatch(addToCart(cartItem));
  };
  

  return (
    <div>
      <Accordion activeKey={activeKey}>
        {Object.entries(groupedData).map(([category, items], index) => (
          <Card key={index}>
            <Card.Header>
              <Button
                variant="link"
                onClick={() => handleToggle(index.toString())}
                aria-controls={`accordion-${index}`}
                aria-expanded={activeKey === index.toString()}
              >
                {category}
              </Button>
            </Card.Header>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>
                {items.map((item) => (
                  <div key={item.id}>
                    <input
                      type="checkbox"
                      onChange={() => handleAddonSelection(item)}
                      checked={selectedAddons.some((addon) => addon.id === item.id)}
                    />
                    {item.name} - ${item.price}
                  </div>
                ))}
              </Card.Body>
            </Accordion.Collapse>

          </Card>
        ))}
                    <Button onClick={handleSubmit}>Add to Cart</Button>

      </Accordion>
      <h1>Configure Item</h1>
      {/* Your configuration logic here */}
    </div>
  );
};

export default Configure;
