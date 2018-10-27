import React from 'react';
import './Header.css';

class Header extends React.Component {
    createNavbarContent() {
        let content = [];
        for (let alignment in this.props.content) {
            if (this.props.content.hasOwnProperty(alignment)) {
                let section = [];
                for (let i in this.props.content[alignment]) {
                    if (this.props.content[alignment].hasOwnProperty(i)) {
                        section.push(
                            <a
                                key={this.props.content[alignment][i].displayName}
                                className="navbar-button"
                                href={this.props.content[alignment][i].url}
                            >
                                {this.props.content[alignment][i].displayName}
                            </a>);
                    }
                }
                content.push(
                    <div
                        key={alignment}
                        className={"navbar-" + alignment + " flex-item"}
                    >
                        {section}
                    </div>);
            }
        }
        return content;
    }

    render() {
        return (
            <div className="navbar flex-container">
                {this.createNavbarContent()}
            </div>
        );
    }
}

export default Header;
