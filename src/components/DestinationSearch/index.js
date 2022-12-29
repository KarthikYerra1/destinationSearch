import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              className="search-input"
              placeholder="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-button"
            />
          </div>
          <ul className="destination-list">
            {searchResults.map(eachResult => (
              <DestinationItem
                key={eachResult.id}
                destinationDetails={eachResult}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
