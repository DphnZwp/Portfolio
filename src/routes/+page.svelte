<script>
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main>
	<div class="hero__title">
		<h1>Een Frontend Developer en designer met een creatief denkbeeld</h1>
		<p>Mensen herkennen vaak mijn websites door mijn iconen, illustraties en mijn creatieve ideeen.</p>
	</div>

	<section id="projecten">
		<h2>Projecten</h2>
		<article>
			<h3>fffgvvgbv6j</h3>

			<p>fdedsgsgssdgsgd</p>
		</article>
	</section>
</main>

<style>
	h1 {
		max-width: 52rem;
	}
	
	.hero__title {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

 	.hero__title p {
		margin-top: 1rem;
		font-size: 1.25rem;
		font-weight: 600;
		max-width: 30rem;
	}

	#projecten {
		padding-top: 4rem;
	}

	h2 {
		font-size: 4rem;
		text-align: center;
	}

	main {
		margin-bottom: 6.8125rem;
	}
</style>