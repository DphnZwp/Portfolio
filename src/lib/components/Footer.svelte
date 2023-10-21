<script>
  let isCollapsed = false;
  let footerHeight = 'auto';
  let arrowDirection = 'down';

  function toggleFooter() {
    isCollapsed = !isCollapsed;
    footerHeight = isCollapsed ? 'auto' : 'auto';
    arrowDirection = isCollapsed ? 'up' : 'down';
  }
</script>

<footer style="height: {footerHeight}">
  <div class="footer-button">
    <button on:click={toggleFooter}>
      Contact gegevens
      <img src={`/images/${arrowDirection}-arrow.svg`} alt={`${arrowDirection} arrow`} />
    </button>
  </div>
  <div class="content" style="display: {isCollapsed ? 'none' : 'flex'}">
    <div class="contact">
      <a class="email" href="mailto:zwuupdaphne@gmail.com">
        zwuupdaphne@gmail.com        
      </a>
      <a class="phone" href="tel:+31648239097">
        +31 6 48 23 90 97
      </a>
    </div>
    <div class="socials">
      <a class="linkedin" href="https://www.linkedin.com/in/daphne-zwuup-a85867170/" target="_blank">         
      </a>
      <a class="github" href="https://github.com/DphnZwp" target="_blank">
      </a>
      <a class="codepen" href="https://codepen.io/DphnZwp" target="_blank">
      </a>
    </div>
  </div>
</footer>

<style>
footer {
  padding: .75rem  2rem;
  background-color: var(--clr-background-secondary);
  bottom: 0;
  width: 100%;
  position: fixed;
}

.footer-button button {
  font-family: 'Akaya Telivigala', cursive;
  font-size: 2rem;
  font-weight: 700;
}

.footer-button img {
  margin-left: .5rem;
}

.content {
  justify-content: space-between;
  align-items: center;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
}

.socials {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: .5rem;
}

.linkedin {
  width: 35px;
  height: 35px;
  content: url('/images/linkedin.svg');
}

.linkedin:hover {
  content: url('/images/linkedin-hover.svg');
}

.github {
  width: 35px;
  height: 35px;
  content: url('/images/github.svg');
}

.github:hover {
  content: url('/images/github-hover.svg');
}

.codepen {
  width: 35px;
  height: 35px;
  content: url('/images/codepen.svg');
}

.codepen:hover {
  content: url('/images/codepen-hover.svg');
}

footer a {
  color: #000;
  text-decoration: none;
  font-weight: 700;
}

.contact a::after {
  content: "";
  height: 3px;
  background-color: #000;
  bottom: 0;
  display: block;
  border-radius: 2.5em;
  transition: transform .5s;
  transform: scaleX(1);
}

.contact a:hover::after {
  transform: scaleX(.8);
}

.footer-button {
  width: 100%;
  display: flex;
  justify-content: center;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

@media (min-width: 70em) {
  .contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }

  .socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
}
</style>
