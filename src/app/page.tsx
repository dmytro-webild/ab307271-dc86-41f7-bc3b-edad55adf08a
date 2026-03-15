"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Coffee, Heart, Utensils, MapPin, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="compact"
      sizing="medium"
      background="floatingGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="El Rincón de Ohana"
          navItems={[
            { name: "Inicio", id: "hero" },
            { name: "Sobre Nosotros", id: "about" },
            { name: "Menú", id: "features" },
            { name: "Reseñas", id: "testimonials" },
            { name: "Ubicación", id: "contact" }
          ]}
          button={{ text: "Llamar", href: "tel:+34928023208" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="☕ El Rincón de Ohana"
          description="Tu espacio acogedor en Tamaraceite para disfrutar de desayunos, brunch y meriendas. Café recién preparado, productos frescos y un trato cercano como en familia. 🌴"
          background={{ variant: "animated-grid" }}
          buttons={[
            { text: "Ver Menú", href: "#features" },
            { text: "Llamar: +34 928 02 32 08", href: "tel:+34928023208" }
          ]}
          buttonAnimation="slide-up"
          layoutOrder="default"
          imageSrc="http://img.b2bpic.net/free-photo/full-shot-friends-eating-restaurant_23-2150491786.jpg"
          imageAlt="Interior acogedor de El Rincón de Ohana"
          mediaAnimation="opacity"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Sobre Nosotros"
          tagIcon={Heart}
          tagAnimation="slide-up"
          title="Ohana significa Familia"
          description="En El Rincón de Ohana creemos que un buen café y un buen desayuno pueden cambiar el día de cualquiera. Nuestro local se caracteriza por su ambiente acogedor, productos frescos y atención cercana al cliente."
          subdescription="Muchos de nuestros clientes destacan la calidad de nuestras tostas y el sabor del café, convirtiéndonos en un punto habitual de encuentro en Tamaraceite. Desde el primer día los hacemos sentir como en casa."
          icon={Coffee}
          imageSrc="http://img.b2bpic.net/free-photo/man-pouring-tea-friend_23-2148422415.jpg"
          imageAlt="Ambiente familiar de El Rincón de Ohana"
          mediaAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNineteen
          tag="Nuestro Menú"
          tagIcon={Utensils}
          tagAnimation="slide-up"
          title="Especialidades de El Rincón de Ohana"
          description="Desde cafés artesanales hasta tostas caseras. Cada producto está cuidadosamente seleccionado para ofrecerte la mejor experiencia."
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "Estrella ⭐",              title: "Tosta de Aguacate con Jamón Ibérico",              subtitle: "Nuestro favorito",              description: "Pan tostado crujiente con aguacate fresco y jamón ibérico de calidad. Una combinación perfecta que enamorará tu paladar.",              imageSrc: "http://img.b2bpic.net/free-photo/plate-with-toast-sandwiches-table_23-2148454828.jpg",              imageAlt: "Tosta gourmet de aguacate y jamón"
            },
            {
              id: 2,
              tag: "Café ☕",              title: "Café Recién Preparado",              subtitle: "Especialidades barista",              description: "Espresso, cortado, café con leche, americano, capuccino, latte. Disponibles con leche sin lactosa y opciones vegetales (avena, soja, almendra).",              imageSrc: "http://img.b2bpic.net/free-photo/tasty-steamy-cup-coffee-with-wooden-table-coffee-shop-wooden-card-sculpture_1268-20256.jpg",              imageAlt: "Taza de café artesanal"
            },
            {
              id: 3,
              tag: "Repostería 🥐",              title: "Bollería y Dulces Frescos",              subtitle: "Hecho con cuidado",              description: "Croissants, napolitanas de chocolate, bizcochos caseros, tartas del día y galletas artesanales. Perfecto para acompañar tu café.",              imageSrc: "http://img.b2bpic.net/free-photo/baked-croissants-milk-closed-mason-jar-crumpled-sack-textile_23-2147972761.jpg",              imageAlt: "Croissant dorado y fresco"
            }
          ]}
          buttons={[{ text: "Reserva una Mesa", href: "tel:+34928023208" }]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Historias de Nuestros Clientes"
          description="Conoce lo que dicen quienes visitan regularmente El Rincón de Ohana."
          textboxLayout="default"
          useInvertedBackground={true}
          tag="Reseñas"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              title: "Lugar Excepcional",              quote: "Lugar acogedor, familiar y con un género y producto de alta calidad. Personal cualificado, atento y rápido harán de tu desayuno, brunch o merienda un espectáculo al paladar. Nos encanta pasar a por un simple y caliente café. Felicidades a todo el equipo.",              name: "Cliente Satisfecho",              role: "Local Guide",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-counter_1170-668.jpg",              imageAlt: "Cliente testimonial"
            },
            {
              id: "2",              title: "Tostas Deliciosas",              quote: "Cafetería con una carta aceptable en cuanto a variedad. Sirven buen café y las tostas están muy ricas.",              name: "Raquel",              role: "Cliente Regular",              imageSrc: "http://img.b2bpic.net/free-photo/people-leisure-lifestyle-concept-successful-young-man-black-hat-casual-t-shirt-having-coffee-sitting-sidewalk-restaurant_273609-1754.jpg",              imageAlt: "Raquel, cliente"
            },
            {
              id: "3",              title: "Como en Casa",              quote: "Soy clienta habitual de la cafetería El Rincón de Ohana y solo puedo decir cosas buenas. Desde el primer día me hicieron sentir como en casa, y eso es algo que no se encuentra en cualquier sitio. El trato es siempre cercano y amable.",              name: "Inmaculada",              role: "Cliente Frecuente",              imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-with-tablet-cafe_1157-32740.jpg",              imageAlt: "Inmaculada, cliente habitual"
            },
            {
              id: "4",              title: "Amor a Primera Vista",              quote: "La primera vez quedé enamorada de su tosta de aguacate y jamón ibérico. No está mal para desayunar si tienes tiempo.",              name: "Itamar Perto",              role: "Cliente",              imageSrc: "http://img.b2bpic.net/free-photo/cafe-staff_1098-15450.jpg",              imageAlt: "Itamar, cliente satisfecho"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Ubicación"
          title="Visítanos en Tamaraceite"
          description="Estamos en el corazón de Tamaraceite, Las Palmas de Gran Canaria. Un lugar perfecto para vecinos, trabajadores y cualquiera que busque un buen desayuno o café en un ambiente tranquilo."
          tagIcon={MapPin}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Tu email para consultas"
          buttonText="Enviar Consulta"
          termsText="Al contactarnos, aceptas que usemos tu información para responderte. Privacidad garantizada."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/view-world-travel-map-with-pins_23-2149460008.jpg"
          imageAlt="Ubicación de El Rincón de Ohana en Tamaraceite"
          logoText="El Rincón de Ohana ☕"
          copyrightText="© 2025 El Rincón de Ohana - Tamaraceite, Las Palmas de Gran Canaria"
          columns={[
            {
              title: "Información",              items: [
                { label: "Sobre Nosotros", href: "#about" },
                { label: "Menú", href: "#features" },
                { label: "Reseñas", href: "#testimonials" }
              ]
            },
            {
              title: "Contacto",              items: [
                { label: "Llamar: +34 928 02 32 08", href: "tel:+34928023208" },
                { label: "Calle Lucy Cabrera Suárez, 26", href: "#" },
                { label: "Tamaraceite, Las Palmas", href: "#" }
              ]
            },
            {
              title: "Horarios",              items: [
                { label: "Lunes-Viernes: 07:00-13:30, 16:30-20:30", href: "#" },
                { label: "Sábado: 08:00-13:30", href: "#" },
                { label: "Domingo: 08:00-13:30", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}