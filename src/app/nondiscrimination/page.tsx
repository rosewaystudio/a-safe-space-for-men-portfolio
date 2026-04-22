import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nondiscrimination Policy | A Safe Space For Men',
  description: 'A Safe Space For Men is committed to providing programs and services free from discrimination of any kind.',
};

const NondiscriminationPage = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nondiscrimination Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective Date: January 1, 2025 &nbsp;|&nbsp; Last Updated: April 2026
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          A Safe Space For Men does not discriminate on the basis of race, color,
          national origin, sex, age, disability, religion, sexual orientation,
          gender identity, or any other characteristic protected by applicable
          federal, state, or local law in any of its programs, services, or
          activities.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Scope of This Policy
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This policy applies to all individuals seeking access to or
          participating in A Safe Space For Men programs, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Community support groups and barbershop programming</li>
          <li>Workshops, events, and community gatherings</li>
          <li>Volunteer and leadership opportunities</li>
          <li>Digital resources available through this website</li>
          <li>Any other programs or services offered by the organization</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Accessibility & Accommodations
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          If you require accommodations to access our programs, services, or
          this website, please contact us at the address below. We are committed
          to ensuring equal access for individuals with disabilities in
          accordance with the Americans with Disabilities Act (ADA) and Section
          504 of the Rehabilitation Act.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How to File a Complaint
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you believe you have been subjected to discrimination in any A Safe Space For Men
          program or activity, you may submit a complaint to:
        </p>
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-8">
            <p className="font-semibold text-gray-900 mb-1">
              A Safe Space For Men — Nondiscrimination Coordinator
            </p>
            <p className="text-gray-700 mb-3">Detroit, Michigan</p>
            
            <a href="mailto:complaints@asafespaceformen.org"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              <Mail className="w-4 h-4 mr-2"/>
              complaints@asafespaceformen.org
            </a>
          </div>
        <p className="text-gray-700 leading-relaxed mb-8">
          We are committed to resolving all complaints promptly and equitably.
          Complaints may be submitted at any time. We will acknowledge receipt
          within five business days and work toward resolution in good faith.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          External Complaint Options
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          You also have the right to file a complaint with applicable federal or
          state agencies, including the U.S. Department of Health and Human
          Services Office for Civil Rights or the U.S. Equal Employment
          Opportunity Commission, if you believe your rights under federal law
          have been violated.
        </p>
          <div className="border-t border-gray-200 pt-8 mt-10">
            <p className="text-sm text-gray-500">
              This policy is reviewed annually. For questions, contact{' '}
              
              <a  href="mailto:complaints@asafespaceformen.org"
                className="text-emerald-600 hover:underline"
              >
                complaints@asafespaceformen.org
              </a>        
            </p>
          </div>     
        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NondiscriminationPage;