import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
class BusinessList extends React.Component {
  render() {
    return (<div className="BusinessList">

{this.props.businessesProp.map(business=> {
  return <Business propName={business}/>})
}
</div>)
  }
}
export default BusinessList;
