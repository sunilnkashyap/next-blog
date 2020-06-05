import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also, I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}