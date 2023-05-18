<script lang="ts">
	import '../app.css';
	import '@fontsource/inter/200.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
</script>

<main class="font-display">
	<nav id="navbar" class="flex flex-row p-4 bg-[#222222] mb-10">
		<ul id="links" class="flex flex-row grow gap-5">
			<li>
				<a href="/" class="text-[#19BAB6] font-bold text-2xl hover:underline">Home</a>
			</li>
			<li>
				<a href="/create" class="text-[#19BAB6] font-bold text-2xl hover:underline">Create</a>
			</li>
			<li>
				<a href="/mybookings" class="text-[#19BAB6] font-bold text-2xl hover:underline">My bookings</a>
			</li>
		</ul>
		<div id="logo">
			<a href="/"><h1 class="text-[#159895] font-bold text-3xl">EventCury</h1> </a>
		</div>
	</nav>
	<slot />
	<footer />
</main>
