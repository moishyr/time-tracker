import * as React from 'react';
import TimePanel from '../common/TimePanel';
import DisplayPanel from '../common/DisplayPanel';

class Home extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <TimePanel />
                <DisplayPanel />
            </div>
        );
    }
}

export default Home;