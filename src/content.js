import React, { Component } from 'react';

const Count = (props) => {
    return <div>{props.count}</div> 
}

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: 'text',
        };
        this.onButton = this.onButton.bind(this);
    }

    onButton(index, evt) {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return <div>
            Content <Count count={this.state.count} />
            <div>
                <button onClick={this.onButton.bind(this)}>Add to count</button>
            </div>
        </div>;
    }
}

export default Content;