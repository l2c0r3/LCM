<script>
    import Videoheader from '$lib/videoheader/videoheader.svelte'
    import {Card, Button, Toggle} from 'flowbite-svelte';
    import {ArrowRightOutline} from 'flowbite-svelte-icons';

    let vCard = true;
</script>

<svelte:head>
    <title>LCM Bienenhof | Startseite</title>/
</svelte:head>

<Videoheader></Videoheader>

<main>
    <h2>Unsere Produkte</h2>

    <div class="space-y-4">
        <Card img="/images/image-1.webp">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise
                technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <Button>
                Read more
                <ArrowRightOutline class="w-6 h-6 ms-2 text-white"/>
            </Button>
        </Card>
    </div>
</main>





