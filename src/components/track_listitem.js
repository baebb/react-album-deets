import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TrackListItem = (props) => {
  const date = new Date(props.trackTime);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  // const time = parseInt(props.trackTime / 1000 / 60) + ':' + (props.trackTime / 1000 % 60).toFixed();
  
  return (
    <div className="list-group-item">
      <Row>
        <Col xs={9}>
          {props.trackName}
        </Col>
        <Col xs={3}>
          <div className="text-right">{minutes}:{seconds}</div>
        </Col>
      </Row>
    </div>
  )
};

export default TrackListItem;