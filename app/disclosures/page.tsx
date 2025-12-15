import type { Metadata } from 'next';
import Section from '../../components/Section';

export const metadata: Metadata = {
  title: 'Disclosures | Nashadow Credit & Funding Consulting',
  description:
    'Review Nashadow’s plain-language disclosures about advisory scope, privacy, and the absence of guaranteed credit or funding outcomes.',
  openGraph: {
    title: 'Disclosures | Nashadow Credit & Funding Consulting',
    description:
      'Understand Nashadow’s disclaimers on legal advice, financial guarantees, lender decisions, and privacy for your information.',
    url: 'https://www.nashadow.com/disclosures',
    type: 'article'
  }
};

const disclosures = [
  {
    title: 'No legal or financial advice',
    detail: 'Information provided by Nashadow is for educational and planning purposes. We are not attorneys or tax advisors.'
  },
  {
    title: 'No guarantees',
    detail: 'Credit outcomes and funding decisions are made by lenders and are influenced by market conditions. We do not guarantee approvals, timelines, or results.'
  },
  {
    title: 'Client responsibility',
    detail: 'You control your decisions and are responsible for actions taken using our guidance. We encourage consulting legal and financial professionals as needed.'
  },
  {
    title: 'Privacy',
    detail: 'We respect your privacy, request only necessary information, and do not sell personal data. When appropriate, we will use secure channels for sensitive documents.'
  }
];

export default function DisclosuresPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <Section
        title="Disclosures"
        description="Plain-language statements about what we do—and what we do not do."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {disclosures.map(item => (
            <div key={item.title} className="card-surface space-y-2">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-silver/80">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Questions about our approach?"
        description="We are happy to clarify any of these points and explain how they fit into your plan."
      >
        <div className="card-surface text-silver/80">
          This website is informational only. Engaging Nashadow does not replace legal, tax, or accounting advice. Results vary, and
          lenders or partners make their own decisions. We aim to provide preparation and transparency.
        </div>
      </Section>
    </div>
  );
}
