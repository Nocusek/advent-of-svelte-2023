<script lang="ts">
	import type { Snippet } from "svelte";

    let { 
        children
     }: {
        children: Snippet
     } = $props();

</script>

<div
    class="text-lg font-bold p-2"
>
    {@render children()}
</div>