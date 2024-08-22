// src/TermsOfService.js
import React from "react";

const TermsCondition = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 border border-dashed border-blue-400 rounded-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Shivacha Ai Terms of Service
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Acceptance of Terms</h2>
          <p className="text-gray-700 text-sm">
            By accessing or using the Shivacha AI Voice Generator, Video
            Generator, Bulk Audio Generator, or Bulk Video Generator
            (collectively, "Services"), you agree to be bound by these Terms and
            Conditions ("Terms"). If you do not agree to these Terms, do not use
            the Services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Services Provided</h2>
          <p className="text-gray-700 text-sm">
            Shivacha AI Studio provides a range of services including but not
            limited to voice generation, video generation, bulk audio
            generation, and bulk video generation tools. These Services are
            designed to assist users in creating and producing audio and video
            content.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Use of Services</h2>
          <ul className="list-disc pl-6 text-gray-700 text-sm">
            <li>
              <strong>Eligibility:</strong> You must be at least 18 years old or
              have the consent of a guardian to use the Services.
            </li>
            <li>
              <strong>Account Responsibility:</strong> You are responsible for
              maintaining the confidentiality of your account information and
              for all activities that occur under your account.
            </li>
            <li>
              <strong>Prohibited Activities:</strong> You agree not to use the
              Services for any unlawful or unauthorized purposes, including but
              not limited to harassment, defamation, or infringement of
              intellectual property rights.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
          <ul className="list-disc pl-6 text-gray-700 text-sm">
            <li>
              <strong>Ownership:</strong> All content, trademarks, and other
              intellectual property associated with the Services are owned by
              Shivacha AI Studio or its licensors.
            </li>
            <li>
              <strong>License:</strong> By using the Services, you grant
              Shivacha AI Studio a non-exclusive, worldwide, royalty-free
              license to use, reproduce, and distribute any content you create
              for the purpose of providing and improving the Services.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Payment and Subscription
          </h2>
          <ul className="list-disc pl-6 text-gray-700 text-sm">
            <li>
              <strong>Fees:</strong> Some features of the Services may require
              payment. Details about pricing and payment terms are available on
              our website.
            </li>
            <li>
              <strong>Subscription:</strong> If you subscribe to a paid plan,
              you agree to pay the applicable fees and abide by the subscription
              terms.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsCondition;
