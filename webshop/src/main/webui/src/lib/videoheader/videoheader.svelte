<script>
    import { Navbar, NavBrand, NavHamburger, NavLi, NavUl, Video } from "flowbite-svelte";
</script>

<!-- https://dev.to/dailydevtips1/tailwind-css-full-screen-video-header-5539 -->

<header class="relative flex items-center justify-center h-screen overflow-hidden">
    <div class="absolute top-0 left-0 w-full z-30">
        <Navbar class="bg-opacity-50 bg-black">
            <NavBrand href="/">
                <img src="/images/logo_with_name.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                <span class="self-center whitespace-nowrap text-xl font-semibold text-white">LCM Bienenhof</span>
            </NavBrand>
            <NavHamburger class="text-white"/>
            <NavUl classUl="bg-gray-0">
                <NavLi class="text-white" href="/shop">Shop</NavLi>
                <NavLi class="text-white" href="/gallery">Gallery</NavLi>
                <NavLi class="text-white" href="/contact">Contact</NavLi>
                <NavLi class="text-white" href="/about">About</NavLi>
            </NavUl>
        </Navbar>
    </div>


    <div class="relative text-white z-30 text-center">
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
