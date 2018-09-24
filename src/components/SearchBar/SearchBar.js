import React from 'react';
import './SearchBar.css';
const sortByOptions = {
  'Best Match':'best_match',
  'Highest Rated':'rating',
  'Most Reviewed':'review_count'
}
class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      term:'',
      location:'',
      sortBy:'best_match'
    }
    this.getSortByClass=this.getSortByClass.bind(this);
    this.handleSortByChange=this.handleSortByChange.bind(this);
    this.handleTermChange=this.handleTermChange.bind(this);
    this.handleLocationChange=this.handleLocationChange.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
  }
    renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
          let sortByOptionValue = sortByOptions[sortByOption]
          return <li
          key={"sortno"+sortByOption}
          className={this.getSortByClass(sortByOptionValue)}
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
            {sortByOption}
            </li>;
          });
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleTermChange(event) {
    this.setState({term:event.target.value})
  }
  handleLocationChange(event) {
    this.setState({location:event.target.value})
  }
  handleSearch(event) {
    this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
    event.preventDefault()
  }
  handleSortByChange(sortByOption) {
    this.setState({sortBy:sortByOption});
      }

  render() {
    return (<div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
  {this.renderSortByOptions()}
    </ul>
  </div>
  <form>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
    <input placeholder="Where?" onChange={this.handleLocationChange}/>
  </div>
<div className="SearchBar-submit">
    <button className="button" onClick={this.handleSearch}>Let's Go</button>
  </div></form>
</div>);
  }
}
export default SearchBar;
