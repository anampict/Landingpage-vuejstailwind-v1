<script setup lang="ts">
const footerLinks = {
  Services: [
    'Geological Exploration',
    'Extraction & Refining',
    'Global Logistics',
    'Land Rehabilitation',
  ],
  Company: ['About Us', 'Projects', 'Sustainability', 'Leadership', 'Careers'],
  Legal: ['Privacy Policy', 'Terms of Use', 'ESG Report'],
}
</script>

<template>
  <footer class="bg-primary text-white py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- ── Atas: Brand + Links ────────────────────────────────── -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <p class="text-white font-semibold text-lg italic tracking-wide mb-4">Aruna Mineral</p>
          <p class="text-white/50 text-sm leading-relaxed max-w-xs">
            Responsible mineral extraction connecting Indonesia's abundant natural resources with
            global industrial needs since 1998.
          </p>
          <!-- Sosial -->
          <div class="flex gap-4 mt-6">
            <a
              href="#"
              aria-label="LinkedIn"
              class="w-8 h-8 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-colors duration-200 text-xs font-bold"
              >in</a
            >
            <a
              href="#"
              aria-label="Twitter/X"
              class="w-8 h-8 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-colors duration-200 text-xs font-bold"
              >𝕏</a
            >
          </div>
        </div>

        <!-- Link kolom -->
        <div v-for="(items, category) in footerLinks" :key="category">
          <h4 class="text-[10px] font-bold tracking-[0.2em] text-gold uppercase mb-4">
            {{ category }}
          </h4>
          <ul class="space-y-2.5">
            <li v-for="item in items" :key="item">
              <a
                href="#"
                class="text-white/50 text-sm hover:text-white transition-colors duration-200"
              >
                {{ item }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- ── Bawah: Copyright ───────────────────────────────────── -->
      <div
        class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-white/30 text-xs tracking-wide"
      >
        <p>© {{ new Date().getFullYear() }} Aruna Mineral Resources. All rights reserved.</p>
        <p>Registered in Indonesia · PT Aruna Mineral Resources Tbk</p>
      </div>
    </div>
  </footer>
</template>
