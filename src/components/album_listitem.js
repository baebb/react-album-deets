import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'redux-little-router';

const AlbumListitem = (props) => {
  return (
    <Link href={`/album?id=${props.albumID}`} className="list-group-item">
      <Row>
        <Col xs={3}>
          <Image src={props.albumImg} responsive />
        </Col>
        <Col xs={9}>
          <h4 className="list-group-item-heading">{props.albumName}</h4>
          <p className="list-group-item-text">{props.artistName}</p>
          <p className="list-group-item-text"><small>{props.releaseDate}</small></p>
        </Col>
      </Row>
    </Link>
  )
};

export default AlbumListitem;