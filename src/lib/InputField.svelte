<script lang="ts">
	// All the props related to the component
	export let type: 'text' | 'number' | 'date' | 'textarea' | 'email';
	export let value: string = '';
	export let name: string;
	export let isRequired: boolean = false;
	export let label: string;

	const textboxStyles =
		'w-full outline-[#222222] text-[#222222] bg-[#F5F5F5] border border-[#A6A6A6] px-2 py-2 rounded-md text-md resize-none scroll-y';
</script>

<div class="input-field flex flex-col items-stretch gap-3">
	<label for={name} class="text-sm w-full select-none">
		<span
			>{label}<span>
				{#if isRequired}
					<span class="text-red-800">*</span>
				{/if}
			</span></span
		></label
	>
	{#if type === 'textarea'}
		<textarea id={name} {name} rows="8" class={textboxStyles} bind:value required={isRequired} />
	{:else if type === 'text'}
		<input id={name} class={textboxStyles} {name} bind:value type="text" required={isRequired} />
	{:else if type === 'number'}
		<input
			id={name}
			class={textboxStyles}
			{name}
			min="1"
			bind:value
			type="number"
			required={isRequired}
		/>
	{:else if type === 'date'}
		<input id={name} class={textboxStyles} {name} bind:value type="date" required={isRequired} />
	{:else}
		<input id={name} class={textboxStyles} {name} bind:value type="text" required={isRequired} />
	{/if}
</div>
