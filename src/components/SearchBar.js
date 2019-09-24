import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    state = { term: 'cars'};

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();
        //@TODO make sure we call back from parent
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label className="">
                            Video Search
                        </label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;
