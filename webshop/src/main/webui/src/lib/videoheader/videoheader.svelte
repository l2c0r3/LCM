<script>
    import {Video} from "flowbite-svelte";
</script>

<!-- https://dev.to/dailydevtips1/tailwind-css-full-screen-video-header-5539 -->

<header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
    <div class="relative text-white bg-opacity-50 z-30 p-5 text-center">
        <div class="mb-6">
            <div class="text-7xl font-bold">
                LCM-Bienenhof
            </div>
        </div>
        <div>
            <div class="text-5xl">
                Walliser Bienenhonig feinster Qualität
            </div>
        </div>
    </div>
    <Video src="https://media.istockphoto.com/id/1478750832/de/video/bienen-fliegen.mp4?s=mp4-640x640-is&k=20&c=11g4WY5YLZDdSm6YkGfDCiLEq8gCFMOnkOncaS-LRW8="
           autoplay
           loop
           muted
           playsinline
           class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    ></Video>
</header>


