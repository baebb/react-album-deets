import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button, ListGroup, Alert } from 'react-bootstrap';

// components
import SearchInput from '../components/search_input';
import AlbumListItem from '../components/album_listitem';

// actions
import { searchForAlbum } from '../actions/index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchError: null,
    }
  }
  
  handleChange(e) {
    this.setState({ searchText: e.target.value, searchError: null });
  }
  
  searchValidator(e) {
    e.preventDefault();
    const { searchText } = this.state;
    if (searchText === '') {
      this.setState({ searchError: 'NO_INPUT' });
    } else {
      this.props.dispatch(searchForAlbum(searchText));
    }
  }
  
  renderResults(albumData) {
    return (
      <AlbumListItem
        key={albumData.collectionId}
        albumName={albumData.collectionName}
        artistName={albumData.artistName}
        releaseDate={(albumData.releaseDate).substr(0, 4)}
        albumImg={albumData.artworkUrl60}
        albumID={albumData.collectionId}
      />
    )
  }
  
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
            <div>
              <br/>
              <div className="text-center">
                <form onSubmit={(e) => this.searchValidator(e)}>
                  <SearchInput
                    handleChange={(e) => this.handleChange(e)}
                    searchText={this.state.searchText}
                    searchError={this.state.searchError}
                  />
                  <Button type="submit">
                    {this.props.searchAttempted ? 'Search again' : 'Search'}
                  </Button>
                </form>
              </div>
              <br/>
              {this.props.searchAttempted === true ?
                <div>
                  <h4 className="text-center">Search results:</h4>
                  {this.props.searchResults.length === 0 ?
                    <Alert bsStyle="danger">
                      <p className="text-center">No results found</p>
                    </Alert>
                    :
                    <ListGroup>
                      {this.props.searchResults.map(this.renderResults)}
                    </ListGroup>
                  }
                </div>
                : null}
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchAttempted: state.rootReducer.albums.searchAttempted,
    searchResults: state.rootReducer.albums.searchResults
  }
}

export default connect(mapStateToProps, null)(Home);