import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({term : event.target.value});
    }

    handleOnKeyDown(event) {
        if(event.keyCode === 13) {
            this.search();
        }
    }

    render() {
        return(
            <div className="SearchBar" onKeyDown={this.handleOnKeyDown}>
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;