import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories, createSearch } from '../actions/storiesActions';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ""
        };
    }

    componentWillMount() {
        this.props.fetchStories();
    }

    handleChange(event) {
        this.setState({
            searchQuery: event.target.value
        })
        this.props.createSearch(event.target.value)
        this.props.fetchStories(this.refs.query.value) 
    }

    render() {
        var searchResults = this.props.stories.map(results => {
            return <a href={results.url} key={results.title}><p>{results.title}</p></a>
        });
        return (
            <div>
                <input type="text" ref="query" placeholder="Search for a story" value={this.state.searchQuery} onChange={this.handleChange.bind(this)} />
                <ul>{searchResults}</ul>
            </div>
        );
        
    }
}

const mapSateToProps = state => ({
    stories: state.stories.items,
    searchQuery: state.stories.item
})

export default connect(mapSateToProps, { fetchStories, createSearch })(Search);
