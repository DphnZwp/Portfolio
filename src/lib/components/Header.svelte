<script>
  let isOn = false;
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('darkmode');
    isOn = !isOn;
  }
</script>

<header>
  <div class="cloud">
    <button 
      class="dark-mode-toggle" on:click={toggleDarkMode}>
      {isOn ? 'Dag' : 'Nacht'} modus
    </button>
  </div>
  <div class="sun">
    <a class="logo" aria-label="Logo link" aria-hidden="true" href="/">
      <img src="/images/daphne-logo.svg" alt="">
    </a>
    <nav>
      <ul class="navigation">
        <li>
          <a href="/#projects">Projecten</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  </div>
  <svg class="clouds" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 1524 248" style="enable-background:new 0 0 1524 248;" xml:space="preserve">
    <style type="text/css">
      .st0{fill-rule:evenodd;clip-rule:evenodd;fill:var(--clr-cloud);}
      .st1{fill:var(--clr-cloud);}
    </style>
    <g id="cloud-one">
      <path class="st0" d="M14.2,95L14.2,95c-7.8,6.9-2.5,24.9,6.3,32c8.6,7,17.4,6.7,25.2,6.4c0.4,0,0.9,0,1.3,0c9-0.3,12.3-0.9,15-1.4
        c3.5-0.6,6.2-1.1,18.7-0.7c5.3,3,11.2,5.5,17.5,7.2c18.2,4.9,38.3,2.9,49.6-5c9.7,7.2,26.3,8.9,36.9,5.1
        c10.6-3.8,15.9-11.7,17.2-20.1c6.6,3.6,11.8,2.6,18.7,1.3l0.1,0c6.4-1.2,8.3-7.2,6.8-13.1c0.5-0.1,1-0.2,1.4-0.3
        c9.4-1.7,15-2.7,21.8-9.6c1.7-1.7,3.4-3.6,4.2-6c2.1-6.4-3.3-14.6-9.1-18.7c-5.5-3.9-11.3-4.3-14.2-4.2c-12.7-26.7-45-42.1-73-29.7
        C150,22.6,132,12.6,114.2,13.6c-17.8,1-34.6,12.8-41.5,29.2c-11.2-6.2-26.4-1.2-34.3,9c-7.8,10.2-9.4,24.1-7.4,36.8
        C24,86.2,19.8,90,14.2,95z"/>
    </g>
    <g id="cloud-two">
      <path class="st0" d="M429.7,133.1L429.7,133.1c9.5,6.7,6.1,27.2-2.7,36.4c-8.6,8.9-18.5,9.8-27.1,10.5c-0.5,0-1,0.1-1.4,0.1
        c-10.1,0.9-13.7,0.7-16.9,0.5c-3.9-0.2-7.1-0.4-20.8,1.7c-5.5,4.1-11.7,7.6-18.5,10.3c-19.6,7.8-42.1,8.3-55.7,1.1
        c-9.8,9.3-28,13.3-40.3,10.5c-12.3-2.8-19.2-10.9-21.8-20c-6.8,4.9-12.7,4.5-20.6,3.9l-0.1,0c-7.3-0.5-10.2-6.9-9.3-13.6
        c-0.6,0-1.1-0.1-1.6-0.1c-10.7-0.6-17-0.9-25.5-7.8c-2.1-1.7-4.2-3.6-5.4-6.1c-3.2-6.8,1.8-16.6,7.6-22c5.5-5.1,12-6.3,15.2-6.6
        c10.6-31.3,44.3-52.7,77.1-42.7c7.5-18.5,26.1-31.9,46-33.2c19.9-1.3,40.1,9.6,49.9,26.9c11.6-8.4,29.1-4.9,39.2,5.4
        c10.1,10.3,13.6,25.5,13.1,39.8C417.7,124.7,422.9,128.3,429.7,133.1z"/>
    </g>
    <g id="cloud-three">
      <path class="st1" d="M476.4,78.3c5.8-2.4,3.2-15.5,14.4-21.2c11.2-5.7,25-5.7,36.2,0.1c6.9-18.1,26-30.8,45.4-30.2
        c19.4,0.6,37.6,14.6,43.3,33.1c12.2-0.7,23.7,10.8,22.9,23c9.3-4.2,20.4,6.7,18.2,16.6c-2.2,10-14.1,15.7-24,13.2
        c-24.7,18.3-59.6,21.8-87.5,8.7c-22.2,14.7-69.1,12.5-81.8-10.9c-5.4-4.6-11.7,1.8-16.8-9.5C441,78.3,473.9,81.6,476.4,78.3z"/>
    </g>
    <g id="cloud-four">
      <path class="st1" d="M1223.6,102.4c-9.2-3.8-5.2-24.6-22.9-33.7c-17.8-9.1-39.9-9-57.6,0.2c-11-28.7-41.4-48.9-72.2-47.9
        c-30.8,1-59.8,23.2-68.9,52.6c-19.4-1.1-37.7,17.1-36.5,36.5c-14.8-6.6-32.5,10.6-29,26.4c3.5,15.8,22.5,24.8,38.2,21
        c39.4,29,94.9,34.5,139.3,13.9c35.3,23.3,110.1,19.8,130.2-17.3c8.6-7.3,18.7,2.8,26.8-15C1279.9,102.4,1227.6,107.7,1223.6,102.4z
        "/>
    </g>
    <g id="cloud-five">
      <path class="st1" d="M1179.3,185.2c6.9-2.9,3.9-18.5,17.2-25.3c13.3-6.8,29.9-6.8,43.2,0.2c8.2-21.6,31-36.8,54.2-36
        c23.1,0.8,44.9,17.4,51.7,39.5c14.6-0.8,28.3,12.9,27.4,27.5c11.1-5,24.4,8,21.8,19.8c-2.6,11.9-16.9,18.7-28.7,15.8
        c-29.5,21.8-71.2,26-104.4,10.4c-26.5,17.5-82.6,14.9-97.7-13c-6.5-5.5-14,2.1-20.1-11.3C1137.1,185.2,1176.3,189.1,1179.3,185.2z"
        />
    </g>
    <g id="cloud-six">
      <path class="st1" d="M1326.2,97.4c5.1-3.5,8.8-6.1,14.4-3.5c-0.4-10.3,2.2-21.2,9.6-28.6c7.4-7.4,20.3-9.9,28.8-3.9
        c7.3-12.4,22.1-20.2,36.8-19.3c14.6,0.9,28.3,10.6,33.9,23.8c24.1-7.2,48.9,8.2,56.7,30.7c2.4,0.2,7.1,1.1,11.2,4.7
        c4.3,3.8,8,10.9,5.6,15.8c-0.9,1.8-2.5,3.2-4,4.4c-9.3,7.3-15.1,4.3-33.2,6.9c-5.8,0.8-9.8,1.3-15.2,1.1c-6.5-0.2-9.1-1.3-13.9-1.7
        c-9.6-0.8-16.7,1.8-21.7,3.3c-20,5.8-41.2,4.2-55.2,2c-22.1-3.5-13.3-0.5-30.9-2c-6.6-0.6-14.3-0.9-21-7.6
        C1321.7,117,1319.2,102.2,1326.2,97.4z"/>
    </g>
  </svg>
