import * as React from 'react';
import { InputProps, InputState } from '../types';

class Input extends React.Component<InputProps, InputState> {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }

    changeHandler = (e: any) => {
        let inputValue = e.target.value;
        let value = this.state.value;
        value = inputValue;
        this.setState({ value });
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    id={this.props.id}
                    type={this.props.type}
                    value={this.state.value}
                    onChange={this.changeHandler}
                />
            </div>
        )
    }
}

export { Input };