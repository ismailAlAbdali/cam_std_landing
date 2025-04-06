"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "أحمد محمد",
    role: "مصور رئيسي",
    experience: "١٢ سنة خبرة",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&h=800&q=80",
  },
  {
    name: "سارة علي",
    role: "مصورة حفلات",
    experience: "٨ سنوات خبرة",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&q=80",
  },
  {
    name: "محمد خالد",
    role: "مونتاج فيديو",
    experience: "١٠ سنوات خبرة",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&q=80",
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-[#73736b]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">فريقنا المحترف</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نفخر بفريقنا المتميز من المصورين المحترفين الذين يجمعون بين الخبرة والإبداع
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-1">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.experience}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}