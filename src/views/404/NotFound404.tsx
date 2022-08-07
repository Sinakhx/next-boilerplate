import Link from 'next/link'

import styles from './NotFound404.module.scss'

export const NotFound404 = () => {
  return (
    <div className={styles['notfound-404-page']}>
      <div className={styles['notfound-container']}>
        <div className={styles['notfound-404']}></div>
        <h1>404</h1>
        <h2>Oops! Page Not Be Found</h2>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed. name changed or is temporarily unavailable
        </p>
        <Link className={styles['notfound-404-link-to-home']} href={'/'}>
          <a>Back to homepage</a>
        </Link>
      </div>
    </div>
  )
}
