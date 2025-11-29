import { content } from "@/data/content";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define params type as a Promise
type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
    return content.categories.map((category) => ({
        id: category.id,
    }));
}

export default async function CategoryPage({ params }: { params: Params }) {
    const { id } = await params;
    const category = content.categories.find((c) => c.id === id);

    if (!category) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#fdfbf7] flex flex-col">
            <div className="container mx-auto px-4 py-12 flex-grow">
                <Link
                    href="/#catalog"
                    className="inline-flex items-center gap-2 text-[#436c3a] hover:text-[#2d4529] transition-colors mb-8 font-medium"
                >
                    <ArrowRight size={20} />
                    חזרה לקטלוג
                </Link>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="relative h-[40vh] md:h-[50vh] w-full">
                        <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <div className="p-8 md:p-12 text-white">
                                <h1 className="text-4xl md:text-6xl font-bold mb-2">{category.title}</h1>
                                <p className="text-xl md:text-2xl font-light opacity-90">{category.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold text-[#2d4529] mb-6">על הקטגוריה</h2>
                            <p className="text-lg leading-relaxed text-[#7b4332] whitespace-pre-line">
                                {category.longDescription}
                            </p>

                            <div className="mt-12 pt-8 border-t border-[#e6efe0] flex justify-center">
                                <Link
                                    href="/#contact" // Assuming we might add a contact section id later, or just back to home
                                    className="bg-[#2d4529] hover:bg-[#263923] text-white px-10 py-4 rounded-full text-xl font-bold transition-all shadow-lg hover:shadow-[#cddfc3]/50"
                                >
                                    מעוניין להזמין? צור קשר
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-[#263923] text-[#e6efe0] py-8 text-center text-sm">
                © {new Date().getFullYear()} הגן של תאיר. <Link href="/" className="underline hover:text-white">חזרה לדף הבית</Link>
            </footer>
        </main>
    );
}
