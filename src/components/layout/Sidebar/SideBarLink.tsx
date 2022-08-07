import clsx from 'clsx'
import Link from 'next/link'

interface ISideBarLinkProps {
  slug: string
  icon: string
  isOpen: boolean
  title: string
}

export const SideBarLink = ({
  slug,
  icon,
  isOpen,
  title
}: ISideBarLinkProps) => {
  const activeLink = window.location.pathname
  return (
    <Link
      href={slug}
      className={clsx('side-bar__link', activeLink === slug && '--is-active')}
    >
      <img src={icon} alt={slug.slice(1)} />
      {isOpen ? <span className='dashboard-btn'>{title}</span> : null}
    </Link>
  )
}
