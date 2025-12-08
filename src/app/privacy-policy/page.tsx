import React from "react";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import Image from "next/image";
import { privacyPolicy } from "@/data/policy";
import Link from 'next/link'

function Page() {
  return (
    <>
<div className="max-2xl:container 2xl:max-w-[1320px] px-5 mx-auto text-left lg:pt-31 lg:pb-8 py-18">
            <h1 className="font-helvetica-neue-medium text-3xl sm:text-4xl lg:text-[40px] leading-snug sm:leading-[45px] lg:leading-[50px] mb-5 mt-10">Privacy Policy for Xapi Platform</h1>
            <div className="font-helvetica   text-sm sm:text-base lg:text-lg font-helvetica mb-5 "><strong>Effective Date: </strong>26th November 2025</div>
            
            <p className="font-helvetica text-base sm:text-xl mb-10 leading-relaxed sm:leading-8 lg:leading-[35px]">
                   Welcome to Xapi’s Privacy Policy (the “Policy”). This Policy describes how X-venture Global Solutions Pvt Ltd (“Xapi,” “we,” or “us”)
                    collects, uses, discloses, and protects your Personally Identifiable Information (PII) through our online services (the “Services”) 
                    and website (collectively, the “Site”).
            </p>
            <p className="font-helvetica text-base sm:text-xl mb-10 leading-relaxed sm:leading-8 lg:leading-[35px]">
            We are committed to processing your PII in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR), 
            the Personal Data Protection Act (PDPA) of Singapore, the Personal Data Protection Act (PDPA) of Sri Lanka, and in 
            accordance with the security principles of ISO/IEC 27018:2019 for PII processors in the cloud.
            </p>
            <div className="h-0.5 w-full bg-[#E0E0E0] my-13"></div>
            <div className="space-y-10">
                <div className="space-y-6">
                    <h3 className="font-helvetica-neue-medium text-xl sm:text-2xl lg:text-[32px] text-secondary">1. Information Collection and PII Categories</h3>
                    <div className="font-helvetica mt-4 text-base sm:text-xl mb-10 leading-relaxed sm:leading-8 lg:leading-[35px]">
                    We collect and process the following categories of PII, which are strictly necessary to provide and maintain the Xapi Services:
                    </div>

                    <div className="font-helvetica text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8">
                        <p>1.1.Information You Provide Directly (User Data)</p>
                        <p>We may collect the following types of information:</p>

                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full border-collapse border border-gray-300 bg-white shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                            Category
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                            Data Elements Collected
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                            Purpose of Collection
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Contact & Identity
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            User Name, First Name, Last Name, Email (corporate email for paid version and personal email free version)
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            To create and manage your account and identify you when you sign in.
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Profile Information
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Profile Picture/Bio, Website, Company, Country, TimeZone
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            To customize your user experience and facilitate collaboration within the platform
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Account Administration
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Names and email addresses for authorized users (if provided by a customer).
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            To administer, manage, and update the Customer's Xapi account and access permissions.
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Billing Information
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Billing address, and transaction records.
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            To process payments for paid services.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <p>1.2.Information Collected Automatically (Usage and Technical Data)</p>
                        
                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full border-collapse border border-gray-300 bg-white shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                            Category
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                            Data Elements Collected
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                            Purpose of Collection
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Usage Data
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Interactions with the Services, features used, time spent, and service configuration settings.
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            To maintain and improve service performance, troubleshoot issues, and enhance user experience.
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Log Data
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            IP address, browser type, device information, access times, and referring website addresses.
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            To monitor the stability and security of the Site and Services, prevent misuse, fraud, and security breaches
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                
                {/* point 2 */}
                <div className="space-y-6">
                    <h3 className="font-helvetica-neue-medium text-xl sm:text-2xl lg:text-[32px] text-secondary">2. Legal Basis and Purpose of Processing</h3>
                    <div className="font-helvetica text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8">
                        <p>We rely on the following legal bases to process your PII:</p>
                        
                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full border-collapse border border-gray-300 bg-white shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                            Processing Purpose
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                            Legal Basis for Processing
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                            Rationale
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Service Provision
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Performance of a Contract
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            To fulfill our obligations under the End User License Agreement (EULA) and deliver the core Xapi Services.
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Account Security
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Legitimate Interests
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            To prevent fraud, ensure network and information security, and protect the integrity of your account and our systems.
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Marketing & Analytics
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Consent
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            For optional marketing communications or non-essential cookies. You have the full right to opt-in or opt-out.
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Legal Compliance
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Legal Obligation
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            To comply with mandatory legal or tax requirements.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="font-helvetica mt-4 text-base sm:text-xl mb-10 leading-relaxed sm:leading-8 lg:leading-[35px]">
                             We guarantee that granting consent for marketing or commercial use of your PII will never be a condition for receiving the contracted Xapi service.
                        </div>
                    </div>
                </div>


                {/* point 3 */}
                <div className="space-y-6">
                    <h3 className="font-helvetica-neue-medium text-xl sm:text-2xl lg:text-[32px] text-secondary">3. Information Sharing, Sub-processors, and Transfers</h3>
                    <p className="font-helvetica text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8">3.1.Disclosure to Third Parties</p>
                    <div className="font-helvetica text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8">
                        <p>Xapi does not sell your PII. We only share PII with third parties as described below or with your explicit consent</p>
                        <div>
                          <ul className="list-disc pl-6 sm:pl-8 md:pl-12">
                            <li><strong>Service Providers (Sub-processors): </strong>
                                We use third-party sub-processors (e.g., cloud hosting providers) to help us deliver the Services. 
                                These sub-processors are required to meet or exceed our security standards, including those mandated by
                                our ISO 27018 compliance, and are strictly prohibited from using your PII for any purpose other than
                                  providing services to Xapi.
                            </li>

                            <li className="mt-2"><strong>Legal Compliance: </strong>
                                  We may disclose PII if required by law, court order, or governmental regulation.
                            </li>

                          </ul>
                        </div>
                        <p><strong>Note: </strong>The following third-party sub-processors are authorized by Xapi to store Personal
                           data collected through the platform with respect to the profile management of the customer.</p>  

                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full border-collapse border border-gray-300 bg-white shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                            Sub-Processor Entity
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                            Brief Description
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                            Location of Data Center
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            MongoDB Atlas
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Storing of customer data (First Name, Last Name, Email) related to the customer profile.
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            AWS / N. Virginia (us-east-1)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Office 365
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Storing information regarding the customers (If provided; Name, Email, and contact number).
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Standard Microsoft Office 365 Cloud
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            AWS - S3
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            Storing of the customer profile picture
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                            AWS / N. Virginia (us-east-1)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>3.2. International Data Transfers</p>
                        <div>
                          
                        </div>
                        <p>X-Venture is registered in Sri Lanka, and the PII collected from individuals located in the 
                          European Economic Area (EEA), the UK, or Singapore may be transferred to and stored in countries
                           outside those jurisdictions.</p>

                        <p>When we transfer PII internationally, we take reasonable steps and implement appropriate safeguards 
                          to ensure the transferred PII receives a comparable level of protection, as required by the relevant 
                          data protection laws. These safeguards include Standard Contractual Clauses (SCCs) for data transfers
                           between the originating country and third countries</p>   

                       <p>3.3. Geographical Location</p>  
                       <p>All User PII is primarily stored on servers located in data centers provided by our certified cloud hosting partner.</p>  
                        <p>For a comprehensive list of the specific geographical locations where our sub-processors (third-party vendors) store or process data, please refer to the table in section 3.1.</p>

                    </div>
                </div>

                {/* point 4 */}
                <div className="space-y-6">
                    <h3 className="font-helvetica-neue-medium text-xl sm:text-2xl lg:text-[32px] text-secondary">4.Security</h3>
                    <div className="font-helvetica text-base sm:text-xl mb-10 leading-relaxed sm:leading-8 lg:leading-[35px]">
                      <p>We are committed to protecting your PII. We implement and maintain reasonable and appropriate technical and organizational security measures to protect your PII against unauthorized access,
                      alteration, disclosure, or destruction, as required by global and local privacy legislations.</p>
                    </div>
                   

                    <p className="font-helvetica text-base sm:text-xl mb-10 leading-relaxed sm:leading-8 lg:leading-[35px]">Our security program is designed and managed in alignment with ISO/IEC 27001:2022 (Information Security Management System) and ISO/IEC 27018:2019 (PII Protection in the cloud).</p>   
                    <p className="font-helvetica text-base sm:text-xl mb-10 leading-relaxed sm:leading-8 lg:leading-[35px]">In addition, we routinely validate our security posture through independent audits, including annual penetration testing of the Xapi platform.</p>
                </div>


                {/* point 5 */}
                <div className="space-y-6">
                    <h3 className="font-helvetica-neue-medium text-xl sm:text-2xl lg:text-[32px] text-secondary">5. Data Retention.</h3>
                    <div className="font-helvetica text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8">
                        <p>We retain your PII only for as long as necessary to fulfill the purposes for which it was collected, including for the purpose of satisfying any legal, accounting, or reporting requirements.</p>
                        <p>We determine the appropriate retention period based on:</p>
                        <div>
                          <ul className="list-disc pl-6 sm:pl-8 md:pl-12">
                            <li>
                              <strong>Duration of Contract: </strong>
                              Your PII is retained for the entire period your account is active.
                            </li>
                            <li>
                              <strong>Post-Termination: </strong>
                              Following account closure, we securely delete your PII, unless retention is mandatory for legal defense or compliance
                               with court orders.
                            </li>
                          </ul>
                        </div>
                       
                    </div>
                </div>

                {/* point 6 */}
                <div className="space-y-6">
                    <h3 className="font-helvetica-neue-medium text-xl sm:text-2xl lg:text-[32px] text-secondary">6. Your Rights and Choices.</h3>
                    <div className="font-helvetica text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8">
                        <p>You have the following rights regarding the PII we hold about you. You can exercise these rights by contacting our Data Protection Officer as per section 08.</p>
                    </div>
                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full border-collapse border border-gray-300 bg-white shadow-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                        PII Principal Right
                                    </th>
                                    <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base lg:text-lg font-helvetica-neue-medium text-secondary">
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Right to Access
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Obtain confirmation of whether your PII is being processed and, if so, access to the data.
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Right to Rectification
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Have inaccurate or incomplete PII corrected without undue delay.
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Right to Erasure
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Request the deletion of your PII (Right to be Forgotten) under certain conditions.
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Right to Restrict Processing
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Restrict the way we process your PII under certain conditions.
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Right to Data Portability
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Receive your PII in a structured, commonly used, and machine-readable format.
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Right to Object
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Object the processing of your PII, especially for direct marketing purposes.
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Right to Withdraw Consent
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base lg:text-lg font-helvetica">
                                        Withdraw your consent at any time where processing is based on consent. Withdrawal does not affect the lawfulness of processing before withdrawal.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* point 7 */}
                <div className="space-y-6">
                    <h3 className="font-helvetica-neue-medium text-xl sm:text-2xl lg:text-[32px] text-secondary">7. Cookies and Similar Technologies.</h3>
                    <div className="font-helvetica text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8">
                        <p>Cookies are small data files stored on your browser. We use them for essential service functionality and non-essential analytics/performance tracking.</p>
                        <div>
                          <ul className="list-disc pl-6 sm:pl-8 md:pl-12">
                            <li><strong>Management: </strong>
                            We are currently working on letting you manage your preferences. For now, if you want to manage or have any concerns, 
                            please email to <a className="text-primary underline" href="mailto:dpo@x-venture.io">dpo@x-venture.io</a>  Once the feature is available, you can manage your preferences at any time via
                             the cookie banner or by adjusting your browser settings to refuse or delete cookies.
                            </li>
                            <li>
                              <strong>Cookie Consent: </strong>
                              For non-essential cookies, we plan to obtain your explicit consent via a cookie banner upon your first visit to the Site.
                            </li>
                            <li>
                              <strong>Cookie Policy: </strong>
                              For a detailed list of cookies, their purpose, and their lifespan, please refer to our separate Cookie Policy at 
                              <Link href="/cookie-policy" className="text-primary underline ml-1">Cookie Policy</Link>

                            </li>
                          </ul>
                        </div>
                    </div>
                </div>

                {/* point 8 */}
                <div className="space-y-6">
                    <h3 className="font-helvetica-neue-medium text-xl sm:text-2xl lg:text-[32px] text-secondary">8. Contact Us</h3>
                    <div className="font-helvetica text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8">
                        <p>For any questions, concerns, inquiries about this Privacy Policy, or to exercise any of your rights, please contact our dedicated Data Protection Officer at:</p>
                    </div>
                    <ul className="list-disc pl-6 sm:pl-8 md:pl-12">
                      <li className="flex gap-2"><strong>Email: </strong>
                        <a className="text-primary underline" href="mailto:dpo@x-venture.io">dpo@x-venture.io</a>
                      </li>
                      <li className="flex gap-2"><strong>Address: </strong>
                        <address>X-venture Global Solutions Pvt Ltd (Attention: Data Protection Officer),<br></br>
                           No 1185/1/E, Vidyala Junction, <br></br>
                           Pannipitiya, Sri Lanka</address>
                      </li>
                    </ul>
                </div>

                {/* point 9 */}
                <div className="space-y-6">
                    <h3 className="font-helvetica-neue-medium text-xl sm:text-2xl lg:text-[32px] text-secondary">9. Changes to this Policy.</h3>
                    <div className="font-helvetica text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8">
                        <p>We may update this Policy to reflect changes in our practices, services, or regulatory requirements.
                           The updated Policy will be effective upon posting on our website. We will notify you of material changes 
                           via email or a prominent notice on the Site.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Page;
