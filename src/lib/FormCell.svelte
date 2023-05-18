<script lang="ts">
	type Utility = {
		className: string;
		logic: boolean;
	};

	export let fullSpan: boolean = false;
	export let isCentered: boolean = false;
	
	function addUtilities(utilities: Utility[]) {
		let classList = '';
		const space = ' ';
		utilities.forEach(({ className, logic }) => {
			if (logic) classList += className + space;
		});

		return classList;
	}

	const computedStyles = addUtilities([
		{ className: 'w-full', logic: !isCentered },
		{ className: 'col-span-full', logic: fullSpan },
		{ className: 'justify-self-center', logic: isCentered }
	]);
</script>

<div class={`cell ${computedStyles} flex flex-col`}>
	<slot />
</div>
