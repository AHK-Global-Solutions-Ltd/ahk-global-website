import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                AHK Global<br />
                <span className="text-sm font-normal text-gray-600">Solutions Limited</span>
              </h1>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-blue-600 mb-8">Terms of Use</h1>
            
            <div className="text-gray-600 mb-8 space-y-2">
              <p><strong>Effective Date:</strong> August 24, 2025</p>
              <p><strong>Last Updated:</strong> August 24, 2025</p>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              These Terms of Use ("Terms") govern your access to and use of the services, websites, platforms, 
              and applications operated by AHK Properties LLC (USA), AHK Real Estate LLC (UAE), AHK Holiday Homes LLC (UAE), 
              AHK Global Solutions Limited (Pakistan), Oxford Management Consultancy Ltd (UAE), and their affiliates 
              (collectively "AHK," "we," "us," or "our").
            </p>

            <p className="text-lg text-gray-700 mb-12">
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree, 
              you must not use our services.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Scope of Services</h2>
                <p className="text-gray-700 mb-4">AHK provides a range of services, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Real estate brokerage, sales, rental management, and related advisory services.</li>
                  <li>Business consulting, company formation, tax/VAT compliance, and corporate services.</li>
                  <li>Back-office solutions, including bookkeeping, HR, marketing, administrative support, and SaaS applications.</li>
                  <li>Technology platforms for client engagement, property management, and enterprise services.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  These Terms apply globally across all services offered by AHK, unless otherwise supplemented by a specific service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Responsibilities & Conduct</h2>
                <p className="text-gray-700 mb-4">You agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate and truthful information when using our services.</li>
                  <li>Use our services only for lawful purposes.</li>
                  <li>Not engage in fraud, misrepresentation, unauthorized access, reverse engineering, data scraping, or competitive misuse.</li>
                  <li>Not upload malicious code, interfere with system integrity, or attempt unauthorized access to AHK systems.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Violation of these rules may result in suspension or termination of access, and may expose you to civil and criminal liability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Accounts & Security</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                  <li>You must promptly notify support@ahksolution.com of any unauthorized access.</li>
                  <li>AHK reserves the right to implement identity verification, device security controls, and monitoring consistent with SOC 2, ISO 27001, and GDPR standards.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payments & Subscriptions</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Real Estate Services:</strong> Brokerage commissions, referral fees, or service charges will apply as agreed in transactional documents.</li>
                  <li><strong>Consulting & Back-Office Services:</strong> Subscription fees, invoices, or one-time charges must be paid in accordance with agreed billing cycles.</li>
                  <li><strong>Cancellations:</strong> Subscriptions may be canceled by written notice per the applicable service agreement. Prepaid fees are generally non-refundable unless required by law.</li>
                  <li>AHK may suspend or terminate services for late or non-payment.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Protection & Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Your use of our services is subject to our Privacy & Cookies Policy, which describes how AHK collects, 
                  uses, and protects your data in accordance with GDPR, CCPA, UAE Data Law, and other applicable regulations.
                </p>
                <p className="text-gray-700 mb-4">By using our services, you consent to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Processing of personal data in the USA, UAE, and Pakistan.</li>
                  <li>Use of cookies, analytics, and tracking technologies as disclosed in our Privacy Policy.</li>
                  <li>Application of EU data subject rights only for EU residents.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>All AHK trademarks, logos, trade names, and proprietary materials remain the exclusive property of AHK.</li>
                  <li>You may not copy, modify, distribute, resell, or create derivative works without written consent.</li>
                  <li>Any feedback or suggestions you provide may be freely used by AHK without obligation.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
                <p className="text-gray-700">
                  Our services may integrate or link to third-party applications (e.g., Microsoft, Zoho, HP, Lenovo, cloud providers). 
                  AHK is not responsible for third-party terms, security, or availability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Our services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, express or implied.</li>
                  <li>AHK disclaims all warranties regarding accuracy, completeness, availability, merchantability, or fitness for a particular purpose.</li>
                  <li>Real estate values, business outcomes, and financial projections are estimates and not guarantees.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>AHK's liability is strictly limited to the amount you paid to AHK in the 12 months preceding the claim.</li>
                  <li>AHK shall not be liable for indirect, incidental, consequential, punitive, or special damages (including loss of profits, data, goodwill, or opportunities).</li>
                  <li>You agree to indemnify and hold harmless AHK, its officers, employees, and affiliates from any third-party claims related to your use of our services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Jurisdiction & Governing Law</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>These Terms are governed by the laws of the United Arab Emirates (Dubai), except as noted below.</li>
                  <li>For U.S. residents, or where U.S. law requires, disputes shall be governed by the laws of the State of California, USA.</li>
                  <li>Any disputes shall be subject to the exclusive jurisdiction of the courts in Dubai, UAE, or California, USA (for U.S. residents).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
                <p className="text-gray-700">
                  AHK may suspend or terminate your account or access to services at any time, without liability, 
                  for breach of these Terms or misuse of services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Amendments</h2>
                <p className="text-gray-700">
                  AHK reserves the right to amend these Terms at any time. Updated versions will be posted on our websites 
                  and take effect immediately upon publication.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact</h2>
                <p className="text-gray-700 mb-4">For questions or concerns about these Terms, contact us at:</p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">support@ahksolution.com</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 AHK Global Solutions Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default TermsOfUse

