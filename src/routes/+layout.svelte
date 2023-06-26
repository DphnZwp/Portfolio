  <!-- Page content -->
  <slot />
  <footer>
    <div class="contact">
      <a class="email" href="/">
        Email        
      </a>
      <a class="phone" href="/">
        Bellen  
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
    align-items: center;
    gap: 1rem;
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
</style>