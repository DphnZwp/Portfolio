<script>
	import Header from '$lib/components/Header.svelte';
	export let data;

  console.log(data.posts);
</script>

<Header>
	Blog
</Header>

<main>
  <div class="posts">
    {#each data.posts as { title, intro }}
      <article class="post">
        <h2 class="post__header">{title}</h2>
        <p class="post__paragraph">{intro}</p>
        <!-- <p class="post__paragraph">{@html content.html}</p> -->
        <a class="post__link" href="#">Lees meer over {title} »</a>
      </article>
    {/each}
    </div>
</main>

<style>
  .posts {
    padding-top: 2em;
    padding-right: 2em;
    padding-bottom: 2em;
    padding-left: 2em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5em;
  }

  .post {
    padding: 2em;
    background-color: var(--blue);
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

  .post__link {
    padding: .25em;
    color: var(--black);
    font-weight: 700;
    text-decoration: none;
    position : relative;
  }

  .post__link::after {
    content : "";
    position : absolute;
    width : 100%;
    height : 3px;
    background-color: var(--black);
    border-radius: 2.5em;
    bottom: 0;
    left: 0;
    transform : scaleX(1);
    transition: transform .5s;
  }

  .post__link:hover::after {
    transform : scaleX(.8);
  }

  /* .stripes {
    margin-bottom: 1em;
    color: white;
    height: 10em;
    background: repeating-linear-gradient(
      45deg,
      var(--orange),
      var(--orange) 15px,
      var(--white) 15px,
      var(--white) 40px
    );
  } */
</style>