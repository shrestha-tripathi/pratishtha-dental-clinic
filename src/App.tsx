import { Helmet } from "react-helmet-async";
import { clinic } from "./data/clinic";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Trust } from "./components/Trust";
import { Gallery } from "./components/Gallery";
import { Visit } from "./components/Visit";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";

export default function App() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    description: clinic.tagline,
    image: `${window.location.origin}${import.meta.env.BASE_URL}dr-pratishtha.jpeg`,
    telephone: clinic.contact.primaryPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
      addressLocality: "Greater Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201009",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.rating.value,
      reviewCount: clinic.rating.count,
    },
    openingHoursSpecification: clinic.hours
      .filter((h) => !h.closed)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.open,
        closes: h.close,
      })),
  };

  return (
    <>
      <Helmet>
        <title>{clinic.name} · {clinic.doctor.name}, {clinic.doctor.qualifications}</title>
        <meta property="og:title" content={clinic.name} />
        <meta property="og:description" content={clinic.tagline} />
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Helmet>
      <Nav />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Trust />
        <Gallery />
        <Visit />
        <Faq />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
