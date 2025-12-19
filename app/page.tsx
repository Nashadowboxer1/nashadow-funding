import type { Metadata } from 'next';
import CTABanner from '../components/CTABanner';
import Card from '../components/Card';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Steps from '../components/Steps';

export const metadata: Metadata = {
  title: 'Nashadow Credit & Funding Consulting | Home',
  description:
    'Calm, process-focused guidance for credit analysis, funding readiness, and ongoing advisory support. Learn what Nashadow offers and how we collaborate.',
  openGraph: {
    title: 'Nashadow Credit & Funding Consulting | Home',
    description:
      'Discover Nashadow’s structured approach to credit preparation, business credit structuring, and funding readiness with clear steps and inclusive guidance.',
    url: 'https://www.nashadow.com/',
    type: 'website'
  }
};

const services = [
  {
    title: 'Credit Analysis & Assessment',
    description: 'We review credit reports, scoring factors, and documentation to clarify your starting point and lender perceptions.'
  },
  {
    title: 'Credit Correction Strategy',
    description: 'Process-focused plans for disputes, updates, and good-faith corrections. No shortcuts and no guaranteed outcomes.'
  },
  {
    title: 'Business Credit Structuring',
    description: 'Foundational setup for EIN, entity, trade lines, and compliance signals that influence lender reviews.'
  }
];

const extendedServices = [
  {
    title: 'Funding Readiness Roadmap',
    description: 'Sequenced actions, documentation, and timing that position you for responsible lender conversations.',
    details: 'Includes preparation guidance, packaging expectations, and a candid view of risks and variables.'
  },
  {
    title: 'Ongoing Advisory Support',
    description: 'Standing by as you implement, with periodic check-ins, documentation reviews, and practical coaching.',
    details: 'We collaborate quietly in the background. You stay in control of decisions and pacing.'
  },
  {
    title: 'Education & Workshops',
    description: 'Private sessions for teams that want a shared understanding of credit readiness and funding pathways.',
    details: 'Useful for founders, operators, and advisors who need to align around responsible preparation.'
  }
];

const steps = [
  {
    title: 'Assessment',
    detail: 'We listen, review your goals, and collect the right documents to understand your current profile.'
  },
  {
    title: 'Strategy Plan',
    detail: 'We outline a realistic plan covering credit positioning, business profile readiness, and timelines.'
  },
  {
    title: 'Implementation Guidance',
    detail: 'You stay in control while we provide checklists, templates, and coaching. No guaranteed approvals.'
  },
  {
    title: 'Ongoing Support',
    detail: 'Periodic reviews, adjustments, and accountability to keep progress measured and transparent.'
  }
];

const trustPoints = [
  {
    title: 'Transparent communication',
    description: 'Clear explanations, candid timelines, and careful documentation. We avoid hype and unrealistic claims.'
  },
  {
    title: 'Privacy-minded',
    description: 'We treat your information with discretion and only request what is necessary to support planning.'
  },
  {
    title: 'Education first',
    description: 'We ensure you understand the “why” behind every step so you can make informed decisions with confidence.'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <Hero />

      <Section
        id="what-we-do"
        eyebrow="Overview"
        title="What we do"
        description="We help business owners prepare for lender conversations with calm, structured guidance and realistic expectations."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(service => (
            <Card key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="Services"
        title="Practical services built around preparation"
        description="Each engagement is tailored to your timeline and comfort level. We focus on repeatable steps that reduce friction for lenders while protecting your time."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {extendedServices.map(service => (
            <Card key={service.title} title={service.title} description={service.description}>
              {service.details}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="process"
        eyebrow="How it works"
        title="Structure that reduces uncertainty"
        description="We collaborate in clear phases so you always know what is happening and what decisions are yours."
      >
        <Steps steps={steps} />
      </Section>

      <Section
        id="trust"
        eyebrow="Why clients choose us"
        title="Calm, discreet, and grounded in reality"
        description="We care about sustainable financial positioning. There are no instant approvals here—only thoughtful preparation and support."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {trustPoints.map(point => (
            <Card key={point.title} title={point.title} description={point.description} />
          ))}
        </div>
      </Section>

      <Section id="cta" title="Ready to talk?" description="Share your goals and we will respond within two business days.">
        <CTABanner
          title="Let’s map your next credit and funding steps"
          description="We help you see the full picture, organize documentation, and prepare for conversations with lenders."
          primaryLabel="Start a consultation"
          primaryHref="/contact"
          secondaryLabel="Review our approach"
          secondaryHref="/process"
        />
      </Section>
    </div>
  );
}
