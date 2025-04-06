"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const categories = [
  { id: "all", name: "جميع الأعمال" },
  { id: "wedding", name: "أعراس" },
  { id: "engagement", name: "خطوبة" },
  { id: "events", name: "مناسبات" },
]

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=800&q=80",
    alt: "صورة عروسين في يوم زفافهما",
    category: "wedding",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=800&q=80",
    alt: "لحظة خطوبة رومانسية",
    category: "engagement",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&q=80",
    alt: "حفل زفاف في قاعة فاخرة",
    category: "wedding",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=800&q=80",
    alt: "حفل تخرج",
    category: "events",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=800&q=80",
    alt: "جلسة تصوير خطوبة",
    category: "engagement",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=800&q=80",
    alt: "حفل زفاف على الشاطئ",
    category: "wedding",
  },
]

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null)

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">معرض أعمالنا</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نفخر بتقديم مجموعة من أفضل أعمالنا التي توثق أجمل اللحظات في حياة عملائنا
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="text-lg"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedImage(image)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 left-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative max-w-5xl w-full h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 px-4 py-2 rounded-full">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}