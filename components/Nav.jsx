import { Link } from 'react-scroll';

const links = [
  {
    path: 'home',
    name: 'ศูนย์สมองและระบบประสาท',
    offset: -50
  },
  {
    path: 'article',
    name: 'บทความ',
    offset: -50
  },
  {
    path: 'video',
    name: 'วิดีโอ',
    offset: -150
  },
  {
    path: 'package',
    name: 'แพ็กเกจ',
    offset: 0
  },
]

const Nav = ({ containerStyles, linkStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className={`${linkStyles}`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav