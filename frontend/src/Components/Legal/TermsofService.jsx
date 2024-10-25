const TermsofService = () => {
  return (
    <section className="p-5 lg:px-36">
      <div className="flex flex-col lg:flex-row gap-10 my-20 ">
        <div className=" font-bold text-[24px] flex flex-col gap-5">
          <p>Use of Services</p>
          <p>Content</p>
          <p>Privacy</p>
          <p>Intellectual Property</p>
          <p>Termination</p>
          <p>Disclaimers</p>
          <p>Limitation of Liability</p>
          <p>Governing Law</p>
          <p>Changes to Terms</p>
          <p>Contact Information</p>
        </div>
        <br />
        <div className="max-w-[900px]">
          <p className="text-[48px] font-bold">Terms of Service</p>
          <p className="text-[24px] font-light">
          Welcome to [Company Name]! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to these Terms.
          </p>
          <p className="text-[24px] font-light">
          By accessing and using Harry Photo, you agree to comply with and be bound by these Terms of Use. You must be at least 18 years old to use our services. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree not to use Harry Photo for any unlawful or prohibited activities, including but not limited to, infringing on intellectual property rights or distributing harmful content. We reserve the right to modify or terminate our services or your access to our services at any time, with or without notice, for any reason, including if you violate these Terms. Your continued use of Harry Photo after any changes to these Terms constitutes your acceptance of the new terms.
          </p>
        </div>
      </div>
      <div className="py-40 mt-20 leading-tight">
      <p className="text-[48px] font-bold">Content File</p>
        <ol className="text-[16px] font-light list-decimal ml-3 mt-10">
          <li>
            User Accounts
            <ul className="list-disc ml-3">
              <li>
              Registration: You may need to create an account to access certain features.
              </li>
              <li>
              Responsibilities: You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
              </li>
            </ul>
          </li>
          <li>
          Use of Services
            <ul className="list-disc ml-3">
              <li>
              Eligibility: You must be at least [age] years old to use our services.
              </li>
              <li>
              Acceptable Use: You agree not to misuse our services or help anyone else to do so. This includes, but is not limited to, engaging in illegal activities, spamming, or infringing on intellectual property rights.
              </li>
            </ul>
          </li>
          <li>
          Content
            <ul className="list-disc ml-3">
              <li>
              Your Content: You retain ownership of your content but grant us a license to use, display, and distribute it on our platform.
              </li>
              <li>
              Prohibited Content: Do not post content that is unlawful, offensive, or violates the rights of others.
              </li>
            </ul>
          </li>
          <li>
          Privacy
            <ul className="list-disc ml-3">
              <li>
              Our Privacy Policy explains how we collect, use, and protect your information.
              </li>
            </ul>
          </li>
          <li>
          Intellectual Property
            <ul className="list-disc ml-3">
              <li>
              Ownership: All content provided by us, including text, graphics, and software, is owned by or licensed to [Company Name].
              </li>
              <li>Restrictions: You may not use our content for commercial purposes without our permission.</li>
            </ul>
          </li>
          <li>
          Termination
            <ul className="list-disc ml-3">
              <li>
              We may suspend or terminate your access to our services if you violate these Terms or engage in prohibited activities.
              </li>
            </ul>
          </li>
          <li>
          Disclaimers
            <ul className="list-disc ml-3">
              <li>
              Our services are provided "as is" without warranties of any kind. We do not guarantee that our services will be secure or error-free.
              </li>
            </ul>
          </li>
          <li>
          Limitation of Liability
            <ul className="list-disc ml-3">
              <li>
              [Company Name] will not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
              </li>
            </ul>
          </li>
          <li>
          Governing Law
            <ul className="list-disc ml-3">
              <li>
              These Terms are governed by the laws of [State/Country]. Any disputes will be resolved in the courts of [State/Country].
              </li>
            </ul>
          </li>
          <li>
          Changes to Terms
            <ul className="list-disc ml-3">
              <li>
              We may update these Terms from time to time. We will notify you of any significant changes by posting the new Terms on our website.
              </li>
            </ul>
          </li>
          <li>
          Contact Information
            <ul className="list-disc ml-3">
              <li>
              If you have any questions about these Terms, please contact us at [email address]
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default TermsofService;
