<script lang="ts">
    import Videoheader from '$lib/videoheader/videoheader.svelte'
    import {Card, Button} from 'flowbite-svelte';
    import {ArrowRightOutline} from 'flowbite-svelte-icons';
    import {products} from "$lib/common/products";
</script>

<svelte:head>
    <title>LCM Bienenhof | Startseite</title>/
</svelte:head>

<Videoheader></Videoheader>

<main>
    <div class="flex flex-col items-center">
        <h2 class="text-center mb-8">Ein paar unsere Produkte</h2> <!-- mb-8 fügt Abstand hinzu -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each products as product}
                {#if product.inShowroom}
                    <div class="space-y-4">
                        <Card img="{product.thumbnail}" imgClass="w-full h-48 object-cover">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{product.shortDescription}</p>
                            <div class="flex">
                                <Button href="/product/{product.id}">
                                    Zum Produkt
                                    <ArrowRightOutline class="w-6 h-6 ms-2 text-white"/>
                                </Button>
                            </div>
                        </Card>
                    </div>
                {/if}
            {/each}
        </div>
        <div class="flex justify-center mt-4">
            <Button href="/shop">Alle Produkte anschauen</Button>
        </div>
    </div>

    <div>
        <h2 class="mb-8 mt-8 text-center">Warum Honig aus Staldenried?</h2>
    </div>




</main>





