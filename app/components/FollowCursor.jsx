"use client"

import { motion, useSpring, useMotionValue } from "framer-motion"
import { useEffect } from "react"

export default function FollowCursor() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  })
  const smoothY = useSpring(mouseY, {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  })

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 12) // center the dot
      mouseY.set(e.clientY - 12)
    }

    window.addEventListener("pointermove", move)
    return () => window.removeEventListener("pointermove", move)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-fuchsia-500 pointer-events-none z-50 mix-blend-difference"
      style={{ x: smoothX, y: smoothY }}
    />
  )
}
