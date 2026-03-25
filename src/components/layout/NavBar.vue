<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { navItems } from '@/router'

const mobileOpen = ref(false)

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm animate-fade-in-down">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- ── Brand Logo ─────────────────────────────────────────── -->
        <RouterLink
          to="/"
          @click="closeMobile"
          class="text-primary font-semibold text-lg italic tracking-wide select-none"
        >
          Aruna Mineral
        </RouterLink>

        <!-- ── Desktop Navigation ────────────────────────────────── -->
        <nav class="hidden md:flex items-center gap-8">
          <component
            v-for="item in navItems"
            :key="item.label"
            :is="item.routerTo ? RouterLink : 'a'"
            v-bind="item.routerTo ? { to: item.routerTo } : { href: item.href }"
            class="nav-link relative pb-1 text-[11px] font-semibold tracking-[0.18em] text-gray-400 hover:text-primary transition-colors duration-200"
          >
            {{ item.label }}
          </component>
        </nav>

        <!-- ── Right Side ─────────────────────────────────────────── -->
        <div class="flex items-center gap-3">
          <!-- Contact CTA (desktop) -->
          <button
            class="hidden md:block bg-primary text-white text-[11px] font-bold tracking-[0.18em] px-6 py-3 hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
          >
            CONTACT US
          </button>

          <!-- Hamburger (mobile) -->
          <button
            class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] cursor-pointer"
            :aria-expanded="mobileOpen"
            aria-label="Toggle navigation"
            @click="toggleMobile"
          >
            <span
              class="block w-6 h-[2px] bg-primary transition-all duration-300"
              :class="mobileOpen ? 'translate-y-[7px] rotate-45' : ''"
            />
            <span
              class="block w-6 h-[2px] bg-primary transition-all duration-300"
              :class="mobileOpen ? 'opacity-0' : ''"
            />
            <span
              class="block w-6 h-[2px] bg-primary transition-all duration-300"
              :class="mobileOpen ? '-translate-y-[7px] -rotate-45' : ''"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- ── Mobile Menu Drawer ─────────────────────────────────────── -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden bg-white border-t border-gray-100 shadow-md">
        <nav class="flex flex-col px-6 py-4 gap-1">
          <component
            v-for="item in navItems"
            :key="item.label"
            :is="item.routerTo ? RouterLink : 'a'"
            v-bind="item.routerTo ? { to: item.routerTo } : { href: item.href }"
            @click="closeMobile"
            class="nav-link relative py-3 text-[11px] font-semibold tracking-[0.18em] text-gray-400 hover:text-primary transition-colors duration-200 after:content-[''] after:block after:w-8 after:h-px after:bg-gray-200 after:mt-3 last:after:hidden"
          >
            {{ item.label }}
          </component>

          <button
            class="mt-3 bg-primary text-white text-[11px] font-bold tracking-[0.18em] px-6 py-3 hover:bg-primary-hover transition-colors duration-200 cursor-pointer w-full"
            @click="closeMobile"
          >
            CONTACT US
          </button>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Active state: text color */
.nav-link.router-link-active {
  color: var(--color-primary);
}

/* Active state: gold underline indicator */
.nav-link.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-gold);
}
</style>
