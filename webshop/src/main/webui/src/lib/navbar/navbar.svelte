<script>
    import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
</script>

<Navbar  >
    <NavBrand href="/">
        <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    </NavBrand>
    <NavHamburger  />
    <NavUl >
        <NavLi href="/shop">Shop</NavLi>
        <NavLi href="/gallery">Gallery</NavLi>
        <NavLi href="/contact">Contact</NavLi>
        <NavLi href="/about">About</NavLi>
    </NavUl>
</Navbar>