</header>

<style>
  header {
    background-color: var(--clr-background);
    background-image: var(--background-image);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    height: 26em;
  }

  .cloud {
    margin-top: 6rem;
    margin-right: 14.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    position: absolute;
    z-index: 2;
  }

  .logo {
    margin-right: 1rem;
  }

  nav {
    margin-top: .5rem;
    z-index: 1;
  }

  .navigation {
    display: flex;
    gap: 1.5rem;
  }

  nav a {
    color: #000;
    text-decoration: none;
    font-weight: 700;
  }

  nav li::after {
    content: "";
    height: 3px;
    background-color: #000;
    bottom: 0;
    display: block;
    border-radius: 2.5em;
    transition: transform .5s;
    transform: scaleX(.5);
  }

  nav li:hover::after {
    transform: scaleX(1);
  }

  .clouds {
    position: absolute;
  }

  #cloud-six {
    animation: slide-fast 25s linear infinite;
  }

  @keyframes slide-fast {
  0% {
    transform: translateX(-20em);
  }
  100% {
    transform: translateX(10em);
  }
  }

  #cloud-three {
    animation: slide-in 38s linear infinite;
  }

  @keyframes slide-in {
    0% {
      transform: translateX(-27.25em);
    }
    100% {
      transform: translateX(69em);
    }
  }

  #cloud-one,
  #cloud-two {
    animation: wobble 8s linear infinite;
  }

  @keyframes wobble {
  0% {
    transform: translateX(0em);
  }
  50% {
    transform: translateX(2em);
  }
  100% {
    transform: translateX(0em);
  }
  }

  #cloud-four,
  #cloud-five {
    animation: wobble-reverse 8s linear infinite;
  }

  @keyframes wobble-reverse {
    0% {
      transform: translateX(2em);
    }
    50% {
      transform: translateX(0em);
    }
    100% {
      transform: translateX(2em);
    }
  }

  .sun {
    padding: 1em 2em 3em 2em;
    background-color: var(--clr-background-secondary);
    width: max-content;
    height: min-content;
    border-radius: 0 0 20em 20em;
    z-index: 1;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .dark-mode-toggle {
    padding: 1em;
    color: var(--clr-text);
    font-family: 'Cabin', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    background-image: var(--cloud-image);
    background-size: contain;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    animation: wobble-reverse 9s linear infinite;
    cursor: pointer;
  }

  .dark-mode-toggle:hover {
    color: var(--clr-text-secondary);
    background-image: var(--cloud-image-secondary);
  }

  @keyframes wobble-reverse {
    0% {
      transform: translateX(.5em);
    }
    50% {
      transform: translateX(-.5em);
    }
    100% {
      transform: translateX(.6em);
    }
  }
</style>