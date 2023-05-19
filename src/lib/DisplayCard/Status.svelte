<script lang="ts">
    import Info from "./Info.svelte";
    import Lable from "./Lable.svelte";
    export let recent: boolean;
    export let bookedPrecentage: number;
</script>
<section id="top" class="flex flex-row">
	<Info condition={recent}>Recently added</Info>
	<Lable>{bookedPrecentage}% sold</Lable>
</section>
