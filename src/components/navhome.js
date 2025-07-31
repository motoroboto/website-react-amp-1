function NavHome() {
  return (
    <ul>
      <li>
        <a className='nav-link js-scroll-trigger' href='/originals/'>
          Albums
        </a>
      </li>
      <li>
        <a className='nav-link js-scroll-trigger' href='/mixtapes/'>
          Mixtapes
        </a>
      </li>
      <li>
        <a className='nav-link js-scroll-trigger' href='/mashups/'>
          Mashups
        </a>
      </li>
      <li>
        <a className='nav-link js-scroll-trigger' href='#projects'>
          About my Projects
        </a>
      </li>
      <li>
        <a className='nav-link js-scroll-trigger' href='#signup'>
          ?
        </a>
      </li>
    </ul>
  );
}

export default NavHome;
