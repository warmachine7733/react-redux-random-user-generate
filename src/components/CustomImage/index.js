import React from "react";
import { Card, Button } from "react-bootstrap";

const CustomImage = props => {
  const { randomProfile } = props;
  const { picture, name, dob, location, email } = randomProfile;

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture.large} />
        <Card.Body>
          <Card.Title>personal details</Card.Title>
          <Card.Text>{name.first + " " + name.last}</Card.Text>
          <Card.Text>{dob.age + " " + "yrs"}</Card.Text>
          <Card.Text>{location.country}</Card.Text>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default CustomImage;
