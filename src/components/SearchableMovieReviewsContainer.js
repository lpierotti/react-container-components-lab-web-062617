// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends React.Component {
	
	constructor() {
		super()
		this.state = {
			reviews: [],
			searchTerm: ''
		}
	}

	handleClick = (event) => {
		event.preventDefault()
		fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=21d597b627694961964c6c808907cdc8`)
			.then(resp => resp.json()).then(json => this.setState({reviews: json.results}))
	}

	handleChange = (event) => {
		this.setState({ searchTerm: event.target.value})
	}


	render() {
		return (
			<div className="searchable-movie-reviews">
				<form>
					<input onChange={this.handleChange} value={this.state.searchTerm} type="text" />
					<input onClick={this.handleClick} type="submit" />
				</form>
				<MovieReviews reviews={this.state.reviews}/>  
			</div>
		)
	}
}



export default SearchableMovieReviewsContainer;