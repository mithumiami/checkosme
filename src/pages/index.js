import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Noto_Sans_JP } from 'next/font/google'

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Special Cosmetics</title>
        <meta name="description" content="Your Special Cosmetics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */}

        <div className={styles.center}>
          <div className={styles.title}>Your Cosmetics</div>
          {/* <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div> */}
        </div>

        <div className={styles.grid}>
          <div className={styles.card} rel="noopener noreferrer">
            <h2 className={notojp.className}>
              商品名
              {/* <span>-&gt;</span> */}
            </h2>
            <p className={notojp.className}>
              詳細
            </p>
          </div>

          <div className={styles.card} rel="noopener noreferrer">
            <h2 className={notojp.className}>
              商品名2
              {/* <span>-&gt;</span> */}
            </h2>
            <p className={notojp.className}>
              map
            </p>
          </div>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={notojp.className}>
              商品名3
              {/* <span>-&gt;</span> */}
            </h2>
            <p className={notojp.className}>
              タグもつくる
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={notojp.className}>
              商品名4
              {/* <span>-&gt;</span> */}
            </h2>
            <p className={notojp.className}>
              お気に入り機能
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
