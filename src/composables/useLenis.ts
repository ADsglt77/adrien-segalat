import { onUnmounted } from 'vue'
import Lenis from 'lenis'

type LenisState = {
  rafId: number | null
  lenis: Lenis | null
}

const state: LenisState = {
  rafId: null,
  lenis: null,
}

function loop(time: number): void {
  if (!state.lenis) return
  state.lenis.raf(time)
  state.rafId = requestAnimationFrame(loop)
}

export function useLenis() {
  const start = (): void => {
    if (state.lenis) return

    state.lenis = new Lenis({
      lerp: 0.06,
      smoothWheel: true,
    })

    state.rafId = requestAnimationFrame(loop)
  }

  const stop = (): void => {
    if (state.rafId !== null) {
      cancelAnimationFrame(state.rafId)
      state.rafId = null
    }
    if (state.lenis) {
      state.lenis.destroy()
      state.lenis = null
    }
  }

  onUnmounted(stop)

  return { start, stop }
}
