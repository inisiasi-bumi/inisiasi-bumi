import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function Page() {
  return (
    <Container>
      <div className="prose prose-lg mx-auto my-8">
        <SectionTitle>Privacy Policy</SectionTitle>
        
        <h3 className="text-xl font-semibold mt-6">Introduction</h3>
        <p className="mt-4">
          Welcome to Inisiasi Bumi. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy describes how we collect, use, and share your personal data when you use our services.
        </p>
        
        <h3 className="text-xl font-semibold mt-6">Information We Collect</h3>
        <p className="mt-4">We may collect the following types of information:</p>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Personal Information</strong>: Name, email address, phone number, and other contact details.</li>
          <li><strong>Usage Information</strong>: Data on how you interact with our app and services.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6">How We Use Your Information</h3>
        <p className="mt-4">Your information is used to:</p>
        <ul className="list-disc list-inside mt-4">
          <li>Deliver, operate, and maintain our services.</li>
          <li>Enhance and personalize your experience with our services.</li>
          <li>Analyze usage patterns to improve our offerings.</li>
          <li>Communicate with you, including for customer support and updates.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6">Data Sharing and Disclosure</h3>
        <p className="mt-4">We do not sell your personal information. We may share your data with third parties under the following circumstances:</p>
        <ul className="list-disc list-inside mt-4">
          <li>With service providers who perform services on our behalf.</li>
          <li>To comply with legal obligations or respond to lawful requests.</li>
          <li>To protect the rights and safety of Inisiasi Bumi and our users.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6">Data Security</h3>
        <p className="mt-4">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
        
        <h3 className="text-xl font-semibold mt-6">Your Rights</h3>
        <p className="mt-4">You have the right to:</p>
        <ul className="list-disc list-inside mt-4">
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your data under certain circumstances.</li>
          <li>Object to or restrict our processing of your data.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6">Contact Us</h3>
        <p className="mt-4">If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
        <p className="mt-2"><strong>Inisiasi Bumi</strong><br />Email: <a href="mailto:info@ibumi.com" className="text-blue-600 underline">info@ibumi.com</a></p>
        
        <h3 className="text-xl font-semibold mt-6">Changes to This Privacy Policy</h3>
        <p className="mt-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our app and website. Your continued use of our services after any changes indicates your acceptance of the new terms.</p>
      </div>
    </Container>
  );
}
