import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ssrmart-terms-of-service-page',
  template: `
    @defer (hydrate never) {
    <div class="max-w-4xl mx-auto px-4 py-8">
      <div class="mb-8">
        <h1>Terms of Service</h1>
        <p class="text-gray-600">
          Last updated: {{ currentDate | date : 'longDate' }}
        </p>
      </div>

      <div class="prose prose-lg max-w-none">
        <section class="mb-8">
          <h2>1. Acceptance of Terms</h2>
          <p class="text-gray-700 mb-4 leading-7">
            By accessing and using SSRMart ("we," "our," or "us"), you accept
            and agree to be bound by the terms and provision of this agreement.
            If you do not agree to abide by the above, please do not use this
            service.
          </p>
          <p class="text-gray-700 leading-7">
            These Terms of Service govern your use of our website and services.
            By using our website, you agree to these terms in full.
          </p>
        </section>

        <section class="mb-8">
          <h2>2. Description of Service</h2>
          <p class="text-gray-700 mb-4 leading-7">
            SSRMart is an e-commerce platform that provides online shopping
            services, including but not limited to:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li class="mb-2 leading-6">
              Product browsing and search functionality
            </li>
            <li class="mb-2 leading-6">
              Online ordering and payment processing
            </li>
            <li class="mb-2 leading-6">Order tracking and delivery services</li>
            <li class="mb-2 leading-6">Customer support and assistance</li>
            <li class="mb-2 leading-6">
              Account management and personalization features
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2>3. User Accounts and Registration</h2>
          <p class="text-gray-700 mb-4 leading-7">
            To access certain features of our service, you may be required to
            create an account. You are responsible for:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li class="mb-2 leading-6">
              Providing accurate and complete information during registration
            </li>
            <li class="mb-2 leading-6">
              Maintaining the security of your account credentials
            </li>
            <li class="mb-2 leading-6">
              All activities that occur under your account
            </li>
            <li class="mb-2 leading-6">
              Notifying us immediately of any unauthorized use
            </li>
          </ul>
          <p class="text-gray-700 leading-7">
            We reserve the right to terminate accounts that violate these terms
            or are inactive for extended periods.
          </p>
        </section>

        <section class="mb-8">
          <h2>4. Product Information and Pricing</h2>
          <p class="text-gray-700 mb-4 leading-7">
            We strive to provide accurate product information, including
            descriptions, images, and pricing. However:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li class="mb-2 leading-6">
              <span class="font-semibold text-gray-800">Pricing:</span> All
              prices are subject to change without notice
            </li>
            <li class="mb-2 leading-6">
              <span class="font-semibold text-gray-800">Availability:</span>
              Product availability is not guaranteed
            </li>
            <li class="mb-2 leading-6">
              <span class="font-semibold text-gray-800">Accuracy:</span> While
              we aim for accuracy, errors may occur
            </li>
            <li class="mb-2 leading-6">
              <span class="font-semibold text-gray-800">Images:</span> Product
              images are for illustration purposes only
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2>5. Ordering and Payment</h2>
          <p class="text-gray-700 mb-4 leading-7">
            When placing an order, you agree to:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li class="mb-2 leading-6">
              Provide accurate billing and shipping information
            </li>
            <li class="mb-2 leading-6">
              Pay the full amount due at the time of ordering
            </li>
            <li class="mb-2 leading-6">
              Accept delivery of your order at the specified address
            </li>
            <li class="mb-2 leading-6">
              Comply with any age restrictions for certain products
            </li>
          </ul>
          <p class="text-gray-700 leading-7">
            We accept various payment methods and process payments securely.
            Orders are not confirmed until payment is successfully processed.
          </p>
        </section>

        <section class="mb-8">
          <h2>6. Shipping and Delivery</h2>
          <p class="text-gray-700 mb-4 leading-7">
            We offer various shipping options with different delivery times and
            costs:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li class="mb-2 leading-6">
              <span class="font-semibold text-gray-800"
                >Standard Shipping:</span
              >
              3-5 business days
            </li>
            <li class="mb-2 leading-6">
              <span class="font-semibold text-gray-800">Express Shipping:</span>
              1-2 business days
            </li>
            <li class="mb-2 leading-6">
              <span class="font-semibold text-gray-800"
                >Overnight Shipping:</span
              >
              Next business day
            </li>
          </ul>
          <p class="text-gray-700 leading-7">
            Delivery times are estimates and may vary based on location,
            weather, or other factors beyond our control.
          </p>
        </section>

        <section class="mb-8">
          <h2>7. Returns and Refunds</h2>
          <p class="text-gray-700 mb-4 leading-7">
            We want you to be satisfied with your purchase. Our return policy
            includes:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li class="mb-2 leading-6">
              <span class="font-semibold text-gray-800"
                >30-Day Return Window:</span
              >
              Most items can be returned within 30 days
            </li>
            <li class="mb-2 leading-6">
              <span class="font-semibold text-gray-800"
                >Condition Requirements:</span
              >
              Items must be unused and in original packaging
            </li>
            <li class="mb-2 leading-6">
              <span class="font-semibold text-gray-800"
                >Refund Processing:</span
              >
              Refunds are processed within 5-10 business days
            </li>
            <li class="mb-2 leading-6">
              <span class="font-semibold text-gray-800">Restocking Fees:</span>
              Some items may incur restocking fees
            </li>
          </ul>
          <p class="text-gray-700 leading-7">
            Certain items are non-returnable, including personalized products
            and digital downloads.
          </p>
        </section>

        <section class="mb-8">
          <h2>8. Prohibited Uses</h2>
          <p class="text-gray-700 mb-4 leading-7">
            You agree not to use our service for any unlawful purpose or in any
            way that could damage, disable, overburden, or impair our servers or
            networks. Prohibited activities include:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li class="mb-2 leading-6">
              Attempting to gain unauthorized access to our systems
            </li>
            <li class="mb-2 leading-6">
              Using automated tools to scrape or collect data
            </li>
            <li class="mb-2 leading-6">
              Interfering with the proper functioning of our website
            </li>
            <li class="mb-2 leading-6">
              Attempting to circumvent security measures
            </li>
            <li class="mb-2 leading-6">
              Using our service for fraudulent or deceptive purposes
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2>9. Intellectual Property</h2>
          <p class="text-gray-700 mb-4 leading-7">
            All content on our website, including text, graphics, logos, images,
            and software, is the property of SSRMart or its content suppliers
            and is protected by copyright laws.
          </p>
          <p class="text-gray-700 leading-7">
            You may not reproduce, distribute, modify, or create derivative
            works from any content without our express written permission.
          </p>
        </section>

        <section class="mb-8">
          <h2>10. Privacy and Data Protection</h2>
          <p class="text-gray-700 mb-4 leading-7">
            Your privacy is important to us. Our collection and use of personal
            information is governed by our Privacy Policy, which is incorporated
            into these Terms of Service by reference.
          </p>
          <p class="text-gray-700 leading-7">
            By using our service, you consent to the collection and use of your
            information as described in our Privacy Policy.
          </p>
        </section>

        <section class="mb-8">
          <h2>11. Limitation of Liability</h2>
          <p class="text-gray-700 mb-4 leading-7">
            To the maximum extent permitted by law, SSRMart shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, including but not limited to:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li class="mb-2 leading-6">Loss of profits or revenue</li>
            <li class="mb-2 leading-6">Loss of data or information</li>
            <li class="mb-2 leading-6">Business interruption</li>
            <li class="mb-2 leading-6">Personal injury or property damage</li>
          </ul>
          <p class="text-gray-700 leading-7">
            Our total liability shall not exceed the amount paid by you for the
            specific product or service giving rise to the claim.
          </p>
        </section>

        <section class="mb-8">
          <h2>12. Disclaimers</h2>
          <p class="text-gray-700 mb-4 leading-7">
            Our service is provided "as is" and "as available" without
            warranties of any kind, either express or implied. We disclaim all
            warranties, including but not limited to:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li class="mb-2 leading-6">
              Warranties of merchantability and fitness for a particular purpose
            </li>
            <li class="mb-2 leading-6">
              Warranties that the service will be uninterrupted or error-free
            </li>
            <li class="mb-2 leading-6">
              Warranties regarding the accuracy or completeness of information
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2>13. Indemnification</h2>
          <p class="text-gray-700 mb-4 leading-7">
            You agree to indemnify and hold harmless SSRMart, its officers,
            directors, employees, and agents from and against any claims,
            damages, obligations, losses, liabilities, costs, or debt arising
            from:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li class="mb-2 leading-6">Your use of our service</li>
            <li class="mb-2 leading-6">Your violation of these terms</li>
            <li class="mb-2 leading-6">
              Your violation of any third-party rights
            </li>
            <li class="mb-2 leading-6">Any activity related to your account</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2>14. Governing Law and Jurisdiction</h2>
          <p class="text-gray-700 mb-4 leading-7">
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the jurisdiction in which SSRMart
            operates, without regard to its conflict of law provisions.
          </p>
          <p class="text-gray-700 leading-7">
            Any disputes arising from these terms or your use of our service
            shall be resolved in the courts of competent jurisdiction in our
            operating jurisdiction.
          </p>
        </section>

        <section class="mb-8">
          <h2>15. Changes to Terms</h2>
          <p class="text-gray-700 mb-4 leading-7">
            We reserve the right to modify these Terms of Service at any time.
            Changes will be effective immediately upon posting on our website.
            Your continued use of our service after changes are posted
            constitutes acceptance of the new terms.
          </p>
          <p class="text-gray-700 leading-7">
            We will notify users of material changes via email or prominent
            notice on our website.
          </p>
        </section>

        <section class="mb-8">
          <h2>16. Contact Information</h2>
          <p class="text-gray-700 mb-4 leading-7">
            If you have any questions about these Terms of Service, please
            contact us:
          </p>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-700 mb-2">
              <span class="font-semibold text-gray-800">Email:</span>
              legal&#64;ssrmart.com
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
          These Terms of Service are effective as of
          {{ currentDate | date : 'longDate' }} and will remain in effect except
          with respect to any changes in their provisions in the future.
        </p>
      </div>
    </div>
    }
  `,
  imports: [DatePipe],
  host: {
    class: 'block max-w-4xl mx-auto px-4 py-8',
  },
})
export class TermsOfServicePageComponent {
  readonly currentDate = new Date();
}
