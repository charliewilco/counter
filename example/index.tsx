import styled from 'styled-components'
import Head from './components/head'
import Nav from './components/nav'
import Counter from './components/counter'

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

const Container = styled.div`
  max-width: 288px;
  margin: 16px auto;
`

export default () => (
  <div>
    <Head title="Counter" />
    <Nav />
    <Container>
      <Counter />
      <Counter onChange={count => console.log(count)} />
    </Container>
  </div>
)
