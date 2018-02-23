import React, {Component} from 'react';
import './Select.css';

class Select extends Component {

        filterSalesChart = (e) => {

            let lastWeek = [['Massive', 6], ['Attack', 3], ['Window', 9], ['Media', 9], ['Center', 9]];
            let salesChart = this.SalesPie.getChart();
                // reportChart = this.SplineReport.getChart();

            salesChart.series[0].setData(lastWeek, true);
            // reportChart.series[0].addPoint({x: 50, y: 25});
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