import Head from 'next/head'
import Link from 'next/link'
import {
  Container, 
  Header, 
  Icon,
} from 'semantic-ui-react'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Color Cycle</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Container className={styles.header}>
        <Header as="h1" textAlign="center">
          Color Cycle
          <Header.Subheader>
            &copy;2021 sumomo-99
          </Header.Subheader>
          <Header.Subheader>
            <Link href="https://github.com/sumomo-99/color-cycle">
              <Icon link size="big" name="github" />
            </Link>
            <Link href="https://twitter.com/sumomo_99">
              <Icon link size="big" name="twitter" />
            </Link>
          </Header.Subheader>
        </Header>
      </Container>

      {children}
      
    </div>
  )
}