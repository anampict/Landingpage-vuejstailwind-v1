<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import AboutHero from '@/components/sections/about/AboutHero.vue'
import LegacyTimelineSection from '@/components/sections/about/LegacyTimelineSection.vue'
import BoardSection from '@/components/sections/about/BoardSection.vue'
import PrinciplesSection from '@/components/sections/about/PrinciplesSection.vue'
import FootprintSection from '@/components/sections/about/FootprintSection.vue'
</script>

<template>
  <div>
    <NavBar />
    <AboutHero />
    <LegacyTimelineSection />
    <BoardSection />
    <PrinciplesSection />
    <FootprintSection />
    <FooterSection />
  </div>
</template>
