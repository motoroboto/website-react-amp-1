function NavHome() {
  return (
    <ul>
      <li className='nav-item'>
        <a className='nav-link js-scroll-trigger' href='/mixtapes/'>
          Albums
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link js-scroll-trigger' href='/mixtapes/'>
          Mixtapes
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link js-scroll-trigger' href='/mashups/'>
          Mashups
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link js-scroll-trigger' href='#projects'>
          About my Projects
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link js-scroll-trigger' href='#signup'>
          ?
        </a>
      </li>
    </ul>
  );
}

export default NavHome;
