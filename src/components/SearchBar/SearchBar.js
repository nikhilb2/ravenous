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
    this.handleKeypress=this.handleKeypress.bind(this)
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
    this.setState({term:event.target.value});
  }
  handleLocationChange(event) {
    this.setState({location:event.target.value})
  }
  handleKeypress(event) {
    if (event.key==='Enter') {
      this.handleSearch()
    }
  }
  handleSearch() {
    if (this.state.term && this.state.location)
    {this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
    console.log("Search")}
  }
  handleSortByChange(sortByOption) {
    this.setState({sortBy:sortByOption});
    setTimeout(this.handleSearch, 0);
    this.handleSearch()
          }

  render() {
    return (<div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
  {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" onChange={this.handleTermChange} onKeyPress={this.handleKeypress}/>
    <input placeholder="Where?" onChange={this.handleLocationChange} onKeyPress={this.handleKeypress}/>
  </div>
<div className="SearchBar-submit">
    <button className="button" onClick={this.handleSearch}>Let's Go</button>
  </div>
</div>);
  }
}
export default SearchBar;
