import { notFound } from "next/navigation";
import Image from "next/image";
import { engineeringServicesData } from "@/lib/engineering-services-data";

export default async function EngineerServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;

  const serviceData = engineeringServicesData[service];

  if (!serviceData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">

        {/* Header Section */}
        <div className="mb-10 border-b pb-6 text-center">
          <span className="text-[#1DA5FA] font-bold text-sm tracking-wider uppercase mb-3 block">
            Engineer Services
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 leading-tight">
            {serviceData.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-md">
          <Image
            src={serviceData.image}
            alt={serviceData.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="prose prose-lg prose-blue max-w-none text-gray-700 space-y-6">
          {serviceData.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed text-[17px]">
              {paragraph}
            </p>
          ))}

          <div className="mt-16 p-8 bg-[#0F1724] rounded-2xl text-center shadow-xl not-prose">
            <h3 className="text-white text-2xl font-bold mb-4">Ready to start your {serviceData.title} project?</h3>
            <p className="text-white/70 mb-8 text-base">Contact us today to discuss your requirements and get a personalized quote from our engineering experts.</p>
            <a href="/contact" className="inline-block bg-[#1DA5FA] text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
