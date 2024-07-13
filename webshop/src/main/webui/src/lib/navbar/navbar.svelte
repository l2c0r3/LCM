<script lang="ts">
    import {Navbar, NavBrand, NavHamburger, NavUl, NavLi} from 'flowbite-svelte';
    import { page } from '$app/stores';

    let isHomePage: boolean;
    $: isHomePage = $page.url.pathname === "/";
</script>

{#if !isHomePage}
    <Navbar>
        <NavBrand href="/">
            <img src="/images/logo_with_name.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo"/>
        </NavBrand>
        <NavHamburger/>
        <NavUl>
            <NavLi href="/shop">Shop</NavLi>
            <NavLi href="/gallery">Gallery</NavLi>
            <NavLi href="/contact">Contact</NavLi>
            <NavLi href="/about">About</NavLi>
        </NavUl>
    </Navbar>
{/if}