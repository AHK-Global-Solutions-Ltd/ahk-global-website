import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
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
            <h1 className="text-4xl font-bold text-blue-600 mb-8">Privacy & Cookies Policy</h1>
            
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> August 24, 2025
            </p>

            <p className="text-lg text-gray-700 mb-8">
              This Privacy & Cookies Policy ("Policy") describes how AHK Properties LLC, AHK Real Estate LLC, 
              AHK Holiday Homes LLC, AHK Global Solutions Limited, Oxford Management Consultancy Ltd, and their 
              affiliates (together "AHK", "we", "our", or "us") collect, use, and protect personal information.
            </p>

            <p className="text-lg text-gray-700 mb-12">
              By using our websites, platforms, or services, you agree to the terms of this Policy.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Scope</h2>
                <p className="text-gray-700 mb-4">This Policy applies to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Visitors to our websites and applications.</li>
                  <li>Clients, partners, and service providers using our real estate, consulting, or back-office services.</li>
                  <li>Employees, contractors, and other users of our IT and collaboration platforms.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data We Collect</h2>
                <p className="text-gray-700 mb-4">We may collect the following categories of information:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Identity information:</strong> name, company, email address, phone number.</li>
                  <li><strong>Business information:</strong> property preferences, consulting needs, service contracts.</li>
                  <li><strong>Technical information:</strong> device identifiers, IP addresses, browser type, operating system.</li>
                  <li><strong>Usage information:</strong> activity logs, pages visited, time spent, service interactions.</li>
                  <li><strong>Financial information:</strong> billing details, payments, or accounting data when required.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
                <p className="text-gray-700 mb-4">We process personal data for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Providing and improving our services.</li>
                  <li>Managing contracts, transactions, and customer accounts.</li>
                  <li>Enforcing security, compliance, and fraud prevention measures.</li>
                  <li>Communicating updates, offers, and service announcements.</li>
                  <li>Meeting our legal, regulatory, and audit obligations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies & Tracking</h2>
                <p className="text-gray-700 mb-4">
                  Our websites and apps use cookies, pixels, and similar technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Enable core functionality.</li>
                  <li>Measure traffic and improve performance.</li>
                  <li>Personalize ads and marketing campaigns (e.g., Google Analytics, LinkedIn Ads, Facebook Pixel, Zoho tracking).</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You may manage or disable cookies in your browser settings. Some features may not function without cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Processing & Storage</h2>
                <p className="text-gray-700 mb-4">
                  Personal data may be processed and stored in the United Arab Emirates, United States, and Pakistan, 
                  depending on service delivery and support needs.
                </p>
                <p className="text-gray-700">
                  We maintain strict access controls, encryption, and monitoring in line with SOC 2 and ISO 27001 standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <p className="text-gray-700">
                  We retain personal data only as long as necessary for business, legal, or compliance purposes. 
                  When data is no longer required, it is securely deleted or anonymized.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Security</h2>
                <p className="text-gray-700 mb-4">
                  We use administrative, technical, and physical safeguards to protect your information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Device and account security policies (e.g., Intune, Endpoint protection).</li>
                  <li>Encryption of sensitive data in transit and at rest.</li>
                  <li>Access based on least privilege and role-based controls.</li>
                  <li>Ongoing monitoring and incident response processes.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. User Rights</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>EU/EEA Users (GDPR):</strong> You may request access, correction, deletion, or portability of your data, and object to processing, subject to legal exceptions. Requests can be made via the contact below.</li>
                  <li><strong>Non-EU Users:</strong> Rights are applied in accordance with local laws and our internal compliance framework.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Sharing of Data</h2>
                <p className="text-gray-700 mb-4">We do not sell personal data. We may share data with:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Service providers under contract (e.g., IT, cloud hosting, payment processors).</li>
                  <li>Professional advisors (e.g., auditors, regulators).</li>
                  <li>Affiliates and subsidiaries within the AHK group.</li>
                  <li>Authorities if legally required.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-700 mb-4">For privacy concerns or data requests, please contact us:</p>
                <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">support@ahksolution.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">Offices in Dubai (HQ), California, and Lahore</span>
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

export default PrivacyPolicy

