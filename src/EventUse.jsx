import React, { PureComponent } from 'react'
import { eventBus } from './event'
export default class Event extends PureComponent {
    render() {
        return (
            <div>
                <EventHeader />
                <EventContent />
            </div>
        )
    }
}
function EventHeader() {
    function sendEvent() {
        eventBus.emit('eventSend', 'hello react', 123)
    }
    return (
        <div>
            我是eventHeader
            <button onClick={() => sendEvent()}>点击使用event传送值</button>
        </div>
    )
}

class EventContent extends PureComponent {
    state = { msg: '' }
    componentDidMount() {
        eventBus.addListener('eventSend', this.handleEvent)
    }
    componentWillUnmount() {
        eventBus.removeListener('eventSend', this.handleEvent)
    }
    handleEvent = (msg, num) => {
        this.setState({
            msg
        })
        console.log(msg, num);
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
            </div>
        )
    }
}
