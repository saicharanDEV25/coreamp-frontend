import "./HowWeWork.css";

const steps = [
  {
    number: "01",
    label: "Project discussion",
    title: "Share Your Requirement",
    text:
      "Tell us about your project, location, current stage and the engineering support required.",
  },
  {
    number: "02",
    label: "Scope planning",
    title: "Scope & Planning",
    text:
      "We review the requirement and define the technical scope, deliverables and timeline.",
  },
  {
    number: "03",
    label: "Engineering",
    title: "Design & Coordinate",
    text:
      "Our team develops the engineering solution and coordinates every important system interface.",
  },
  {
    number: "04",
    label: "Final delivery",
    title: "Review & Deliver",
    text:
      "Calculations, drawings and schedules are reviewed before the coordinated final delivery.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="how-we-work"
      aria-labelledby="how-we-work-heading"
    >
      <div className="container how-we-work-inner">
        <div className="how-we-work-heading">
          <div>
            <span className="how-we-work-kicker">
              How we work
            </span>

            <h2 id="how-we-work-heading">
              From requirement to
              <em>engineering delivery.</em>
            </h2>
          </div>

          <div className="how-we-work-intro">
            <p>
              A simple, transparent and coordinated process
              designed to move every project forward with clarity.
            </p>

            <span>
              Clear process. Reliable delivery.
            </span>
          </div>
        </div>

        <ol className="how-we-work-list">
          {steps.map((step) => (
            <li key={step.number}>
              <div className="how-we-work-step-header">
                <span className="how-we-work-number">
                  {step.number}
                </span>
              </div>

              <span className="how-we-work-label">
                {step.label}
              </span>

              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}