<script lang="ts">
    import * as Card from '$lib/components/card/index';
	import { NiceOrNaughtyKids } from "./state.svelte";
	import type { PageDataResponse } from "./type";


    let { data }: {
        data: PageDataResponse
    } = $props();

    let niceOrNaughtyKids: NiceOrNaughtyKids = new NiceOrNaughtyKids(data.kidTallies);

    $inspect('Data', data)

</script>

<Card.Root>
    <p>tesst</p>
</Card.Root>

<div class="flex item-start gap-4">
    {#if data.fetchState !== 'ok'}
        <div>
            Error fetching data
        </div>
    {/if}
    
    <div>
        {niceOrNaughtyKids.totalKids}
    </div>

    <div>
        {#each niceOrNaughtyKids.pageKids as niceOrNaughtyKid}
            <p>
                {niceOrNaughtyKid.id}
            </p>
        {/each}
    </div>


</div>




