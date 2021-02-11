import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {

    render() {

        return (
            <select
                className="creatureSelect"
                value={this.props.currentValue}
                onChange={this.props.handelChange}
            >
                <option value=''>all</option>
                {
                    this.props.options.map(
                        optionItem => <option
                            value={optionItem}>{optionItem}</option>)
                }

            </select>
        );
    }
}

export default Dropdown;
