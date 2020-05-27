import Head from 'next/head'
import Link from 'next/link'
import Layout , { siteTile } from '../components/layout'
import utilStyles from '../styles/util.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps(){
  const allPosts = getSortedPostsData()
  return {
    props: {
        allPosts
    }
  } 
}

export default function Home({allPosts}){
  return(
    <Layout home>
      <Head>
        <title>{siteTile}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is João Freitas and I am a Web Developer</p>
        <p>Allways willing to new challenges and learning something new!</p>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPosts.map( post => (
            <li className={utilStyles.listItem} key={post.id}>
              <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}