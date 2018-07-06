import styled from 'styled-components'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Counter from '../components/counter'

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
      <Counter onChange={(count) => console.log(count)} />
    </Container>
  </div>
)
