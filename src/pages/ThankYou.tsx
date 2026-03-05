import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div>
      <section>
        <div className="section-container py-24 md:py-40 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            THANK YOU
          </h1>
          <div className="mt-8 max-w-xl mx-auto space-y-4 text-muted-foreground">
            <p>Thank you for reaching out.</p>
            <p>
              Your message has been received and we will review your inquiry shortly.
            </p>
            <p>
              If your request is urgent, please email us directly at:{" "}
              <a href="mailto:linsony@gmail.com" className="text-foreground font-medium underline">
                linsony@gmail.com
              </a>
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
