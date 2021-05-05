import './header.scss';

const Header = `
<header class="header">
  <div class="header__body">
    <a href="#" class="header__logo">
      <img src="./logo.svg" alt="logo">
    </a>
    <nav class="header__menu">
      <ul class="header__list">
        <li>
          <div class="about"></div>
          <span>About Game</span>
        </li>
        <li>
          <div class="score"></div>
          <span>Best Score</span>
        </li>
        <li>
          <div class="settings"></div>
          <span>Game Settings</span>
        </li>
      </ul>
    </nav>
    <button class="header__btn" type="button" id="register">register new player</button>
    </button>
  </div>
</header>
`;

export default Header;
