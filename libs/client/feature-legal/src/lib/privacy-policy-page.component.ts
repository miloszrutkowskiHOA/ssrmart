import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ssrmart-privacy-policy-page',
  template: `
    @defer (hydrate never) {
    <div class="mb-8">
      <h1>Privacy Policy</h1>
      <p class="text-gray-600">
        Last updated: {{ currentDate | date : 'longDate' }}
      </p>
    </div>

    <div class="prose prose-lg max-w-none">
      <section class="mb-8">
        <h2>1. Introduction</h2>
        <p class="text-gray-700 mb-4 leading-7">
          Welcome to SSRMart ("we," "our," or "us"). We are committed to
          protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website or
          use our services.
        </p>
        <p class="text-gray-700 leading-7">
          By using our website, you consent to the data practices described in
          this policy.
        </p>
      </section>

      <section class="mb-8">
        <h2>2. Information We Collect</h2>

        <h3>2.1 Personal Information</h3>
        <p class="text-gray-700 mb-4 leading-7">
          We may collect personal information that you voluntarily provide to
          us, including:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li class="mb-2 leading-6">
            Name and contact information (email address, phone number)
          </li>
          <li class="mb-2 leading-6">Billing and shipping addresses</li>
          <li class="mb-2 leading-6">Payment information</li>
          <li class="mb-2 leading-6">Account credentials</li>
          <li class="mb-2 leading-6">Communication preferences</li>
        </ul>

        <h3>2.2 Automatically Collected Information</h3>
        <p class="text-gray-700 mb-4 leading-7">
          When you visit our website, we automatically collect certain
          information, including:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li class="mb-2 leading-6">IP address and device information</li>
          <li class="mb-2 leading-6">Browser type and version</li>
          <li class="mb-2 leading-6">Operating system</li>
          <li class="mb-2 leading-6">Pages visited and time spent on pages</li>
          <li class="mb-2 leading-6">Referring website</li>
          <li class="mb-2 leading-6">
            Cookies and similar tracking technologies
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2>3. How We Use Your Information</h2>
        <p class="text-gray-700 mb-4 leading-7">
          We use the information we collect for various purposes, including:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li class="mb-2 leading-6">Providing and maintaining our services</li>
          <li class="mb-2 leading-6">Processing transactions and orders</li>
          <li class="mb-2 leading-6">
            Communicating with you about your account or orders
          </li>
          <li class="mb-2 leading-6">
            Sending marketing communications (with your consent)
          </li>
          <li class="mb-2 leading-6">Improving our website and services</li>
          <li class="mb-2 leading-6">Analyzing usage patterns and trends</li>
          <li class="mb-2 leading-6">Preventing fraud and ensuring security</li>
          <li class="mb-2 leading-6">Complying with legal obligations</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2>4. Information Sharing and Disclosure</h2>
        <p class="text-gray-700 mb-4 leading-7">
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except in the following
          circumstances:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Service Providers:</span>
            We may share information with trusted third-party service providers
            who assist us in operating our website and providing services
          </li>
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Legal Requirements:</span>
            We may disclose information when required by law or to protect our
            rights and safety
          </li>
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Business Transfers:</span>
            In the event of a merger, acquisition, or sale of assets, your
            information may be transferred
          </li>
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Consent:</span> We may
            share information with your explicit consent
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2>5. Cookies and Tracking Technologies</h2>
        <p class="text-gray-700 mb-4 leading-7">
          We use cookies and similar tracking technologies to enhance your
          browsing experience and analyze website traffic. You can control
          cookie settings through your browser preferences.
        </p>
        <p class="text-gray-700 mb-4">Types of cookies we use:</p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Essential Cookies:</span>
            Required for basic website functionality
          </li>
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Analytics Cookies:</span>
            Help us understand how visitors use our website
          </li>
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Marketing Cookies:</span>
            Used to deliver relevant advertisements
          </li>
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Preference Cookies:</span>
            Remember your settings and preferences
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2>6. Data Security</h2>
        <p class="text-gray-700 mb-4 leading-7">
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access,
          alteration, disclosure, or destruction. However, no method of
          transmission over the internet is 100% secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      <section class="mb-8">
        <h2>7. Your Rights and Choices</h2>
        <p class="text-gray-700 mb-4 leading-7">
          You have certain rights regarding your personal information:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Access:</span> Request
            access to your personal information
          </li>
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Correction:</span>
            Request correction of inaccurate information
          </li>
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Deletion:</span> Request
            deletion of your personal information
          </li>
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Portability:</span>
            Request a copy of your data in a portable format
          </li>
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Opt-out:</span>
            Unsubscribe from marketing communications
          </li>
          <li class="mb-2 leading-6">
            <span class="font-semibold text-gray-800">Restriction:</span>
            Request restriction of processing
          </li>
        </ul>
        <p class="text-gray-700 leading-7">
          To exercise these rights, please contact us using the information
          provided below.
        </p>
      </section>

      <section class="mb-8">
        <h2>8. Children's Privacy</h2>
        <p class="text-gray-700 mb-4 leading-7">
          Our website is not intended for children under the age of 13. We do
          not knowingly collect personal information from children under 13. If
          you believe we have collected information from a child under 13,
          please contact us immediately.
        </p>
      </section>

      <section class="mb-8">
        <h2>9. International Data Transfers</h2>
        <p class="text-gray-700 mb-4 leading-7">
          Your information may be transferred to and processed in countries
          other than your own. We ensure that such transfers comply with
          applicable data protection laws and implement appropriate safeguards.
        </p>
      </section>

      <section class="mb-8">
        <h2>10. Changes to This Privacy Policy</h2>
        <p class="text-gray-700 mb-4 leading-7">
          We may update this Privacy Policy from time to time. We will notify
          you of any material changes by posting the new policy on this page and
          updating the "Last updated" date. We encourage you to review this
          policy periodically.
        </p>
      </section>

      <section class="mb-8">
        <h2>11. Contact Us</h2>
        <p class="text-gray-700 mb-4 leading-7">
          If you have any questions about this Privacy Policy or our data
          practices, please contact us:
        </p>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2">
            <span class="font-semibold text-gray-800">Email:</span>
            privacy&#64;ssrmart.com
          </p>
          <p class="text-gray-700 mb-2">
            <span class="font-semibold text-gray-800">Phone:</span> +1 (555)
            123-4567
          </p>
          <p class="text-gray-700 mb-2">
            <span class="font-semibold text-gray-800">Address:</span> 123
            Commerce Street, Business City, BC 12345
          </p>
        </div>
      </section>
    </div>

    <div class="mt-12 pt-8 border-t border-gray-200">
      <p class="text-sm text-gray-500 text-center">
        This Privacy Policy is effective as of
        {{ currentDate | date : 'longDate' }} and will remain in effect except
        with respect to any changes in its provisions in the future.
      </p>
    </div>
    }
  `,
  imports: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block max-w-4xl mx-auto px-4 py-8',
  },
})
export class PrivacyPolicyPageComponent {
  readonly currentDate = new Date();
}
