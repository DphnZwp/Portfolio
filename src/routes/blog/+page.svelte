<script>
	import Header from '$lib/components/Header.svelte';
	export let data;
  let posts = data.posts
  console.log(data.posts);
</script>

<Header />

<main>
  <section class="blog">
    <h1>Blog</h1>
    <p></p>
  </section>

  <div class="posts">
    {#each posts as { title, intro, slug, createdAt }}
      <article class="post">
        <a class="post__link" href="/{slug}">
          <h2 class="post__header">{title}</h2>
        </a>
        <p class="post__paragraph">{intro}</p>
        <p class="post__date">Gepubliceerd op: {new Date(createdAt).toLocaleDateString('nl-NL')}</p>
        <a class="post__link" href="/{slug}">
          Lees meer
          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25 1.5L16.75 9L9.25 16.5M2.25 1.5L9.75 9L2.25 16.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </article>
    {/each}
    </div>
</main>

<style>
  h1 {
    font-size: 4rem;
    text-align: center;
  }

  h2 {
    font-size: 2.125rem;
  }

  a {
    text-decoration: none;
  }

  .blog {
    margin-top: -10rem;
  }

  .posts {
    padding-top: 2rem;
    padding-right: 2em;
    padding-bottom: 10em;
    padding-left: 2em;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
  }

  .post {
    padding: 2em;
    background-color: var(--clr-background);
    border-radius: 1em;
  }

  .post__header {
    margin-bottom: .5rem;
  }

  .post__paragraph {
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .post__date {
    margin-bottom: 1rem;
  }

  .post__link {
    color: var(--clr-text);
    font-weight: 700;
    text-decoration: none;
    position : relative;
    display: inline-flex;
    align-items: center;
    gap: .5rem;
  }

  .post__link svg path {
    stroke: var(--clr-text);
  }

  .post__link:last-of-type::after {
    content : "";
    position : absolute;
    width : 100%;
    height : 3px;
    background-color: var(--clr-text);
    border-radius: 2.5em;
    bottom: -.25rem;
    left: 0;
    transform : scaleX(1);
    transition: transform .5s;
  }

  .post__link:last-of-type:hover::after {
    transform : scaleX(.8);
  }

  @media (min-width: 70em) {
    h1 {
			font-size: 5rem;
		}
    
    .blog {
			margin-top: -6rem;
    }

    .posts {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>