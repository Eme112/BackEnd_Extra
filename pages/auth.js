import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LoginForm from '../components/login-form'

export default function Auth() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Testing with Next js</title>
        <meta name="description" content="Salu2 a to2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LoginForm/>
      </main>
    </div>
  )
}
