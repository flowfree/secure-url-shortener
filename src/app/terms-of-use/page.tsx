import { Header, Footer } from '../components'

export default function Page() {
  return (
    <>
      <Header />

      <div className="max-w-3xl mt-12 mx-auto text-base leading-7">
        <h1 className="text-3xl font-bold tracking-tight text-center">
          Terms of Use
        </h1>
        <p className="mt-8">
          Welcome to our URL shortener service! These Terms of Use ("Terms") govern your use of our website and any services offered through it. By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
        </p>
        <ol className="mt-8 list list-decimal list-outside">
          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Acceptance of Terms</p>
            <p>By accessing or using our URL shortener service, you acknowledge that you have read, understood, and agree to comply with these Terms of Use. If you do not agree with any part of these terms, please do not use our service.</p>
          </li>
          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Description of Service</p>
            <p>Our URL shortener service allows users to shorten long URLs into shorter and manageable links. These shortened links can be shared and directed to the original long URL.</p>
          </li>
          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">User Conduct</p>
            <p>You agree to use our service solely for lawful purposes and in a manner that does not violate any applicable laws or regulations. You must not use our service to transmit any content that is illegal, harmful, harassing, defamatory, obscene, or infringing on intellectual property rights.</p>
          </li>
          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Account Creation</p>
            <p>To use certain features of our service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to accept responsibility for all activities that occur under your account.</p>
          </li>
          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Intellectual Property</p>
            <p>All intellectual property rights, including copyrights, trademarks, and patents, associated with our service are owned by us or our licensors. You may not copy, reproduce, modify, distribute, or create derivative works of any part of our service without prior written consent.</p>
          </li>
          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Links to Third-Party Websites</p>
            <p>Our service may contain links to third-party websites or services that are not owned or controlled by us. We do not assume any responsibility for the content, privacy policies, or practices of these third-party websites. You acknowledge and agree that we shall not be liable for any loss or damage caused by your use of any third-party websites.</p>
          </li>
          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Limitation of Liability</p>
            <p>In no event shall we or our affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our service, whether based on contract, tort, strict liability, or otherwise, even if we have been advised of the possibility of such damages.</p>
          </li>
          <li className="ml-8 pl-4 mt-4">
            <p className="font-bold">Changes to Terms of Use</p>
            <p>We reserve the right to modify or update these Terms of Use at any time without prior notice. It is your responsibility to review these terms periodically for any changes. Your continued use of our service after any modifications to these terms constitutes your acceptance of the revised terms.</p>
          </li>
        </ol>
        <p className="mt-8">
          If you have any questions or concerns regarding these Terms of Use, please <a href="https://www.nashruddinamin.com/contact" className="text-indigo-600 hover:underline" target="_blank">contact us</a>.
        </p>
      </div>

      <Footer />
    </>
  )
}
