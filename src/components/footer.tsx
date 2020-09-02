import ExtLink from './ext-link'
import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/bruflow',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/brunocvcunha',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/brunocvcunha/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:me@brunovolpato.com?subject=Personal+Blog',
  },
]

export default () => (
  <>
    <footer>
      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>

      <span>
        Bruno Volpato -{' '}
        <a href="mailto:me@brunovolpato.com">me@brunovolpato.com</a>
      </span>

      <p class="noprint">
        This is a statically generated,{' '}
        <ExtLink href="https://notion.so">Notion</ExtLink> powered blog.
      </p>
    </footer>
  </>
)
