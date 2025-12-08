"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import configs from "@/config/env_config";

type Consent = {
  given: boolean;
  preferences: {
    analytics: boolean;
    marketing: boolean;
    functional: boolean; // essential
  };
};

const STORAGE_KEY = "xapi_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<Consent | null>(null);

  useEffect(() => {
    const cookieManageAllowed = configs?.allowManageCookies;

    try {
      if(!cookieManageAllowed) {
        setVisible(false);
        return;
      }

      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setVisible(true);
        return;
      }
      const parsed = JSON.parse(raw) as Consent;
      setConsent(parsed);
      setVisible(false);
    } catch (e) {
      setVisible(true);
    }
  }, []);

  const save = (c: Consent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    setConsent(c);
    setVisible(false);
  };

  const acceptAll = () => {
    save({
      given: true,
      preferences: { analytics: true, marketing: true, functional: true },
    });
  };

  const rejectNonEssential = () => {
    save({
      given: true,
      preferences: { analytics: false, marketing: false, functional: true },
    });
  };

  const savePreferences = (prefs: {
    analytics: boolean;
    marketing: boolean;
  }) => {
    save({ given: true, preferences: { ...prefs, functional: true } });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="bg-white dark:bg-[#151515] border border-gray-200 dark:border-zinc-800 rounded-lg shadow-lg p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-artegra-sans-alt-medium text-lg text-dark dark:text-white">
              We use cookies
            </h3>
            <p className="text-sm text-[#5F5F5F] dark:text-gray-300 mt-1">
              We use cookies to personalize content, analyze traffic and provide
              essential site functionality. Read our{" "}
              <Link href="/privacy-policy" className="text-primary underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/website-terms" className="text-primary underline">
                Website Terms
              </Link>
              .
            </p>
            {/* Manage preferences removed per request */}
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={rejectNonEssential}
              variant="ghost"
              className="px-3 cursor-pointer"
            >
              Reject
            </Button>
            <Button onClick={acceptAll} className="px-4 cursor-pointer">
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
