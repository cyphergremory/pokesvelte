<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<div class="absolute w-full h-full bg-blue-50 overflow-auto flex flex-wrap items-start content-start">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <Navbar></Navbar>

    <div class="flex-1 py-3">
        <slot></slot>
    </div>
</div>

<script>
    import Navbar from '../components/layout/navbar.svelte'
</script>