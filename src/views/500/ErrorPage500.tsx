import Link from 'next/link'

import styles from './ErrorPage500.module.scss'

export const ErrorPage500 = () => {
  return (
    <div className={styles['error-500-page']}>
      <div className={styles['section-500-container']}>
        <h1>500</h1>
        <h2>Internal Server Error!</h2>
        <p>Sorry, something went wrong. Please try again later.</p>
        <Link className={styles['link-to-home']} href={'/'}>
          <a>Back to homepage</a>
        </Link>
      </div>
    </div>
  )
}
