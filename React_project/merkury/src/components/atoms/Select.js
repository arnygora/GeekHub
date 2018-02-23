import React, {Component} from 'react';
import './Select.css';

class Select extends Component {
        filterSalesChart = (e) => {
            console.log(this);
            let lastWeek = [['Massive', 6], ['Attack', 3], ['Window', 9], ['Media', 9], ['Center', 9]];

            let salesChart = this.pieSales.getChart(),
            reportChart = this.splineReport.getChart();

            salesChart.series[0].setData(lastWeek, true);
            reportChart.series[0].addPoint({x: 10, y: 12});
        };
        onChange = (event) => {
            this.filterSalesChart(event);
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