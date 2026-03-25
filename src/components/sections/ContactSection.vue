<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

const form = ref({
  fullName: '',
  company: '',
  email: '',
  summary: '',
})

function handleSubmit() {
  // Handler pengiriman form dapat dihubungkan ke API
  console.log('Form submitted:', form.value)
}
</script>

<template>
  <section class="py-20 lg:py-28 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <!-- ── Kolom Kiri: Teks & Info ───────────────────────────── -->
        <div>
          <h2
            class="reveal font-newsreader text-primary font-normal leading-[1.1] mb-6"
            style="font-size: clamp(1.9rem, 3.2vw, 2.8rem); transition-delay: 0.1s"
          >
            Let's build a strategic partnership.
          </h2>
          <p
            class="reveal text-gray-500 text-sm leading-relaxed mb-10"
            style="transition-delay: 0.18s"
          >
            Our team at Aruna Mineral is ready to explore how we can align our extraction and supply
            capabilities with your industrial goals. Reach out to begin the conversation.
          </p>

          <!-- Kontak -->
          <div class="reveal space-y-4" style="transition-delay: 0.26s">
            <div class="flex items-center gap-3 text-sm text-gray-500">
              <span class="text-gold">✉</span>
              <span>partnerships@arunamineral.id</span>
            </div>
            <div class="flex items-center gap-3 text-sm text-gray-500">
              <span class="text-gold">✆</span>
              <span>+62 21 5050 8800</span>
            </div>
          </div>
        </div>

        <!-- ── Kolom Kanan: Form ──────────────────────────────────── -->
        <form
          class="reveal reveal--right space-y-4"
          style="transition-delay: 0.2s"
          @submit.prevent="handleSubmit"
        >
          <!-- Full Name -->
          <div>
            <label
              class="block text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase mb-1.5"
            >
              Full Name
            </label>
            <input
              v-model="form.fullName"
              type="text"
              required
              autocomplete="name"
              class="w-full border border-gray-200 px-4 py-3 text-sm text-primary focus:outline-none focus:border-primary transition-colors duration-200 placeholder:text-gray-300"
              placeholder="Nama lengkap"
            />
          </div>

          <!-- Company Institution -->
          <div>
            <label
              class="block text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase mb-1.5"
            >
              Company / Institution
            </label>
            <input
              v-model="form.company"
              type="text"
              autocomplete="organization"
              class="w-full border border-gray-200 px-4 py-3 text-sm text-primary focus:outline-none focus:border-primary transition-colors duration-200 placeholder:text-gray-300"
              placeholder="Nama perusahaan"
            />
          </div>

          <!-- Professional Email -->
          <div>
            <label
              class="block text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase mb-1.5"
            >
              Professional Email
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              autocomplete="email"
              class="w-full border border-gray-200 px-4 py-3 text-sm text-primary focus:outline-none focus:border-primary transition-colors duration-200 placeholder:text-gray-300"
              placeholder="email@perusahaan.com"
            />
          </div>

          <!-- Inquiry Summary -->
          <div>
            <label
              class="block text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase mb-1.5"
            >
              Inquiry Summary
            </label>
            <textarea
              v-model="form.summary"
              rows="4"
              class="w-full border border-gray-200 px-4 py-3 text-sm text-primary focus:outline-none focus:border-primary transition-colors duration-200 placeholder:text-gray-300 resize-none"
              placeholder="Jelaskan kebutuhan Anda secara singkat..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-primary text-white text-[11px] font-bold tracking-[0.18em] py-4 hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
          >
            SEND INQUIRY
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
