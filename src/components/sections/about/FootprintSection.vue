<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

// TODO: Tambahkan gambar peta dunia setelah didownload
//
// import worldMapImage from '@/assets/images/worldmap.png'
//   → Rekomendasi: ilustrasi peta dunia minimal/flat (PNG transparan atau putih),
//     dengan titik-titik lokasi. Style: monochrome atau teal/hijau seperti di Figma.
//     Ukuran min 1600×900px
//
// Untuk versi lebih keren, bisa juga SVG peta dunia:
// import worldMapImage from '@/assets/images/worldmap.svg'

useScrollReveal()

const offices = [
  {
    city: 'Jakarta, ID',
    role: 'Corporate Headquarters',
    detail: 'Menara Astra, South Jakarta',
  },
  {
    city: 'Perth, AU',
    role: 'Asia-Pacific Operations',
    detail: '178 St Georges Tce',
  },
  {
    city: 'Singapore, SG',
    role: 'Trading Hub',
    detail: '1 Raffles Place',
  },
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- ── Kiri: Teks + daftar kota ──────────────────────────── -->
        <div>
          <p
            class="reveal text-[10px] font-bold tracking-[0.22em] text-gold uppercase mb-4"
            style="transition-delay: 0.05s"
          >
            Footprint
          </p>
          <h2
            class="reveal font-newsreader text-primary font-normal leading-[1.1] mb-6"
            style="font-size: clamp(1.9rem, 3.2vw, 2.8rem); transition-delay: 0.15s"
          >
            From Jakarta<br />to Perth
          </h2>
          <p
            class="reveal text-gray-500 text-[15px] leading-relaxed mb-10"
            style="transition-delay: 0.22s"
          >
            Our operations span three time zones and two hemispheres, supported by regional offices
            that ensure proximity to both resource origins and global industrial clients.
          </p>

          <!-- Office list -->
          <ul class="space-y-5">
            <li
              v-for="(office, i) in offices"
              :key="office.city"
              class="reveal flex items-start gap-4 border-l-2 border-gray-100 hover:border-gold pl-5 transition-colors duration-300 group"
              :style="`transition-delay: ${0.3 + i * 0.1}s`"
            >
              <div>
                <p
                  class="text-primary font-bold text-[13px] tracking-wide group-hover:text-gold transition-colors duration-300"
                >
                  {{ office.city }}
                </p>
                <p class="text-[10px] font-bold tracking-[0.16em] text-gray-400 uppercase mt-0.5">
                  {{ office.role }}
                </p>
                <p class="text-gray-400 text-xs mt-1">{{ office.detail }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- ── Kanan: Peta dunia ──────────────────────────────────── -->
        <div
          class="reveal reveal--right bg-gray-50 border border-gray-100 aspect-[4/3] flex items-center justify-center overflow-hidden relative"
          style="transition-delay: 0.2s"
        >
          <!--
            TODO: Aktifkan setelah punya gambar peta dunia
            <img
              src="@/assets/images/worldmap.png"
              alt="Global operational footprint"
              class="w-full h-full object-contain p-6"
              style="transform:translateZ(0)"
            />
            Titik-titik lokasi (opsional, bisa ditambah di atas peta):
            <div class="absolute" style="top:52%; left:52%">
              <span class="block w-2.5 h-2.5 rounded-full bg-gold animate-ping absolute"></span>
              <span class="block w-2.5 h-2.5 rounded-full bg-gold relative"></span>
            </div>
          -->

          <!-- Placeholder sementara -->
          <div class="text-center p-8">
            <p class="text-gray-300 text-xs leading-relaxed">
              [worldmap.png<br />1600×900px — peta dunia flat/illustrasi<br />dengan titik Jakarta,
              Perth, Singapore]
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
