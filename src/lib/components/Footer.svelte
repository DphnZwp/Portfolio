<footer>
  <div class="contact">
    <a class="email" href="mailto:zwuupdaphne@gmail.com">
      zwuupdaphne@gmail.com        
    </a>
    <a class="phone" href="tel:+31648239097">
      +31 6 48 23 90 97
    </a>
  </div>
  <div class="socials">
    <a class="linkedin" href="/">         
    </a>
    <a class="github" href="/">
    </a>
  </div>
</footer>
<style>
footer {
  padding: 2rem;
  background-color: var(--orange);
  display: flex;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  position: fixed;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 2rem;
}

.socials {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.linkedin {
  content: url('/images/linkedin.svg');
}

.linkedin:hover {
  content: url('/images/linkedin-hover.svg');
}

.github {
  content: url('/images/github.svg');
}

.github:hover {
  content: url('/images/github-hover.svg');
}

footer a {
  color: var(--black);
  text-decoration: none;
  font-weight: 700;
}

.contact a::after {
  content: "";
  height: 3px;
  background-color: black;
  bottom: 0;
  display: block;
  border-radius: 2.5em;
  transition: transform .5s;
  transform: scaleX(1);
}

.contact a:hover::after {
  transform: scaleX(.5);
}

@media (min-width: 70em) {
  .contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
}
</style>
