import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h2>{this.props.text}</h2>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Join on the Movie
                </a>
            </header>
        );
    }
}

export default Header;