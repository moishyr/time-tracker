import * as React from 'react';
import axios from 'axios';
import { TimeStamps } from '../types'

class DisplayPanel extends React.Component<any, TimeStamps> {
	constructor() {
		super();
		this.state = {
			timeStamps: [{ id: 0, time: '', date: '', start_or_end: '' }]
		};
	}

	async componentDidMount() {
		let timestamp = await axios.get('/api/users/timestamps');
		this.setState({ timeStamps: timestamp.data.timeStamps });
	}

	getTableColNames() {
		let firstObj = this.state.timeStamps[0];
		if (firstObj) {
			return Object.keys(firstObj).map((e, i) => <th key={i}>{e}</th>);
		}
		return null;
	}

	isInitialState() {
		let tableObj = this.state.timeStamps[0];
		return tableObj.id === 0 && tableObj.time === '' && tableObj.date === '' && tableObj.start_or_end === '';
	}

	getTableInfo() {
		if (!this.isInitialState()) {
			let tableObj = this.state.timeStamps;
			return tableObj.map((rowObj: any) => {
				return (
					<tr key={rowObj.id}>
						{Object.keys(rowObj).map((rowItem, i) => <td key={rowObj.id + rowObj[rowItem]}>{rowObj[rowItem]}</td>)}
					</tr>
				);
			});
		}
		return null;
	}

	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="table-responsive">
						<table className="table table-bordered table-striped table-hover table-condensed">
							<caption>Time Sheet Table</caption>
							<thead>
								<tr>
									{this.getTableColNames()}
								</tr>
							</thead>
							<tbody>
								{this.getTableInfo()}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default DisplayPanel;