<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="">Work Order System</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/settings">Settings</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>


</style>
