<template>
  <div class="bg-light min-vh-100 d-flex flex-column" style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)">
    <!-- Header -->
    <header class="bg-dark text-white py-3 shadow">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="h4 m-0">Каталог актёров</h1>
        <nav>
          <router-link to="/" class="text-white me-3 text-decoration-none">Главная</router-link>
          <router-link to="/actors" class="text-white text-decoration-none">Актёры</router-link>
        </nav>
      </div>
    </header>

    <!-- Main -->
    <main class="flex-grow-1 py-5">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white py-3 mt-auto text-center">
      &copy; 2026 Каталог актёров
    </footer>
  </div>
</template>

<script setup>
// пока ничего не нужно
</script>