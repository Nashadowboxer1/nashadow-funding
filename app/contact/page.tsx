import type { Metadata } from 'next';
import ContactForm from '../../components/ContactForm';
import Section from '../../components/Section';

export const metadata: Metadata = {
  title: 'Contact Nashadow | Credit & Funding Consulting',
  description:
    'Reach out to Nashadow to discuss credit analysis, funding readiness, or advisory support. Expect a response within two business days.',
  openGraph: {
    title: 'Contact Nashadow | Credit & Funding Consulting',
    description:
      'Share your objectives with Nashadow for thoughtful credit and funding consulting. Learn what happens after you submit the form.',
    url: 'https://www.nashadow.com/contact',
    type: 'article'
  }
};

export default function ContactPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <Section
        title="Contact Nashadow"
        description="Share your objectives and we will confirm the best next step. Expect a response within two business days."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <ContactForm />
          <div className="card-surface space-y-3 text-silver/80">
            <h3 className="text-2xl font-semibold text-white">What happens next</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo"></span>
                We review your message and share a short list of information to prepare for a conversation.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo"></span>
                We schedule a meeting to understand your goals, timeline, and comfort level.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo"></span>
                You receive an outline of options, risks, and estimated pacing. No guarantees—just preparation.
              </li>
            </ul>
            <p className="text-sm text-silver/70">
              Please avoid sending sensitive personal data through this form. We will share secure alternatives if needed.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
