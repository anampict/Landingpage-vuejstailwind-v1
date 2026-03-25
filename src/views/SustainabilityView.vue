<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import SustainabilityHero from '@/components/sections/sustainability/SustainabilityHero.vue'
import ESGFoundationsSection from '@/components/sections/sustainability/ESGFoundationsSection.vue'
import ReforestationSection from '@/components/sections/sustainability/ReforestationSection.vue'
import WorkforceSection from '@/components/sections/sustainability/WorkforceSection.vue'
import ESGReportBanner from '@/components/sections/sustainability/ESGReportBanner.vue'
</script>

<template>
  <div>
    <NavBar />
    <SustainabilityHero />
    <ESGFoundationsSection />
    <ReforestationSection />
    <WorkforceSection />
    <ESGReportBanner />
    <FooterSection />
  </div>
</template>
