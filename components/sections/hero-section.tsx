"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MapIcon as WhatsappIcon } from "lucide-react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video 
        ref={videoRef} 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="https://your-video-url.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          نحول لحظاتك إلى ذكريات خالدة
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
          أكثر من ١٠ سنوات من الخبرة في تصوير أجمل لحظات حياتك
        </p>
        
        <div className="flex gap-4">
          <Button 
            size="lg"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white"
            onClick={() => window.open('https://wa.me/YOUR_NUMBER')}
          >
            <WhatsappIcon className="ml-2 h-5 w-5" />
            تواصل معنا على واتساب
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-black"
          >
            معرض أعمالنا
          </Button>
        </div>
      </div>
    </section>
  )
}