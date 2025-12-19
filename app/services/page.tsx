import type { Metadata } from 'next';
import Card from '../../components/Card';
import CTABanner from '../../components/CTABanner';
import Section from '../../components/Section';

export const metadata: Metadata = {
  title: 'Services | Nashadow Credit & Funding Consulting',
  description:
    'Explore Nashadow services: credit analysis, correction strategy, business credit structuring, funding readiness, and ongoing advisory support.',
  openGraph: {
    title: 'Services | Nashadow Credit & Funding Consulting',
    description:
      'What to expect from Nashadow services across credit analysis, correction strategies, business structuring, and ongoing advisory support.',
    url: 'https://www.nashadow.com/services',
    type: 'article'
  }
};

const services = [
  {
    title: 'Credit Analysis & Assessment',
    description: 'Detailed review of personal and business credit profiles, with plain-language findings.',
    bullets: [
      'Report review, scoring factors, and documentation check',
      'Guidance on addressing inaccuracies or weak spots',
      'Clear list of items lenders may request'
    ]
  },
  {
    title: 'Credit Correction Strategy',
    description: 'Process-focused improvement plans. No shortcuts, no guaranteed outcomes.',
    bullets: [
      'Dispute sequencing and supporting documentation',
      'Monitoring cadence and expected timelines',
      'Coaching on responsible credit behaviors'
    ]
  },
  {
    title: 'Business Credit Structuring',
    description: 'Foundational setup for lender readiness and vendor relationships.',
    bullets: [
      'Entity, EIN, and compliance checkpoints',
      'Starter vendor and trade line strategy',
      'Professional presence: addresses, banking, and controls'
    ]
  },
  {
    title: 'Funding Readiness Roadmap',
    description: 'A practical plan to present your business to lenders.',
    bullets: [
      'Packaging guidance for financials and narratives',
      'Sequence of actions aligned to your timeline',
      'Plain-language risks, assumptions, and contingencies'
    ]
  },
  {
    title: 'Ongoing Advisory Support',
    description: 'Stay supported as you implement, with periodic check-ins and course corrections.',
    bullets: [
      'Scheduled reviews and milestone tracking',
      'Document and application readiness checks',
      'Flexible cadence that matches your pace'
    ]
  },
  {
    title: 'Education & Workshops',
    description: 'Team sessions that demystify credit, funding, and lender expectations.',
    bullets: [
      'Custom agendas for founders, operators, or advisors',
      'Templates and checklists you can reuse',
      'Time for Q&A without sales pressure'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <Section
        title="Services"
        description="Every service is centered on preparation, documentation, and responsible next steps."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(service => (
            <Card key={service.title} title={service.title} description={service.description}>
              <ul className="mt-3 space-y-2">
                {service.bullets.map(point => (
                  <li key={point} className="flex gap-2 text-silver/80">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Who we serve"
        description="Founders, operators, and teams who value transparency and preparation over shortcuts."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="New founders"
            description="Building a compliant foundation, understanding credit signals, and preparing to speak with vendors and banks."
          />
          <Card
            title="Growing operators"
            description="Clarifying funding options, organizing documentation, and planning moves that respect cash flow."
          />
          <Card
            title="Advisors & teams"
            description="Aligning stakeholders on responsible credit practices and realistic timelines for capital readiness."
          />
        </div>
      </Section>

      <Section title="Explore next steps" description="We will help you prioritize actions that fit your goals and comfort level.">
        <CTABanner
          title="Schedule a consultation"
          description="Share where you are today and what you want to accomplish. We will propose a plan with clear expectations."
        />
      </Section>
    </div>
  );
}
