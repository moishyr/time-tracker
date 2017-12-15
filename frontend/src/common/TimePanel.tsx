import * as React from 'react';
import { Input } from '../common/Input';
import { SelectInput } from '../common/SelectInput';
import { TimePanelState } from '../types';

export default class TimePanel extends React.Component<any, TimePanelState> {
    constructor() {
        super();
        this.state = {
            optionValues: ['Start Time', 'End Time']
        }
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <form onSubmit={this.handleSubmit}>
                        <Input id="timeInput" name="timeInput" label="Select Time" type="time" />
                        <Input id="dateInput" name="dateInput" label="Select Date" type="date" />
                        <SelectInput optionValues={this.state.optionValues} />
                    </form>
                </div>
            </div>
        )
    }
}