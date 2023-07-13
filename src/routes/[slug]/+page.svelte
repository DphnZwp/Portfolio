<script>
	import Header from '$lib/components/Header.svelte';
	export let data;
	let post = data.data
</script>

<Header />

<main>
	<section class="post">
		<h1>{post.title}</h1>
	</section>

	<section class="content">
		{@html post.content.html}
	</section>
</main>

<style>
	h1 {
		font-size: 5rem;
		text-align: center;
	}

	.post {
		padding-right: 2rem;
		padding-left: 2rem;
		padding-bottom: 2rem;
	}

	.content {
		padding-right: 2rem;
		padding-left: 2rem;
		padding-bottom: 10rem;
	}

  @media (min-width: 70em) {
		.post {
			padding-right: 25rem;
			padding-left: 25rem;
		}

		.content {
			padding-right: 25rem;
			padding-left: 25rem;
		}
	}
</style>