import React, { PureComponent } from 'react'
import {Button} from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'
export default class TestAntd extends PureComponent {
  render() {
    const loadings = [true,true,false]
    return (
      <div>
        <Button type="primary" loading={loadings[0]}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
        />
      </div>
    )
  }
}
