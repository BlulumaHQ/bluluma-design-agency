import { Link } from "react-router-dom";

const Dentist = () => (
  <div>
    <section className="section-dark section-border">
      <div className="section-container py-24 md:py-32 text-center">
        <span className="text-xs uppercase tracking-widest text-primary font-semibold">
          For Dentists
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
          Dental practice websites — coming soon.
        </h1>
        <p
          className="mt-6 max-w-xl mx-auto text-lg leading-relaxed"
          style={{ color: "hsl(220 10% 65%)" }}
        >
          Conversion-focused websites for dental practices. We're preparing a
          dedicated landing experience — in the meantime, talk to our team.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="cta-solid px-8 py-4 text-base font-semibold rounded-lg"
          >
            Talk to Bluluma
          </Link>
          <Link
            to="/insights/dentist"
            className="px-8 py-4 text-base font-semibold rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
          >
            Read Dental Insights
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Dentist;
