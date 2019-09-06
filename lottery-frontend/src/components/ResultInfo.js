import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const ResultInfo = props => {

  var setShow = (val) => {
      props.show = val;
  }

  return (
    <>
      <Alert show={props.show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me ya'll!
          </Button>
        </div>
      </Alert>

      {!props.show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
};

export default ResultInfo;
