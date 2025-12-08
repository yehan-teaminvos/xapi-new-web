import React from "react";

function Page() {
    return (
        <>
        <div className="max-2xl:container 2xl:max-w-[1320px] px-5 mx-auto text-left lg:pt-31 lg:pb-8 py-18">
             <h1 className="font-helvetica-neue-medium text-3xl sm:text-4xl lg:text-[40px] leading-snug sm:leading-[45px] lg:leading-[50px] mb-5 mt-10">
                   Cookie Policy
             </h1>

              {/* Intro Paragraph */}
             <p className="font-helvetica text-base sm:text-xl  leading-relaxed sm:leading-8 lg:leading-[35px]">
                 Cookies are small text files stored on your device when you visit a website.
                 Xapihub uses cookies to ensure our platform functions correctly, to enhance your
                 browsing experience, and to help us understand how our site is being used.
             </p>

             <p  className="font-helvetica text-base mt-2 sm:text-xl  leading-relaxed sm:leading-8 lg:leading-[35px]">
                 The tables below describe the types of cookies we use and the purpose of each.
             </p>

             <div className="h-0.5 w-full bg-[#E0E0E0] my-13" />

             <div>
                 <h3 className="font-helvetica-neue-medium text-xl sm:text-2xl lg:text-[32px] text-secondary">Essential Cookies</h3>

                 <div className="mt-6 overflow-x-auto">
                     <table className="min-w-full border-collapse border border-gray-300">
                         <thead className="bg-gray-100">
                             <tr>
                                 <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base font-helvetica-neue-medium text-gray-700">
                                     Domain
                                 </th>
                                 <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base font-helvetica-neue-medium text-gray-700">
                                     Cookie Name
                                 </th>
                                 <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base font-helvetica-neue-medium text-gray-700">
                                     Purpose
                                 </th>
                                 <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base font-helvetica-neue-medium text-gray-700">
                                     Avg. Exp. Time
                                 </th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     CookieControl
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     This cookie is used to remember your choice about cookies on https://xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     __Secure-1PAPISID
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Google OAuth authentication and security
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     __Secure-1PSID
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Authentication state management
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     __Secure-1PSIDCC
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Cross-site security enforcement
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     __Secure-1PSIDTS
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Security timestamp for login sessions
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     __Secure-3PAPISID
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Fraud prevention and account security
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     __Secure-3PSID
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     High-level security token for Google login
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     __Secure-3PSIDCC
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Enforces advanced Google security policies
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     __Secure-3PSIDTS
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Timestamp for Google 3P security handling
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     AEC
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Prevents malicious activity, protects Google accounts
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     6–12 months
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     APISID
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Stores encrypted authentication state
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     HSID
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Protects against session hijacking and CSRF
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     SAPISID
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Verifies OAuth login integrity
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     SID
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Security + authentication for Google accounts
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     SEARCH_SAMESITE
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Enforces SameSite cookie restrictions for security
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     6 months
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     NID
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Stores user preferences (language, UI, safety settings)
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     6 months
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     google.com
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     OTZ
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Supports reCAPTCHA and Google security services
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 month
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     login.xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     AUTH_SESSION_ID
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Keycloak login session identification
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Session
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     login.xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     AUTH_SESSION_ID_LEGACY
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Legacy Keycloak login session
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Session
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     login.xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     KEYCLOAK_IDENTITY
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Encoded JWT identity token for logged-in users
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Session / up to 1 hour
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     login.xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     KEYCLOAK_IDENTITY_LEGACY
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Legacy identity token
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Session
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     login.xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     KEYCLOAK_SESSION
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Keycloak internal SSO session tracking
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     14 hours
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     login.xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     KEYCLOAK_SESSION_LEGACY
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Legacy SSO session tracking
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     14 hours
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     login.xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     AWSALBAPP-0 / -1 / -2 / -3
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Load balancer stickiness, keeps user on same server
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 week
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     login.xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     JSESSIONID
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Java application session management
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Session
                                 </td>
                             </tr>
                         </tbody>
                     </table>
                 </div>

                 <h3 className="font-helvetica-neue-medium text-xl mt-4 sm:text-2xl lg:text-[32px] text-secondary">Non-Essential Cookies (Optional)</h3>

                 <div className="mt-6 overflow-x-auto">
                     <table className="min-w-full border-collapse border border-gray-300">
                         <thead className="bg-gray-100">
                             <tr>
                                 <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base font-helvetica-neue-medium text-gray-700">
                                     Domain
                                 </th>
                                 <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base font-helvetica-neue-medium text-gray-700">
                                     Cookie Name
                                 </th>
                                 <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base font-helvetica-neue-medium text-gray-700">
                                     Purpose
                                 </th>
                                 <th className="border border-gray-300 px-4 py-3 text-left text-sm sm:text-base font-helvetica-neue-medium text-gray-700">
                                     Avg. Exp. Time
                                 </th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     _hjSession_3716314
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Tracks the user's current session for UX analysis
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Session
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     _hjSessionUser_3716314
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Identifies returning visitors anonymously for UX improvements
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     _ga
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Distinguishes users for Google Analytics tracking
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     _ga_6ME4XDF5X5
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Property-specific visitor/session tracking
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                             <tr className="hover:bg-gray-50">
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     xapihub.io
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     _ga_PHT9MJQ89K
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     Tracks interactions, navigation flow, session behavior
                                 </td>
                                 <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-helvetica text-gray-600">
                                     1 year
                                 </td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
             </div>

             <h3 className="font-helvetica-neue-medium mt-4 text-xl sm:text-2xl lg:text-[32px] text-secondary">Cloudflare-Related Cookies</h3>

             <div className="font-helvetica mt-4 text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8">
                        Our application loads certain static assets (such as Font Awesome icons and Quill CSS) 
                       from Cloudflare’s CDN. Cloudflare may set a small number of <strong>strictly necessary</strong>  cookies
                        (such as <strong>__cf_bm</strong>  or <strong>_cfuvid</strong>) that are required for:
             </div>
             <div className="font-helvetica mt-4 text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] pl-4">
                 <ul>
                     <li>protecting the site from malicious traffic</li>
                     <li>ensuring CDN performance</li>
                     <li>maintaining availability</li>
                 </ul>
             </div>

             <div className="font-helvetica mt-4 text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8">
                    These cookies do <strong>not</strong> store personal information and they are essential for the correct functioning of the website.
             </div>

             <div className="font-helvetica mt-4 text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8">
                 Some Cloudflare-related marketing or analytics cookies (e.g., Adobe, Marketo, Amplitude, GA4) may
                 appear in your browser <strong> because of a prior visit to cloudflare.com </strong>  or after accessing Cloudflare-generated 
                 error pages.
             </div>
             <div className="font-helvetica text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8"> These cookies are not set by our application and are not used by our website.</div>





         </div>
     </>	
    )
}

export default Page;