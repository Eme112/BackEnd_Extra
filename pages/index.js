import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Testing with Next js</title>
        <meta name="description" content="Salu2 a to2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Go to <a href="/auth">Auth</a>
        </h1>

        <p className={styles.description}>
          Page to authenticate yourself{' '}
        </p>
      </main>
    </div>
  )
}
