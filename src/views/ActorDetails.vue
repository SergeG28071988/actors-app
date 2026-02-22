<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { actors } from '../data/actors'

const route = useRoute()
const actor = actors.find(a => a.id === Number(route.params.id))
</script>

<template>
  <div class="container" v-if="actor">
    <div class="row g-4">
      <div class="col-md-4">
        <img :src="actor.photo" class="img-fluid rounded shadow-sm" />
      </div>

      <div class="col-md-8">
        <h2>{{ actor.lastName }} {{ actor.firstName }}</h2>

        <h5 class="mt-3">Фильмография</h5>
        <ul class="list-group mb-3">
          <li v-for="movie in actor.movies" :key="movie.title" class="list-group-item">
            {{ movie.year }} — {{ movie.title }}
          </li>
        </ul>

        <p>{{ actor.bio }}</p>

        <RouterLink to="/actors" class="btn btn-primary mt-3">
          ← Назад к списку
        </RouterLink>
      </div>
    </div>
  </div>
</template>