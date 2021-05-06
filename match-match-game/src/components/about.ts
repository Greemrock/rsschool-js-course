import './about.scss';

const About = `
<main class="main">
  <div class="main__body">
    <h2 class="title">How to play?</h2>
    <div class="how-to-play">
      <div class="how-to-play__wrapper">
        <div class="how-to-play__block">
          <div class="first"></div>
          <div class="wrapper">
            <span class="how-to-play__text">Register new player in game</span>
            <button class="btn" type="button" id="register">register new player</button>
          </div>
        </div>
        <div class="how-to-play__block">
          <div class="second"></div>
          <div class="wrapper">
            <span class="how-to-play__text">Configure your game settings</span>
            <button class="btn" type="button" id="settings">game settings</button>
          </div>
        </div>
        <div class="how-to-play__block">
          <div class="third"></div>
          <span class="how-to-play__text">Start you new game! Remember card positions and match it before times up.</span>
        </div>
        <div class="how-to-play__block flex-direction">
          <span class="how-to-play__text">Example match</span>
          <div class="example-img"></div>
        </div>
      </div>
    </div>
  </div>
</main>
`;

export default About;
