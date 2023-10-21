<script>
	import Header from '$lib/components/Header.svelte';
	export let data;
	let post = data.data
</script>

<Header />

<main>
	<section class="post">
		<h1>{post.title}</h1>
		<img class="post__background" src="/images/background.jpg" alt="">
	</section>

	<section class="content">
		{@html post.content.html}
	</section>
</main>

<style>
	h1 {
		text-align: center;
		width: 100%;
		top: 15rem;
		z-index: 1;
	}

	.post {
		margin-top: -10rem;
	}

	.post__background {
		width: 100%;
		position: absolute;
		top: 20rem;
	}

	.content {
		padding-right: 2rem;
		padding-left: 2rem;
		padding-bottom: 10rem;
	}

  @media (min-width: 70em) {
		h1 {
			font-size: 11rem;
		}

		.post {
			margin-top: -12rem;
    		margin-bottom: 4rem;
		}

		.content {
			padding-right: 25rem;
			padding-left: 25rem;
		}
	}
</style>