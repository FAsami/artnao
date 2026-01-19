'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const LottieContainer = ({ path }: { path: string }) => {
  return <DotLottieReact color="#a3e2f0" src={path} speed={0.5} loop autoplay />
}

export { LottieContainer }
