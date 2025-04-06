"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapIcon as WhatsappIcon, Mail, Phone } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Redirect to WhatsApp
    window.open(`https://wa.me/YOUR_NUMBER?text=مرحباً، أنا ${formData.name}. ${formData.message}`)
  }

  return (
    <section className="py-20 bg-[#030303] text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-lg text-gray-300">
              نحن هنا لمساعدتك في توثيق لحظاتك الخاصة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">معلومات التواصل</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 ml-4" />
                  <div>
                    <p className="font-medium">اتصل بنا</p>
                    <p className="text-gray-300">+968 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 ml-4" />
                  <div>
                    <p className="font-medium">البريد الإلكتروني</p>
                    <p className="text-gray-300">info@camstudio.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <WhatsappIcon className="h-6 w-6 ml-4" />
                  <div>
                    <p className="font-medium">واتساب</p>
                    <p className="text-gray-300">+968 1234 5678</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="الاسم"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Input
                placeholder="رقم الهاتف"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Input
                placeholder="البريد الإلكتروني"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Input
                placeholder="نوع الخدمة المطلوبة"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Textarea
                placeholder="رسالتك"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E]">
                <WhatsappIcon className="ml-2 h-5 w-5" />
                تواصل معنا على واتساب
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}