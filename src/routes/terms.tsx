import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/terms')({
  component: TermsConditions,
});

function TermsConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container-edit py-16 md:py-24 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold uppercase mb-8 border-b-4 border-black pb-4">Terms & Conditions</h1>
        
        <div className="space-y-8 font-serif text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Acceptance of Terms</h2>
            <p>By accessing and using Capital Chronicle, you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Eligibility</h2>
            <p>You must be at least 18 years of age to use our website. By using our website and by agreeing to these terms and conditions you warrant and represent that you are at least 18 years of age.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Website Purpose</h2>
            <p>Capital Chronicle provides news, research, and analysis related to digital financial markets, technology, and digital assets. The content is intended for informational and educational purposes only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">User Responsibilities</h2>
            <p>You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Acceptable Use</h2>
            <p>You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent, or harmful.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Prohibited Activities</h2>
            <p>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website, or while using this website, is strictly prohibited unless given express written permission.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Intellectual Property</h2>
            <p>Unless otherwise stated, Capital Chronicle and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Accuracy of Information</h2>
            <p>While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">No Financial, Investment, Tax, or Legal Advice</h2>
            <p>The information provided on Capital Chronicle does not constitute investment advice, financial advice, trading advice, or any other sort of advice, and you should not treat any of the website's content as such. Capital Chronicle does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Cryptocurrency Risk Disclosure</h2>
            <p>Trading in cryptocurrencies carries a high level of risk, and may not be suitable for all investors. Before deciding to trade cryptocurrency you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">No Guarantee of Investment Returns</h2>
            <p>Past performance is not indicative of future results. We do not guarantee any investment returns based on the information provided on our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Limitation of Liability</h2>
            <p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Indemnification</h2>
            <p>You hereby indemnify to the fullest extent Capital Chronicle from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Third-Party Links</h2>
            <p>Through this website, you are able to link to other websites which are not under the control of Capital Chronicle. We have no control over the nature, content, and availability of those sites.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Privacy Policy Reference</h2>
            <p>Your use of the website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Suspension or Termination of Access</h2>
            <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Governing Law</h2>
            <p>These Terms will be governed by and interpreted in accordance with the laws of the United Kingdom, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the UK for the resolution of any disputes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Dispute Resolution</h2>
            <p>Any disputes arising out of or relating to these Terms & Conditions shall be resolved through binding arbitration, rather than in court, except that you may assert claims in small claims court if your claims qualify.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Severability</h2>
            <p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Changes to These Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us through our Enquiry page.</p>
          </section>

          <section>
            <p className="text-sm italic">Last Updated Date: June 18, 2026</p>
          </section>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t-4 border-black py-6 text-center font-sans font-bold uppercase text-xs mt-16">
        <p>© {new Date().getFullYear()} Capital Chronicle. Printed in the Digital Era.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
}
