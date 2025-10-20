import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover the Soul of Bhutan</h1>
        <p>Plan, explore, and book your journey with smart tools and local insights.</p>
      </div>
      <div className="hero-media">
        <Image src="/images/hero-bg.jpg" alt="Bhutan landscape" width={1200} height={600} priority />
      </div>
    </section>
  );
}
