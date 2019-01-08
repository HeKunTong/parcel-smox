import React from 'react'
import { map } from 'smox'

@map({
    state: ['count'],
    actions: ['up','down'],
    effects:['upAsync']
})

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>现在是{this.props.count}</h1>
                <button onClick={this.props.up}>加一</button>
                <button onClick={this.props.down}>减一</button>
                <button onClick={this.props.upAsync}>异步加一</button>
            </div>
        )
    }
}

export default App;