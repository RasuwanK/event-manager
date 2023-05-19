<script lang="ts">
    export let size: 1 | 2 | 3 = 1;
    // Any valid tailwindcss margin value
    export let margin: number = 0;
    export let center: boolean = false;
</script>
{#if size === 1}
    <h1 class="text-4xl font-bold my-{margin}" class:text-center={center}><slot /></h1>
{:else if size === 2}
    <h2 class="text-2xl font-bold my-{margin}" class:text-center={center}><slot /></h2>
{:else if size === 3}
    <h3 class="text-xl font-bold my-{margin}" class:text-center={center}><slot /></h3>
{/if}