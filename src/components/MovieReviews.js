// Code MovieReviews Here
import React from 'react';


	const Review = ({title, rating, headline}) => {
		return (
			<div className="review">
				<h2>{headline}</h2>
				<h4>{title}</h4>
				<h3>{rating}</h3>
			</div>
		)
	}

	const MovieReviews = (props) => {
		return (
			<div className="review-list">
				{props.reviews.map(review => <Review className="review" title={review.display_title} rating={review.mpaa_rating} headline={review.headline}/> )}
			</div>
		)
	}

	MovieReviews.defaultProps = {reviews: []};


export default MovieReviews;