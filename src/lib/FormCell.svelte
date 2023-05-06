<script lang="ts">
  export let fullSpan: boolean = false;
</script>

<div class={`cell w-full ${fullSpan ? 'col-span-full' : ''}`}>
	<slot />
</div>
