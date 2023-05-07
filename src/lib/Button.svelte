<script lang="ts">
  export let type: "submit" | "reset" | "button" = "button";
</script>
<button type={type} class="bg-[#222222] text-white p-2 rounded-md">
  <slot />
</button>
