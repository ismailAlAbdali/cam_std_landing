export default function LocationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">موقعنا</h2>
          <p className="text-lg text-gray-600">
            نرحب بزيارتكم في استوديو التصوير الخاص بنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890123!2d58.12345678901234!3d23.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzM0LjQiTiA1OMKwMDcnMzQuNCJF!5e0!3m2!1sen!2som!4v1234567890123!5m2!1sen!2som"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">ساعات العمل</h3>
              <p className="text-gray-600">السبت - الخميس: ٩ صباحاً - ٩ مساءً</p>
              <p className="text-gray-600">الجمعة: ٤ عصراً - ٩ مساءً</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">العنوان</h3>
              <p className="text-gray-600">
                شارع السلطان قابوس، مسقط، سلطنة عمان
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">للحجز والاستفسار</h3>
              <p className="text-gray-600">هاتف: 1234 5678 968+</p>
              <p className="text-gray-600">واتساب: 1234 5678 968+</p>
              <p className="text-gray-600">البريد: info@camstudio.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}