import Steps from '../../components/Steps';
import Section from '../../components/Section';
import CTABanner from '../../components/CTABanner';

const steps = [
  {
    title: 'Assessment',
    detail: 'We clarify your goals, gather relevant documents, and align on what “prepared” looks like for your situation.'
  },
  {
    title: 'Strategy Plan',
    detail: 'You receive a practical plan covering credit positioning, business profile readiness, and timelines.'
  },
  {
    title: 'Implementation Guidance',
    detail: 'We provide templates, checklists, and coaching. You remain the decision maker. No guaranteed approvals.'
  },
  {
    title: 'Ongoing Support',
    detail: 'We review progress together, adjust based on lender feedback, and keep communication clear.'
  }
];

export default function ProcessPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <Section
        title="How it works"
        description="A calm, transparent process that keeps you informed and in control."
      >
        <Steps steps={steps} />
      </Section>

      <Section
        title="What to expect"
        description="We do not promise approvals. We help you present a stronger case, understand lender expectations, and move at a pace that respects your business."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-surface space-y-2">
            <h3 className="text-xl font-semibold text-white">Communication</h3>
            <p className="text-silver/80">Regular check-ins with clear action items, timelines, and ownership.</p>
          </div>
          <div className="card-surface space-y-2">
            <h3 className="text-xl font-semibold text-white">Documentation</h3>
            <p className="text-silver/80">Support with gathering, organizing, and packaging documents for lender review.</p>
          </div>
          <div className="card-surface space-y-2">
            <h3 className="text-xl font-semibold text-white">Honesty</h3>
            <p className="text-silver/80">We provide disclaimers and surface risks so you can decide how to proceed.</p>
          </div>
        </div>
      </Section>

      <Section title="Discuss your timeline" description="Share your goals and constraints. We will recommend a starting point and next steps.">
        <CTABanner
          title="Begin with an assessment"
          description="A focused conversation to understand your objectives, documentation, and readiness."
        />
      </Section>
    </div>
  );
}
