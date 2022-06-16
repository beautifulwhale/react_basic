import React, { Component } from 'react'
import './css/navbar.css'
export default class Navbar extends Component {
    render() {
        const { leftSlot, centerSlot, rightSlot } = this.props
        return (
            <div className='nav-bar'>
                <div className='nav-item nav-left'>
                    {leftSlot}
                </div>
                <div className='nav-item nav-center'>
                    {centerSlot}
                </div>
                <div className='nav-item nav-right'>
                    {rightSlot}
                </div>
            </div>
        )
    }
}
