import { content } from "@/data/content";
import { ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero_nursery.webp"
            alt="משתלת הגן של תאיר"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
            {content.hero.subtitle}
          </p>
          <a
            href="#catalog"
            className="bg-earth-800 hover:bg-earth-900 text-white px-8 py-3 rounded-full text-lg transition-colors duration-300 flex items-center gap-2 mx-auto w-fit shadow-lg"
          >
            {content.hero.cta}
            <ArrowLeft size={20} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="aspect-square bg-olive-200 rounded-2xl overflow-hidden relative shadow-xl">
              <Image
                src="/assets/about_hands.webp"
                alt="ידיים מטפלות בצמח"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <h2 className="text-4xl font-bold text-olive-800 mb-6">{content.about.title}</h2>
            <p className="text-lg leading-relaxed text-earth-800">
              {content.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="catalog" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-olive-800 mb-16">הקטגוריות שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.categories.map((category) => (
              <Link key={category.id} href={`/category/${category.id}`} className="group cursor-pointer block">
                <div className="aspect-[3/4] bg-olive-100 rounded-xl overflow-hidden mb-4 relative">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">{category.title}</h3>
                <p className="text-earth-700 text-sm">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-olive-900 text-olive-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">הגן של תאיר</h3>
              <p className="mb-4">משתלה ביתית וחמימה.</p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">צור קשר</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <MapPin size={20} className="text-earth-400" />
                  <span>{content.footer.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-earth-400" />
                  <a href={`tel:${content.footer.phone}`} className="hover:text-earth-300 transition-colors">
                    {content.footer.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-earth-400" />
                  <a href={`mailto:${content.footer.email}`} className="hover:text-earth-300 transition-colors">
                    {content.footer.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">שעות פעילות</h4>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-earth-400 mt-1" />
                <pre className="font-sans whitespace-pre-line">
                  {content.footer.hours}
                </pre>
              </div>
            </div>
          </div>

          <div className="border-t border-olive-800 mt-12 pt-8 text-center text-sm text-olive-400">
            © {new Date().getFullYear()} הגן של תאיר. כל הזכויות שמורות.
          </div>
        </div>
      </footer>
    </main>
  );
}
