<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import ProjectsHero from '@/components/sections/projects/ProjectsHero.vue'
import AssetPortfolioSection from '@/components/sections/projects/AssetPortfolioSection.vue'
import TechnicalPerformanceSection from '@/components/sections/projects/TechnicalPerformanceSection.vue'
import LogisticsSection from '@/components/sections/projects/LogisticsSection.vue'
import SiteLocationsBanner from '@/components/sections/projects/SiteLocationsBanner.vue'
</script>

<template>
  <div>
    <NavBar />
    <ProjectsHero />
    <AssetPortfolioSection />
    <TechnicalPerformanceSection />
    <LogisticsSection />
    <SiteLocationsBanner />
    <FooterSection />
  </div>
</template>
