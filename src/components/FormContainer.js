import React from 'react';
import { Col, Row } from 'react-bootstrap';

function FormContainer({ children, colSize }) {
  return (
    <Row className='justify-content-center'>
      <Col sm={colSize}>{children}</Col>
    </Row>
  )
}
export default FormContainer;