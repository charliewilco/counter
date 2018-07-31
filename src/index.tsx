import * as React from 'react'

export interface Stepper {
  count: number
  onIncrement: () => void
  onDecrement: () => void
  onReset: (n: number) => void
}

export interface StepperUIState {
  count: number
}

export interface StepperUIProps {
  children: (val: Stepper) => React.ReactNode
  onChange: (val: StepperUIState) => void
}

export class StepperUI extends React.Component<StepperUIProps, StepperUIState> {
  static displayName = 'Stepper'

  state = {
    count: 0
  }

  decrement = () =>
    this.setState((prevState: StepperUIState) => {
      return { count: --prevState.count }
    })

  increment = () =>
    this.setState((prevState: StepperUIState) => {
      return { count: ++prevState.count }
    })

  reset = () => this.setState({ count: 0 })

  componentDidUpdate(prevProps: StepperUIProps, { count: prevCount }: StepperUIState) {
    const { count } = this.state
    const { onChange } = this.props

    onChange && onChange({ count })
  }

  render() {
    const { count } = this.state
    return this.props.children({
      count,
      onIncrement: this.increment,
      onDecrement: this.decrement,
      onReset: this.reset
    })
  }
}
