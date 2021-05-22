import Head from "next/head";
import Link from 'next/link'
import Layout from '../../components/layout'
import style from './firstPost.module.scss'

export default function FirstPost () {
    return (
        <Layout>
            <Head>
                <title>FirstPost</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={'text-xs text-red-500'}>FirstPost</h1>
            Learn <Link href="/"><a>Next.js!</a></Link> 
            <div className={style.content_div}>content_div</div>
            FirstPost
        </Layout>
    )
  }