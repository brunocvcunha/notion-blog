import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/vercel-and-notion.png"
        height="85"
        width="250"
        alt="Vercel + Notion"
      />
      <h1>Bruno Volpato's Blog</h1>
      <h2>
        My personal stuff :)
      </h2>

      <Features />

      <div className="explanation">
        <p>
          This is a statically generated, {' '}
          <ExtLink href="https://notion.so">Notion</ExtLink> powered blog.
        </p>
      </div>
    </div>
  </>
)
