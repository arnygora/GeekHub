import React, {Component} from 'react';
import './Select.css';

class Select extends Component {

        filterSalesChart = () => {

            let lastWeek = [['Massive', 6], ['Attack', 3], ['Window', 9], ['Media', 9], ['Center', 9]];
            let chart = this.salesPie.getChart();

            chart.series[0].setData(lastWeek, true);

        };
        handleChange = (event) => {
            this.filterSalesChart(event);
        };
    render() {
        return (
            <select name="sel" id="sales" onChange={this.handleChange}>
                {
                    this.props.data.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                    })
                }
            </select>
        );
    }
}
export default Select;