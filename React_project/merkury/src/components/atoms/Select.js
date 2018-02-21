import React, {Component} from 'react';
import './Select.css';

class Select extends Component {
    onChange = (e) => {
        console.log(e.target.value);
    };
    render() {

        return (
            <select name="sel" id="sales" onChange={this.onChange}>
                {this.props.data.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                    })
                }
            </select>
        );
    }
}
export default Select;