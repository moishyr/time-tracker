import * as React from 'react';
import { SelectInputProps, SelectInputState } from '../types';

class SelectInput extends React.Component<SelectInputProps, SelectInputState> {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    changeHandler = (e: any) => {
        let selectValue = e.target.value;
        let value = this.state.value;
        value = selectValue;
        this.setState({ value });
    }

    render() {
        return (
            <select value={this.state.value} onChange={this.changeHandler}>
                {this.props.optionValues.map((value, index) => <option key={index}>{value}</option>)}
            </select>
        )
    }
}
export { SelectInput }