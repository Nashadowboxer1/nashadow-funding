import Section from '../../components/Section';
import CTABanner from '../../components/CTABanner';

export default function AboutPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <Section
        title="About Nashadow"
        description="Nashadow Credit & Funding Consulting was created to give founders and operators a calm place to understand their credit position, plan for funding, and make decisions with confidence."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-surface space-y-3">
            <h3 className="text-2xl font-semibold text-white">Our perspective</h3>
            <p className="text-silver/80">
              We believe responsible lending starts with honest preparation. We take time to understand your goals, the story
              behind your business, and the realities of your credit profile. Then we help you navigate options with discretion
              and clarity.
            </p>
            <p className="text-silver/80">
              The name “Nashadow” reflects our approach: we work beside you, often behind the scenes, making sure you feel
              supported without being pushed. Progress is measured, documented, and grounded in what lenders actually look for.
            </p>
          </div>
          <div className="card-surface space-y-3">
            <h3 className="text-2xl font-semibold text-white">Values that guide us</h3>
            <ul className="space-y-3 text-silver/80">
              <li>
                <span className="text-white">Integrity:</span> we provide clear context and avoid inflated promises.
              </li>
              <li>
                <span className="text-white">Discretion:</span> we protect your information and only share what is necessary for planning.
              </li>
              <li>
                <span className="text-white">Clarity:</span> we translate credit and funding expectations into plain language.
              </li>
              <li>
                <span className="text-white">Preparation:</span> we value documentation, timelines, and doing things the right way.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Growth without hype"
        description="We serve clients at different stages: new founders, established operators, and teams preparing for expansion. In every case, we center education and sustainable decisions."
      >
        <div className="card-surface space-y-3 text-silver/80">
          <p>
            Expect candid conversations, realistic timelines, and support that respects your pace. We will tell you what we
            cannot promise: we do not guarantee outcomes, and lenders make their own decisions. We will also tell you what we can
            do: help you present a stronger, well-documented story.
          </p>
          <p>
            Our commitment is to leave you better prepared, with a plan you understand and own. That preparation is what “Nashadow”
            stands for.
          </p>
        </div>
      </Section>

      <Section title="Ready to learn more?" description="Share your goals and we will respond within two business days.">
        <CTABanner
          title="Let’s discuss your funding and credit objectives"
          description="We will outline what a partnership could look like and confirm the next steps to get you prepared."
        />
      </Section>
    </div>
  );
}
