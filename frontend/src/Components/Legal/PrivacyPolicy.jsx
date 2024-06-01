const PrivacyPolicy = () => {
  return (
    <section className="p-5 lg:px-36">
      <div className="flex flex-col lg:flex-row gap-10 my-20 ">
        <div className=" font-bold text-[24px] flex flex-col gap-5">
          <p>Introduction</p>
          <p>Information We Collect</p>
          <p>How We Use Your Information</p>
          <p>Sharing Your Information</p>
          <p>Data Security</p>
          <p>Your Rights</p>
          <p>International Data Transfers</p>
          <p>Children's Privacy</p>
          <p>Changes to This Privacy Policy</p>
        </div>
        <br />
        <div className="max-w-[900px]">
          <p className="text-[48px] font-bold">Privacy Policy</p>
          <p className="text-[24px] font-light">
          At Harry Photo, we are committed to protecting your privacy. We collect personal information such as your name, email address, payment details, and usage data to provide and enhance our services. This information helps us manage your account, process transactions, and improve your experience on our platform. We also use cookies and similar technologies to understand how you interact with our services, remember your preferences, and provide personalized content recommendations.
          </p>
          <p className="text-[24px] font-light">
          We take the security of your personal information seriously and implement appropriate measures to safeguard it from unauthorized access, alteration, disclosure, or destruction. We only share your data with trusted third-party service providers who assist us in delivering our services, and we ensure they comply with strict data protection standards. Your information may also be disclosed if required by law or in response to legal requests. You have the right to access, correct, or delete your personal information, and you can opt-out of receiving promotional communications from us at any time. For any questions or concerns about our privacy practices, please contact us at [contact@harryphoto.com].
          </p>
        </div>
      </div>
      <div className="py-40 mt-20 leading-tight">
        <p className="text-[48px] font-bold ">Content File</p>
        <ol className="text-[16px] font-light list-decimal ml-3">
          <li>
          Introduction
            <ul className="list-disc ml-3">
              <li>
              Welcome to Harry Photo! We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our digital content library services.
              </li>
            </ul>
          </li>
          <li>
          Information We Collect
            <ul className="list-disc ml-3">
              <li>
              Personal Information: When you register or use our services, we may collect personal information such as your name, email address, postal address, and payment information.
              </li>
              <li>
              Usage Data: We collect information about how you interact with our services, including your IP address, browser type, device information, access times, and pages viewed.
              </li>
              <li>
              Cookies and Similar Technologies: We use cookies and similar tracking technologies to enhance your experience on our site, remember your preferences, and gather usage statistics.
              </li>
            </ul>
          </li>
          <li>
          How We Use Your Information
            <ul className="list-disc ml-3">
              <li>
              Service Delivery: To provide, maintain, and improve our digital content library services, including processing transactions and managing your account.
              </li>
              <li>
              Communication: To send you updates, newsletters, promotional materials, and other information related to Harry Photo.
              </li>
              <li>
              Personalization: To personalize your experience and provide content recommendations based on your preferences.
              </li>
              <li>
              Legal Compliance: To comply with legal obligations, resolve disputes, and enforce our agreements
              </li>
            </ul>
          </li>
          <li>
          Sharing Your Information
            <ul className="list-disc ml-3">
              <li>
              Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and email delivery.
              </li>
              <li>
              Legal Requirements: We may disclose your information in response to legal processes, such as court orders or subpoenas, or to meet other legal requirements.
              </li>
              <li>Business Transfers: If Harry Photo is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>
          </li>
          <li>
          Data Security
            <ul className="list-disc ml-3">
              <li>
              We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure..
              </li>
            </ul>
          </li>
          <li>
          Your Rights
            <ul className="list-disc ml-3">
              <li>
              Access and Correction: You have the right to access the personal information we hold about you and request corrections if necessary.
              </li>
              <li>
              Deletion: You can request the deletion of your personal data, subject to certain legal exceptions.
              </li>
              <li>Opt-Out: You may opt-out of receiving promotional communications from us by following the unsubscribe instructions in those communications or by contacting us directly.</li>
            </ul>
          </li>
          <li>
          International Data Transfers
            <ul className="list-disc ml-3">
              <li>
              Your information may be transferred to and processed in countries outside of your own. We ensure that such transfers comply with applicable data protection laws and that your data is adequately protected
              </li>
            </ul>
          </li>
          <li>
          Children's Privacy
            <ul className="list-disc ml-3">
              <li>
              Harry Photo's services are not directed to children under the age of 13. We do not knowingly collect personal information from children under this age. If we become aware that we have collected such information, we will take steps to delete it.
              </li>
            </ul>
          </li>
          <li>
          Changes to This Privacy Policy
            <ul className="list-disc ml-3">
              <li>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new Privacy Policy on our website and updating the date at the top of this policy.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default PrivacyPolicy