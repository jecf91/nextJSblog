import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/util.module.css'
import Link from 'next/link'

const name = 'João Freitas'
export const siteTile = 'My blog with Next.JS'

export default function Layout({ children , home }) {
  return (
    <div className={styles.container}>
        {/*Head tags */}
        <Head>
          <link rel="icon" href="/favicon.ico"/>
          <meta name="description" content="A simple personal blog builted using Next.JS"/>
          <meta name="og:title" content={siteTile} />
          <meta name="twitter:card" content="summary_large_image"/>
        </Head>
        {/* page header with conditional rendering */}
        <header className={styles.header}>
           { home ? (
              <>
                <img src='/images/profile.jpg' alt={name} className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}/>
                <h1 className={utilStyles.heading2x1}>{name}</h1>
              </>) :
              (
              <>
                <Link href='/'><a><img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                /></a></Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href='/'>
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
              </>)
            }
        </header>
        {/* main tag for rendering all the children components */}
        <main>{children}</main>
        {/* if we aren´t at home render div with the back to home link*/}
        {!home && 
          (
            <div className={styles.backToHome}>
              <Link href='/'><a>Back to Home</a></Link>
            </div>
          )}
    </div>
  )
}

