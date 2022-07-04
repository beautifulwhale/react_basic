import React, { PureComponent } from 'react'

export default class HighOrderComponent extends PureComponent {
    state = { isLogin: false }
    render() {
        return (
            <div>
                <StrongHome nickname={'Home'} age={20} isLogin={this.state.isLogin} />
                <StrongAbout nickname={'About'} age={200} isLogin={true}/>
            </div>
        )
    }
}
class Home extends PureComponent {
    render() {
        return (
            <div>
                <h2>{`Home: nickname: ${this.props.nickname}---age: ${this.props.age}---region: ${this.props.region}`}</h2>
            </div>
        )
    }
}
class About extends PureComponent {
    render() {
        return (
            <div>
                About Content
                <h3>{`my name is ${this.props.nickname} and my age is ${this.props.age} and the region is from highOrderCpn ${this.props.region}`}</h3>
            </div>
        )
    }
}
const StrongHome = higherOrderComponent(Home)
const StrongAbout = higherOrderComponent(About)
function higherOrderComponent(WrappedComponent) {
    return props => {
        const { isLogin } = props;
        // 增强组件的props
        if (isLogin) {
            return (<div>
                <WrappedComponent {...props} region={'China'} />
                <DashBorder />
            </div>)
        } else {
           return <Login />
        }
    }
}
function DashBorder() {
    return <h2>我是登录后的面板</h2>
}
function Login() {
    return <h2>我是Login组件</h2>
}