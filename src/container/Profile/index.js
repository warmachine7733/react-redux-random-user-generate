import React, { Component } from "react";
import { connect } from "react-redux";
import * as ProfileActions from "./action";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomImage from "../../components/CustomImage";
import CustomMap from "../../components/CustomMap";

class Profile extends Component {
  render() {
    const { randomProfile } = this.props;
    return randomProfile ? (
      <Container>
        <Row>
          <Col
            style={{
              paddingTop: "20px",
             
            }}
            sm={4}
          >
            <CustomImage {...this.props} />
          </Col>
          <Col style={{ paddingTop: "20px", paddingBottom: "20px" }} sm={8}>
            <CustomMap {...this.props} />
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center", paddingTop: "50px" }}>
            <Button onClick={this.props.getRandomProfile}>Generate</Button>
          </Col>
        </Row>
      </Container>
    ) : (
      ".."
    );
  }
  componentDidMount() {
    this.props.getRandomProfile();
  }
}

const mapStateToProps = state => {
  return { randomProfile: state.Profile.randomProfile };
};
const mapDispatchToProps = {
  ...ProfileActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
