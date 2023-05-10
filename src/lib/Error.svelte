<script lang="ts">
  export let name: string;
  export let invalidMessage: string;
  export let emptyMessage: string;
  export let empty: boolean;
  export let invalid: boolean;
</script>
<span class="{name}-error text-red-800 text-sm">
  {#if empty}
    {emptyMessage}
  {:else if invalid}
    {invalidMessage}
  {/if}
</span>
