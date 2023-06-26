<script>
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main>
	<div class="hero">
		<h1>Een Frontend Developer en designer met een creatief denkbeeld</h1>
		<p>Mensen herkennen vaak mijn websites door mijn iconen, illustraties en mijn creatieve ideeen.</p>
	</div>

	<section id="projects">
		<h2>Projecten</h2>
		<p>Hier zijn een paar projecten die ik heb gemaakt. Bekijk al mijn projecten in <a target="_blank" href="https://github.com/DphnZwp?tab=repositories">Github</a>.</p>
		<div class="project">
			<article>
				<h3>Frontend Coding the Curbs</h3>
				<div class="characteristics">
					<span>HTML5</span>
					<span>CSS3</span>
					<span>JavaScript</span>
					<span>Django</span>
				</div>
				<p>Ik heb de frontend gemaakt van de app van de Coding the Curbs. Valentino (de backender van CTC) heeft de backend van de app gemaakt. Ik heb ook het concept ontwerp van de app gemaakt.</p>
				<a class="live" href="https://app.www.codingthecurbs.nl/" target="_blank">Live link »</a>
			</article>
			<article>
				<h3>Visitekaartje</h3>
				<div class="characteristics">
					<span>HTML5</span>
					<span>CSS3</span>
					<span>JavaScript</span>
					<span>Sveltekit</span>
					<span>Prismic</span>
				</div>
				<p>Het visitekaartje is gemaakt in Sveltekit. De data komt van Prismic.</p>
				<a class="live" href="https://your-tribe-for-life-profile-card-zeta.vercel.app/" target="_blank">Live link »</a>
				<a href="https://github.com/DphnZwp/your-tribe-for-life-profile-card" target="_blank">Github link »</a>
			</article>
			<article>
				<h3>Creative coding</h3>
				<div class="characteristics">
					<span>HTML5</span>
					<span>CSS3</span>
					<span>JavaScript</span>
					<span>Sveltekit</span>
					<span>Greensock</span>
				</div>
				<p>Ik heb voor drie concepten verschillende animaties met Greensock en javascript gemaakt.</p>
				<a class="live" href="https://your-tribe-for-life-profile-card-zeta.vercel.app/" target="_blank">Live link »</a>
				<a href="https://github.com/DphnZwp/your-tribe-for-life-profile-card" target="_blank">Github link »</a>
			</article>
			<article>
				<h3>Zelftest website</h3>
				<div class="characteristics">
					<span>HTML5</span>
					<span>CSS3</span>
					<span>JavaScript</span>
				</div>
				<p>De opdracht is om responsive website met een goede flow te leveren, die gebaseerd is op de huisstijl, op voor de opdrachtgever.</p>
				<a class="live" href="https://saml-zelftestapp-campaign-website-flow.vercel.app/index.html" target="_blank">Live link »</a>
				<a href="https://github.com/DphnZwp/saml-zelftestapp-campaign-website-flow" target="_blank">Github link »</a>
			</article>
			<article>
				<h3>VIP-IT website</h3>
				<div class="characteristics">
					<span>HTML5</span>
					<span>CSS3</span>
					<span>JavaScript</span>
					<span>Eleventy</span>
					<span>Netlify CMS</span>
				</div>
				<p>Een toegankelijke website voor VIP-IT gemaakt met eleventy. De website is gekoppeld aan Netlify CMS.</p>
				<a class="live" href="https://vip-it.netlify.app/" target="_blank">Live link »</a>
				<a href="https://github.com/DphnZwp/vip-it" target="_blank">Github link »</a>
			</article>
			<article>
				<h3>Writer Mind</h3>
				<div class="characteristics">
					<span>HTML5</span>
					<span>CSS3</span>
					<span>JavaScript</span>
					<span>Sveltekit</span>
					<span>Hygraph</span>
				</div>
				<p>Mijn idee was om een website tegen uitstelgedrag en writer’s block te maken. In deze website heb ik mezelf vooral gericht op rich text en minder op andere functies van de websites.</p>
				<a class="live" href="https://lets-jam-webapplicatie-eight.vercel.app/" target="_blank">Live link »</a>
				<a href="https://github.com/DphnZwp/lets-jam-webapplicatie" target="_blank">Github link »</a>
			</article>
		</div>
	</section>
</main>

<style>
	h1 {
		max-width: 52rem;
	}

	.hero {
		margin-top: -10rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

 	.hero p {
		margin-top: 1rem;
		font-size: 1.25rem;
		font-weight: 600;
		max-width: 30rem;
	}

	#projects {
    padding-right: 2em;
		padding-top: 3rem;
    padding-left: 2em;
		padding-bottom: 3rem;
		text-align: center;
	}

	.project {
		margin-top: 2rem;
		display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
	}

	h2 {
		font-size: 4rem;
	}

	a {
		color: var(--black);
	}

	article {
		padding: 2em;
		text-align: left;
		background-color: var(--blue);
		border-radius: 1em;
	}

	h3 {
		font-family: 'Akaya Telivigala', cursive;
		font-size: 2rem;
	}

	main {
		margin-bottom: 6.8125rem;
	}

	.characteristics {
		margin-top: .5rem;
		display: flex;
		flex-wrap: wrap;
		gap: .5rem;
	}

	span {
		padding: .5rem .75rem;
		color: var(--white);
		background-color: var(--black);
		display: block;
		width: max-content;
		border-radius: .5rem;
	}

	article a {
		margin-top: .5rem;
    color: var(--black);
    text-decoration: none;
    font-weight: 700;
		position: relative;
		display: inline-block;
  }

  article a::after {
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

  article a:hover::after {
    transform: scaleX(.5);
  }

	article p {
		margin-top: 1rem;
	}

	.live {
		margin-right: 1rem;
	}

	@media (min-width: 70em) {
		.hero {
			margin-top: -6rem;
		}

		#projects {
			padding-right: 2em;
			padding-top: 3rem;
			padding-left: 2em;
			padding-bottom: 3rem;
			text-align: center;
		}
		.project {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>