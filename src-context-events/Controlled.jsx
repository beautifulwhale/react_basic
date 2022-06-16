import React, { PureComponent } from 'react'

export default class Controlled extends PureComponent {
    state = { userName: '' }
    render() {
        return (
            <div>
                <form action="#" onSubmit={(e) => this.submitForm(e)}>
                    用户: <input type="text" onChange={(e) => this.inputChange(e)} value={this.state.userName} />
                    <button type='submit'>提交</button>
                </form>
            </div>
        )
    }
    submitForm(e) {
        e.preventDefault()
        console.log(this.state.userName);
    }
    inputChange(e) {
        this.setState({
            userName: e.target.value
        })
    }
}
