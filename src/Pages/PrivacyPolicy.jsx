import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="page-title">Privacy Policy</h1>
      <p>Last updated: 10/08/2024</p>

      <section>
        <h2 className="section-heading">1. Information We Collect</h2>

        <strong>1.1 Information You Provide</strong>
        <p>
          When you create an account on Playtime Paradise, we may collect your name, email address, password, and any other optional information you choose to provide.
        </p>
        <p>
          Customers may provide shipping information, payment details, and preferences during the checkout process.
        </p>
        <p>
          If you sign up for our newsletter or promotional emails, we will collect your email address for communication purposes.
        </p>

        <strong>1.2 Information Automatically Collected</strong>
        <p>
          We may collect information about your device and how you interact with our store, such as your IP address, browser type, and operating system.
        </p>
        <p>
          We use cookies and similar tracking technologies to gather data about your browsing behavior and preferences, helping us improve your shopping experience. You can manage your cookie preferences through your browser settings.
        </p>
      </section>

      <section>
        <h2 className="section-heading">2. How We Use Your Information</h2>
        <p>We use your personal information for the following purposes:</p>
        <ul>
          <li>To provide and maintain our toy store services.</li>
          <li>To process and fulfill orders, including payment processing and delivery.</li>
          <li>To communicate with you, respond to your inquiries, and offer customer support.</li>
          <li>To personalize and enhance your shopping experience on our platform.</li>
          <li>To send you marketing communications, promotions, and updates with your consent.</li>
        </ul>
      </section>

      <section>
        <h2 className="section-heading">3. How We Share Your Information</h2>
        <p>
          We may share your personal information with the following parties:
        </p>
        <ul>
          <li>
            With our payment processors, shipping partners, and other service providers who assist in delivering our services.
          </li>
          <li>
            With legal authorities if required by law or to protect our rights and safety.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="section-heading">4. Your Rights and Choices</h2>
        <p>
          You have the following rights regarding your personal information:
        </p>
        <ul>
          <li>Access: You can request access to your personal data and information about how it is processed.</li>
          <li>Rectification: You can request that inaccuracies in your personal information be corrected.</li>
          <li>Deletion: You can request the deletion of your personal data where applicable.</li>
          <li>Marketing Preferences: You can opt-out of receiving marketing communications at any time.</li>
        </ul>
      </section>

      <section>
        <h2 className="section-heading">5. Security</h2>
        <p>
          We take appropriate measures to protect your personal information, but no method of transmission over the internet or electronic storage is entirely secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2 className="section-heading">6. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the updated Privacy Policy on our website or within the application.
        </p>
      </section>

      <section>
        <h2 className="section-heading">7. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at support@playtimeparadise.com.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
