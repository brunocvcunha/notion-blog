import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: {
  label: string
  page?: string
  link?: string
  slug?: string
}[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Resume', page: '/blog/resume', slug: 'resume' },
  { label: 'Contact', link: 'mailto:me@brunovolpato.com' },
  { label: 'Github', link: 'https://github.com/brunocvcunha' },
]

const ogImageUrl = '/avatar.jpg'

export default ({ titlePre = '' }) => {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Bruno Volpato</title>
        <meta name="description" content="Bruno Volpato" />
        <meta name="og:title" content="Bruno Volpato" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@bruflow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>"
        ></link>
      </Head>
      <ul>
        {navItems.map(({ label, page, link, slug }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a
                  className={
                    router.pathname === page || router.asPath === page
                      ? 'active'
                      : undefined
                  }
                >
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
