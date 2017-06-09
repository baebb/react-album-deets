import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button, Panel, ListGroup, Image } from 'react-bootstrap';
import { Link } from 'redux-little-router';

// components
import TrackListItem from '../components/track_listitem';

// actions
import { getAlbumDetails } from '../actions/index';

class Album extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.dispatch(getAlbumDetails(this.props.albumId));
  }
  
  renderTracks(trackData) {
    return (
      <TrackListItem
        key={trackData.trackId}
        trackId={trackData.trackId}
        trackName={trackData.trackName}
        trackTime={trackData.trackTimeMillis}
      />
    )
  }
  
  render() {
    const { currentAlbum } = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
            <div>
              <Panel collapsible defaultExpanded header="Album details:">
                <Row>
                  <Col xs={3}>
                    <Image src={currentAlbum.artworkUrl60}/>
                  </Col>
                  <Col xs={9}>
                    <p><strong>{currentAlbum.collectionName}</strong></p>
                    <p>{currentAlbum.artistName}</p>
                  </Col>
                </Row>
                <ListGroup fill>
                  {this.props.currentAlbumTracks.map(this.renderTracks)}
                </ListGroup>
              </Panel>
              <br/>
              <Link href="/">
                <Button>Back</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    albumId: state.router.query.id,
    currentAlbum: state.rootReducer.albums.currentAlbum,
    currentAlbumTracks: state.rootReducer.albums.currentAlbumTracks,
  }
}

export default connect(mapStateToProps, null)(Album);