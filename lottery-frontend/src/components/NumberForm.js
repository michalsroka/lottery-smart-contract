import React from "react";
import { Form } from "react-bootstrap";
import "../css/number-form.css";

const NumberForm = props => {
  return (
    <Form>
      <div className="numberForm" key={`inline-${props.type} className="mb-3`}>
        <Form.Control
          inline
          type="number"
          min={1}
          max={49}
          name={props.name}
          value={props.value}
          
        />

        <Form.Control
          inline
          type="number"
          name={props.name}
          value={props.value}
          onChange={e => props.handler(e, props.name)}
        />
        <Form.Control
          inline
          type="number"
          name={props.name}
          value={props.value}
          onChange={e => props.handler(e, props.name)}
        />
        <Form.Control
          inline
          type="number"
          name={props.name}
          value={props.value}
          onChange={e => props.handler(e, props.name)}
        />
        <Form.Control
          inline
          type="number"
          name={props.name}
          value={props.value}
          onChange={e => props.handler(e, props.name)}
        />
      </div>
    </Form>
  );
};

export default NumberForm;
