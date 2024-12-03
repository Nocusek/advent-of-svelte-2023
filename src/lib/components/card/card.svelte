<script lang="ts">
	import type { Snippet } from "svelte";

    let { 
        children
     }: {
        children: Snippet
     } = $props();

</script>

<div
    class="border rounded-lg p-2"
>
    {@render children()}
</div>