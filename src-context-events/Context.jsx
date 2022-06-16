import React, { Component } from 'react'
const userContext = React.createContext({ nickname: 'jack', level: 0 })
const themeContext = React.createContext(null)
// class ProvideHead extends Component {
//     render() {
//         return (
//             <div>
//                 <span>用户昵称:{this.context.nickname}</span>
//                 <span>用户等级:{this.context.level}</span>
//             </div>
//         )
//     }
// }
// ProvideHead.contextType = userContext
function ProvideHead() {
    return (
        <div>
            <userContext.Consumer>
                {
                    userInfo => {
                        return <themeContext.Consumer>
                            {
                                value => {
                                    return (<div>
                                        <span style={{ color: value }}>{userInfo.nickname}</span>
                                        <span>{userInfo.level}</span>
                                    </div>)
                                }
                            }
                        </themeContext.Consumer>
                    }
                }
            </userContext.Consumer>
        </div>
    )
}
class Provide extends Component {
    render() {
        return (
            <div>
                <ProvideHead />
            </div>
        )
    }
}

export default class Context extends Component {
    state = { nickname: 'lisa', level: 99, color: 'green' }
    render() {
        return (
            <div>
                <userContext.Provider value={{ ...this.state }}>
                    <themeContext.Provider value={this.state.color}>
                        <Provide />
                    </themeContext.Provider>
                </userContext.Provider>
            </div>
        )
    }
}
