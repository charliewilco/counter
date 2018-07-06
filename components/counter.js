import React, { Component } from 'react'
import styled from 'styled-components'

const Sheet = styled.div`
  background: white;
  display: block;
  box-shadow: 0 1px 5px rgba(27, 31, 35, 0.15);
  padding: 16px;
  margin-bottom: 16px;
`

const StepButton = styled.button`
  appearance: none;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  text-align: center;
  border: 1px solid #cfe4ed;
  color: #147aab;
  font-size: 18px;
  line-height: 1;
  padding: 4px;
  box-sizing: content-box;
  margin: 0;
`

const ResetButton = styled.button`
  appearance: none;
  text-align: center;
  border: 1px solid #cfe4ed;
  color: #147aab;
  font-size: 14px;
  line-height: 1;
  padding: 8px;
  box-sizing: inherit;
  margin: 0;
`

const InlinedFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const CountDisplay = styled.span`
  font-size: 400%;
  color: #004470;
  font-weight: 400;
`

export default class extends Component {
  static displayName = 'MyCounter'

  state = {
    count: 0
  }

  decrement = () =>
    this.setState(prevState => {
      return { count: --prevState.count }
    })

  increment = () =>
    this.setState(prevState => {
      return { count: ++prevState.count }
    })

  reset = () => this.setState({ count: 0 })

  componentDidUpdate(prevProps, { count: prevCount }) {
    const { count } = this.state
    const { onChange } = this.props

    onChange && onChange({count})
  }

  render() {
    const { count } = this.state
    return (
      <Sheet>
        <InlinedFlex>
          <StepButton onClick={this.decrement}>-</StepButton>
          <CountDisplay>{count}</CountDisplay>
          <StepButton onClick={this.increment}>+</StepButton>
        </InlinedFlex>
        <InlinedFlex>
          <ResetButton onClick={this.reset}>Reset</ResetButton>
        </InlinedFlex>
      </Sheet>
    )
  }
}
