<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { actors } from '../data/actors'

const search = ref('')
const countryFilter = ref('Все')

const filteredActors = computed(() => {
  let result = actors

  // Фильтр по стране, если выбрана конкретная
  if (countryFilter.value !== 'Все') {
    result = result.filter(actor => actor.country === countryFilter.value)
  }

  // Фильтр по поиску
  if (search.value.trim()) {
    const query = search.value.toLowerCase()
    result = result.filter(
      actor =>
        actor.lastName.toLowerCase().includes(query) ||
        actor.firstName.toLowerCase().includes(query) ||
        actor.movies.some(m => m.title.toLowerCase().includes(query))
    )
  }

  // Если поле поиска пустое и фильтр «Все», ничего не показываем
  if (!search.value.trim() && countryFilter.value === 'Все') {
    return []
  }

  return result
})
</script>

<template>
  <div class="container mt-4">
    <!-- Фильтры -->
    <div class="row mb-3 g-2 align-items-center">
      <div class="col-md-6">
        <input
          v-model="search"
          type="text"
          placeholder="Введите фамилию или фильм..."
          class="form-control"
        />
      </div>
      <div class="col-md-3">
        <select v-model="countryFilter" class="form-select">
          <option>Все</option>
          <option>Россия</option>
          <option>США</option>
        </select>
      </div>
    </div>

    <!-- Результаты -->
    <div v-if="filteredActors.length" class="row g-4">
      <div v-for="actor in filteredActors" :key="actor.id" class="col-12">
        <div class="card h-100 shadow-sm card-hover">
          <div class="row g-0">
            <!-- Фото слева -->
            <div class="col-md-4">
              <RouterLink :to="`/actor/${actor.id}`">
                <img :src="actor.photo" class="img-fluid rounded-start" />
              </RouterLink>
            </div>
            <!-- Информация справа -->
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  <RouterLink :to="`/actor/${actor.id}`" class="text-decoration-none">
                    {{ actor.lastName }} {{ actor.firstName }}
                  </RouterLink>
                </h5>
                <p class="text-muted mb-2">
                  {{ actor.movies.map(m => m.title).join(', ') }}
                </p>
                <p class="card-text text-truncate-3">
                  {{ actor.bio }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Если нет результатов -->
    <p v-else-if="search.trim() || countryFilter.value !== 'Все'" class="text-center text-muted mt-5">
      Ничего не найдено
    </p>
  </div>
</template>

<style>
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}
.text-truncate-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>