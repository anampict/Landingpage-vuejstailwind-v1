import { onMounted, onUnmounted } from 'vue'

/**
 * Menambahkan class `is-visible` pada elemen ber-class `reveal`
 * saat elemen masuk viewport menggunakan IntersectionObserver.
 *
 * Gunakan di setiap section dengan: useScrollReveal()
 * Tambahkan delay per-elemen via: style="transition-delay: 0.1s"
 */
export function useScrollReveal(threshold = 0.15) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold },
    )

    document.querySelectorAll('.reveal').forEach((el) => observer!.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
