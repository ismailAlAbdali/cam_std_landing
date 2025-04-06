import { Camera, Users, Clock, Heart } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "+1000",
    label: "عميل سعيد",
  },
  {
    icon: Clock,
    value: "+10",
    label: "سنوات خبرة",
  },
  {
    icon: Camera,
    value: "+500",
    label: "حفل زفاف",
  },
  {
    icon: Heart,
    value: "+10000",
    label: "ساعة تصوير",
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#030303] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}