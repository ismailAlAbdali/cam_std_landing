import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#030303] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">كام ستوديو</h3>
            <p className="text-gray-300">
              نحول لحظاتك إلى ذكريات خالدة
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2 text-gray-300">
              <li>تصوير الأعراس</li>
              <li>جلسات التصوير</li>
              <li>تصوير المناسبات</li>
              <li>مونتاج الفيديو</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-gray-300">
              <li>من نحن</li>
              <li>معرض الأعمال</li>
              <li>الأسعار</li>
              <li>اتصل بنا</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} كام ستوديو. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  )
}