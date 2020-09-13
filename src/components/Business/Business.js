import React from 'react';
import './Business.css';

const map = 'https://www.google.com/maps/search/?api=1&query=';

class Business extends React.Component {
	render() {
		return (
			<div className='Business'>
				<div className='image-container'>
					<a href={this.props.business.url} target='_blank'>
						<img src={this.props.business.imageSrc} alt=''></img>
					</a>
				</div>
				<a href={this.props.business.url} target='_blank'>
					<h2>{this.props.business.name}</h2>
				</a>
				<div className='Business-information'>
					<div className='Business-address'>
						{/* <a
							href={
								map + this.props.business.lat + ',' + this.props.business.long
							}
						> */}
						<p>{this.props.business.address}</p>
						<p>{this.props.business.city}</p>
						<p>{this.props.business.zipCode}</p>
						{/* </a> */}
					</div>
					<div className='Business-reviews'>
						<h3>{this.props.business.category}</h3>
						<h3 className='rating'>rating {this.props.business.rating}</h3>
						<p>{this.props.business.reviewCount} reviews</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Business;
