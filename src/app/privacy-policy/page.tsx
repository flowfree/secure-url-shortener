import { Header, Footer } from '../components'

export default function Page() {
  return (
    <>
      <Header />

      <div className="max-w-3xl mt-12 mx-auto text-base leading-7">
        <h1 className="text-3xl font-bold tracking-tight text-center">
          Privacy Policy
        </h1>
        <p className="mt-8">
          Thank you for using our URL shortener service. This Privacy Policy outlines how we collect, use, and protect the information you provide to us when using our service. By accessing or using our service, you consent to the terms and practices described in this policy.
        </p>
        <ol className="mt-8 list list-decimal list-outside">
          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Information We Collect</p>
            <p>When you use our URL shortener service, we may collect the following types of information:</p>
            <ul className="mt-2 list-disc list-outside">
              <li className="ml-8 pl-4 mt-2">
                Personal Information: We may collect personal information such as your name, email address, and other contact details when you create an account or contact us for support.
              </li>
              <li className="ml-8 pl-4 mt-2">
                Usage Information: We may collect information about how you use our service, including the URLs you shorten, the IP address of your device, browser type, operating system, and other technical information.
              </li>
            </ul>
          </li>

          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Use of Collected Information</p>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="mt-2 list-disc list-outside">
              <li className="ml-8 pl-4 mt-2">
                To Provide and Improve our Service: We use the information to operate, maintain, and improve our service, as well as to personalize your experience and provide customer support.
              </li>
              <li className="ml-8 pl-4 mt-2">
                To Communicate: We may use your email address to send you service-related announcements, updates, and promotional messages. You can opt-out of receiving promotional messages by following the instructions provided in the email.
              </li>
              <li className="ml-8 pl-4 mt-2">
                To Protect Our Rights: We may use your information to investigate, prevent, or take action regarding any illegal activities, violations of our terms of use, or as required by law.
              </li>
            </ul>
          </li>

          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Information Sharing</p>
            <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
            <ul className="mt-2 list-disc list-outside">
              <li className="ml-8 pl-4 mt-2">
                Service Providers: We may share your information with trusted third-party service providers who assist us in operating our service, such as hosting providers, analytics providers, and customer support.
              </li>
              <li className="ml-8 pl-4 mt-2">
                Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders or government agencies).
              </li>
              <li className="ml-8 pl-4 mt-2">
                Business Transfers: In the event of a merger, acquisition, or sale of our company, your information may be transferred to the acquiring entity as part of the transaction.
              </li>
            </ul>
          </li>

          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Data Security</p>
            <p>We take reasonable measures to protect the information you provide to us from unauthorized access, loss, misuse, or alteration. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.</p>
          </li>

          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Third-Party Links</p>
            <p>Our service may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party websites. We encourage you to review the privacy policies of those websites before providing any personal information.</p>
          </li>

          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Children's Privacy</p>
            <p>Our service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will promptly delete such information from our records.</p>
          </li>

          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Changes to Privacy Policy</p>
            <p>We reserve the right to modify or update this Privacy Policy at any time. Any changes to this policy will be posted on our website with the updated effective date. Your continued use of our service after any modifications to this policy constitutes your acceptance of the revised Privacy Policy.</p>
          </li>
        </ol>

        <p className="mt-8">
          If you have any questions or concerns regarding this Privacy Policy or our data practices, please <a href="https://www.nashruddinamin.com/contact" className="text-indigo-600 hover:underline" target="_blank">contact us</a>.
        </p>

      </div>

      <Footer />
    </>
  )
}
