/**
 * @description 隐私政策页面 - 为Cursor历史版本下载网站创建的隐私政策页面，符合AdSense审核要求
 * @author Claude AI
 * @date 2025-01-14
 */

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Cursor Historical Version Download',
  description: 'Privacy Policy for Cursor Historical Version Download website',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> January 14, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Cursor Historical Version Download (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website cursorhistory.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3 text-gray-800">2.1 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information about your device and usage patterns, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>IP address and geographic location</li>
              <li>Browser type and version</li>
              <li>Operating system information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
              <li>Download activity and preferences</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-gray-800">2.2 Cookies and Tracking Technologies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and serve relevant advertisements through Google AdSense.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Providing and maintaining our download service</li>
              <li>Improving website functionality and user experience</li>
              <li>Analyzing usage patterns and site performance</li>
              <li>Serving relevant advertisements through Google AdSense</li>
              <li>Complying with legal obligations</li>
              <li>Protecting against fraud and security threats</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Third-Party Services</h2>
            
            <h3 className="text-xl font-medium mb-3 text-gray-800">4.1 Google AdSense</h3>
            <p className="mb-4 text-gray-700">
            Our website uses Google AdSense to display advertisements. Google may use cookies and other tracking technologies to serve ads based on your interests. You can learn more about Google&apos;s privacy practices at <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">https://policies.google.com/privacy</a>.
          </p>

            <h3 className="text-xl font-medium mb-3 text-gray-800">4.2 Google Analytics</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use Google Analytics to analyze website traffic and user behavior. This service may collect information about your use of our website and other websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of certain data collection practices</li>
              <li>Disable cookies through your browser settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> cursor@cursorhistory.com<br/>
                <strong>Website:</strong> https://cursorhistory.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}