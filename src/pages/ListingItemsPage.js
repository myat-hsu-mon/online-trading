import React, { useState, useEffect } from 'react';
import { Container, Row, Col, NavDropdown, Nav, Form, InputGroup, FormControl } from 'react-bootstrap';
import HomeLayout from '../components/HomeLayout';
import ProductCard from '../components/ProductCard';

function ListingItemsPage() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('')

  const fetchItems = async () => {
    await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setItems(json);
        setIsLoading(false);
      })
  }

  const handleSearch = (e)=>{
    //search item using e.target.value
  }

  const handleSort = (eventKey) => {
    alert(eventKey)
  }

  useEffect(() => {
    fetchItems();
  }, [])

  return (
    <HomeLayout isLoading={isLoading}>
      <div style={{ backgroundColor: 'white' }}>
        <Container>
          <div style={{ marginBottom: '10px' }}>
            <Row>
              <Col>
                <Nav activeKey='id' onSelect={(handleSort)}>
                  <NavDropdown title="Sort By" id="nav-dropdown">
                    <NavDropdown.Item eventKey="id">ID</NavDropdown.Item>
                    <NavDropdown.Item eventKey="title"> Name</NavDropdown.Item>
                    <NavDropdown.Item eventKey="category"> Category</NavDropdown.Item>
                    <NavDropdown.Item eventKey="price">Price</NavDropdown.Item>
                    <NavDropdown.Item eventKey="price">Date Added</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Col>
              <Col sm={4}>
                <InputGroup>
                  <InputGroup.Text>Search</InputGroup.Text>
                  <FormControl
                    type="text"
                    value={searchText}
                    onChange={(e) => handleSearch(e.target.value)}
                    aria-label="men'fashin"
                    className='form-control-sm' />
                </InputGroup>
              </Col>
            </Row>


          </div>
          <Row>
            {
              items.map((item) => (
                <Col sm={3} key={item.id}>
                  <ProductCard product={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    </HomeLayout>
  )
}
export default ListingItemsPage;