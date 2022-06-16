import React, { PureComponent } from 'react'
import styled from 'styled-components'
const Button = styled.button`
    background-color: yellow;
    border: none;
    width: 50px;
    height: 30px;
`
const TomatoButton = styled(Button)`
    background-color: red;
`
let color = 'orange'
const StrongHOne = styled.h1`
    color:${color};
    background-color: ${props => props.background};
    font-size: 30px;
`
const Input = styled.input.attrs(
    props => ({
        size: props.small ? 5 : undefined
    })
)`
    padding: ${props => props.padding};
    ::placeholder{
        color: pink
    }
`

const Comp = styled('div').withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        !['hidden'].includes(prop)
        && defaultValidatorFn(prop),
}).attrs({ className: 'foo' })`
    color: red;
    &.foo {
      text-decoration: underline;
    }
  `;
export default class index extends PureComponent {
    state = { color: 'green' }
    render() {
        return (
            <div>
                <Button>I am yellow</Button>
                <StrongHOne background={this.state.color}>我是好人</StrongHOne>
                <TomatoButton>I am Tomato</TomatoButton>
                <Input padding={'2em'} />
                <Input padding={'2px'} small />
                <br />
                <Comp hidden draggable="true">
                    Drag Me!
                </Comp>
            </div>
        )
    }
}
