import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/avatar.jpg"
        width="180"
        alt="Bruno Volpato"
        className="avatar"
      />
      <h1>Bruno Volpato</h1>
      <h2>Software Engineer</h2>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  </>
)
