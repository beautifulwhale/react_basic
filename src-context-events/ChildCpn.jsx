import React, { Component } from 'react'
import './css/childcpn.css'
export default class ChildCpn extends Component {
    clickTab = (id) => {
        this.props.clickTabName(id)
    }
    render() {
        const { tabs, activeName } = this.props
        return (
            <div>
                <ul className='headers'>
                    {
                        tabs.map((item) => {
                            return <li key={item.id} className={activeName === item.id ? 'active' : ''}
                                onClick={() => this.clickTab(item.id)}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
