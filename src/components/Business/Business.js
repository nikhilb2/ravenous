import React from 'react';
import './Business.css'

class Business extends React.Component {
  render() {
    return (<div className="Business">
  <div className="image-container">
    <img src={this.props.propName.imageSrc} alt=''/>
  </div>
  <h2>{this.props.propName.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{this.props.propName.address}</p>
      <p>{this.props.propName.city}</p>
      <p>{this.props.propName.state} {this.props.propName.zipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{this.props.propName.category}</h3>
      <h3 className="rating">{this.props.propName.rating} stars</h3>
      <p>{this.props.propName.reviewCount} reviews</p>
    </div>
  </div>
</div>)
  }
}
export default Business;
