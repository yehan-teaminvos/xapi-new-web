"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ChatWithAI from "@/components/chat-with-ai";
import { MenuButton } from "@/components/header";
import Hero from "@/components/hero";
import GovernancePopupModal from "@/components/sliders/governance-popup-modal";
import SparklesEffect from "@/components/sparkles-effect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { platformAdvantages } from "@/data/platform-advantages";
import useChat from "@/hooks/use-chat";
import { cn } from "@/lib/utils";
import configs from "@/config/env_config";

import ReactMarkdown from "react-markdown";
import Link from "next/link";

const strings = ["One Platform. Complete Governance. All Effortless."];

const governanceData = {
  apiGovernance: [
    {
      title: "API Catalogues",
      content: `Supports multiple levels of API catalogues:  
• **Organization-level** catalogues for shared APIs across teams and departments.  
• **Project-level** catalogues for domain-specific or project-specific APIs.  
Improves discoverability, reuse, and governance.`,
      video: "/media/videos/api/api-catalog.webm",
    },
    {
      title: "API Design Guidelines Enforcement",
      content: `Enforces standardized design principles, naming
conventions, and versioning rules to ensure APIs remain
consistent, interoperable, and easy to consume across
the organization.`,
      video: "/media/videos/api/api-design-guidelines-enforcement.webm",
    },

    {
      title: "Business Process Engine",
      content: `Manage API governance workflows including onboarding,
validation, approval, documentation, and compliance
checks. Also integrates with policy enforcement and
classification workflows to ensure every API aligns with
organizational governance requirements.`,
      video: "/media/videos/api/business-process-engine.webm",
    },
    {
      title: "AI-Assisted Governance Tools",
      content: `Enhances productivity and governance precision with intelligent
assistants:  

• **Copilot** – Provides contextual guidance and best practice
recommendations.  

• **Magic Tool** – Generates API specifications from natural
language prompts.  

• **Beaver** – Supports precision building and structure
optimization.  

• **Inspector** – Reviews APIs for compliance and design quality.  

• **Improver** – Refines APIs for alignment with organizational and
industry standards.`,
      video: "/media/videos/api/api-catalog.webm",
    },

    {
      title: "Policy & Metadata Management",
      content: `Enables teams to define, attach, and enforce API usage policies

for rate limits, access controls, and compliance rules to ensure-
secure, consistent, and compliant API operations.`,
      video: "/media/videos/api/policy-&-metadata-management.webm",
    },
    {
      title: "API Classification Framework",
      content: `Supports automatic or manual classification of APIs based on
attributes such as sensitivity, business domain, consumer type,
or regulatory impact, helping streamline access control and
compliance monitoring.`,
      video: "/media/videos/api/api-catalog.webm",
    },
    {
      title: "Integration with External Systems",
      content: `Seamless integration with tools like Git repositories,
CI/CD pipelines, and API gateways to automate
governance and ensure alignment with development
workflows.`,
      video: "/media/videos/api/integration-with-external-systems.webm",
    },
    {
      title: "Traceability & Auditability",
      content: `Track every API change, invocation, and consumer
interaction for governance and audit purposes. This
ensures transparency, supports compliance audits, and
strengthens trust across teams and regulators.`,
      video: "/media/videos/api/api-catalog.webm",
    },
  ],
  dataGovernance: [
    {
      title: "Data Catalog",
      content: `Supports multiple levels of Data catalogues:  

• **Organization-level** catalogues for shared data assets
across teams and departments.

• **Project-level** catalogues for domain-specific or project-
specific Data.

This structure improves discoverability, reuse, and
governance across the Data ecosystem.`,
      video: "/media/videos/data/data-catalog.webm",
    },
    {
      title: "Business Process Engine",
      content: `Orchestrates governance workflows such as:  

• Cross-Border Compliance Validation  

• Data Access Requests 

• Compliance Review & Approval
Ensures accountability and smooth execution of
governance operations.`,
      video: "/media/videos/data/data-business-process.webm",
    },
    {
      title: "AI-Powered Governance Assistance",
      content: `Leverages AI to strengthen governance through automation
and insight:  

• Auto-identify data classifications. 

• Recommend or assign compliance reviewers. 

• Enrich metadata with contextual tags. 

• Flag anomalies or policy violations proactively`,
      video: "/media/videos/data/data-catalog.webm",
    },
    {
      title: "Policy Enforcement Engine",
      content: `Attach and enforce data usage policies (e.g., retention,
access, sharing) across all data assets.`,
      video: "/media/videos/data/data-policy-enforcement-engine.webm",
    },
    {
      title: "Glossary Management",
      content: `Centralized business glossary that standardizes
terminology across multiple projects, ensuring clarity,
consistency, and shared understanding across teams.`,
      video: "/media/videos/data/glossary-management-data.webm",
    },
    {
      title: "Data Classification",
      content: `Automatically or manually classify data based on
sensitivity, domain, and usage (e.g., personal, confidential,
operational). Ensure the right protection and handling
policies are applied.`,
      video: "/media/videos/data/data-classification.webm",
    },
    {
      title: "Data Lineage Tracking",
      content: `Visualizes the origin, transformation, and flow of data
across systems, providing complete transparency for every
data movement.`,
      video: "/media/videos/data/data-lineage.webm",
    },
    {
      title: "Audit & Traceability Logs",
      content: `Provides full visibility into data access, modifications, and
policy enforcement activities, ensuring transparency,
accountability, and compliance-readiness for audits.`,
      video: "/media/videos/data/data-audit -&-traceability.webm",
    },
  ],
  aiGovernance: [
    {
      title: "AI Catalogue",
      content: `Supports multiple levels of AI catalogues:  

• **Organization-level** catalogues for shared AI assets
across teams and departments.  

• **Project-level** catalogues for domain-specific or
project-specific AI assets.
This structure improves discoverability, reuse, and
governance across the AI ecosystem.`,
      video: "/media/videos/ai/ai-beaver.webm",
    },
    {
      title: "Business Process Engine",
      content: `Manage AI governance workflows including onboarding,
validation, approval, documentation, and compliance
checks. Also integrates with policy enforcement and classification workflows to ensure every AI asset aligns
with organizational governance requirements.`,
      video: "/media/videos/ai/ai-inspector.webm",
    },
    {
      title: "AI-Assisted Governance Tools",
      content: `Includes intelligent assistants such as **Copilot** for
guidance, **Magic Tool** for comprehensive description
generation, **Beaver** for precision building, **Inspector** for
compliance review, and **Improver** for refinement and
standards alignment.`,
      video: "/media/videos/ai/ai-assisted-governance.webm",
    },
    {
      title: "Policy Management",
      content: `Define and enforce policies for AI model usage,
deployment, retraining, and compliance.`,
    },
    {
      title: "Classification Management",
      content: `Classify AI models based on
domain, sensitivity, and regulatory impact.`,
      video: "/media/videos/ai/ai-beaver.webm",
    },
    {
      title: "Compliance Management",
      content: `Validate AI models against regulatory standards and
internal policies to ensure responsible deployment.`,
      video: "/media/videos/ai/ai-improve.webm",
    },
    {
      title: "Lineage Tracking",
      content: `Visualizes the origin, transformation, and flow of data
across systems, providing complete transparency for
every data movement.`,
      video: "/media/videos/ai/ai-inspector.webm",
    },

    {
      title: "Traceability",
      content: `Track AI model versions, training data, decisions, and
usage history for audit and governance.`,
      video: "/media/videos/ai/ai-magic-tool.webm",
    },
  ],
};

const governanceTabs = [
  {
    value: "api",
    label: "API Governance",
    data: governanceData.apiGovernance,
  },
  {
    value: "data",
    label: "Data Governance",
    data: governanceData.dataGovernance,
  },
  {
    value: "ai",
    label: "AI Governance",
    data: governanceData.aiGovernance,
  },
];

const Page = () => {
  const { sendMessage } = useChat();
  const [activeTab, setActiveTab] = useState("api");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedGovernanceItem, setSelectedGovernanceItem] = useState<{
    video?: string;
    title: string;
    content: string;
  } | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeDesktopItem, setActiveDesktopItem] = useState<number>(0);
  const [activeVideo, setActiveVideo] = useState<string>(() => {
    const t =
      governanceTabs.find((g) => g.value === "api") ?? governanceTabs[0];
    return t?.data?.[0]?.video ?? "";
  });

  const tabOptions = [
    { value: "api", label: "API Governance" },
    { value: "data", label: "Data Governance" },
    { value: "ai", label: "AI Governance" },
  ];

  const handleTabSelect = (value: string) => {
    setActiveTab(value);
    setIsDropdownOpen(false);
  };

  const tabs = [
    { id: "api", label: "API Governance" },
    { id: "data", label: "Data Governance" },
    { id: "ai", label: "AI Governance" },
  ];

  const handleAccordionClick = (item: {
    title: string;
    content: string;
    video?: string;
  }) => {
    setSelectedGovernanceItem(item);
    if (item.video) setActiveVideo(item.video);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => {
      setSelectedGovernanceItem(null);
    }, 300);
  };

  const handleDesktopItemClick = (
    index: number,
    item: { title: string; content: string; video?: string },
    tab: { value: string; label: string; data: any[] }
  ) => {
    const isClosing = activeDesktopItem === index;
    if (isClosing) {
      setActiveDesktopItem(0);
      setActiveVideo(tab.data?.[0]?.video ?? "");
    } else {
      setActiveDesktopItem(index);
      setActiveVideo(item.video ?? tab.data?.[0]?.video ?? "");
    }
  };

  useEffect(() => {
    const t =
      governanceTabs.find((g) => g.value === activeTab) ?? governanceTabs[0];
    setActiveVideo(t?.data?.[0]?.video ?? "");
    setActiveDesktopItem(0);
  }, [activeTab]);

  return (
    <div>
      <Hero
        title={strings}
        text="XAPI is the unified governance platform that embeds compliance, control, and visibility across your Data, APIs and AI. By making governance effortless and always-on, XAPI removes friction, reduces risk, and unlocks innovation at scale so your teams can build boldly and grow confidently."
      />

      <section
        style={{
          background: `url("/media/home/accelerate-bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <div id="about" className="relative -top-15" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto  pt-18 lg:pt-30  pb-22 lg:pb-30"
        >
          <div className="flex sm:flex-row flex-col gap-3 justify-between">
            <motion.h1
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className=" max-w-[650px] text-white text-3xl sm:text-[40px] leading-[48px] sm:leading-[54px] tracking-[-3px]  font-artegra-sans-alt-medium "
            >
              The World’s First Unified Governance Platform
            </motion.h1>
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="flex items-center gap-x-5"
            ></motion.div>
          </div>
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 flex-col mt-4 text-base sm:text-lg font-helvetica gap-5 lg:gap-10"
          >
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="flex-1/2"
            >
              <p className="text-white  leading-[26px] sm:leading-[32px] ">
                Xapi is the world’s first unified governance platform with AI
                governance at its core, extending the same rigor across Data and
                APIs. As AI adoption accelerates, organizations face risks
                around bias, explainability, and compliance with evolving
                regulations such as the EU AI Act. Xapi embeds governance
                directly into AI workflows, making model oversight as seamless
                and invisible as API and data governance.
              </p>
            </motion.div>
            <motion.p
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="text-white list-disc leading-[26px] sm:leading-[32px] flex-1/2 space-y-3 lg:space-y-2"
            >
              With real-time monitoring, bias auditing, and responsible AI
              frameworks built in, Xapi ensures enterprises can innovate with
              confidence while staying ahead of regulatory and ethical
              requirements. The result is a governance platform that doesn’t
              slow AI innovation, but accelerates it, keeping trust, compliance,
              and visibility always-on.
            </motion.p>
          </motion.div>
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="w-fit"
          >
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </section>
      <ChatWithAI hideInput />
      <section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto pt-17   xl:pt-28  lg:pb-10 "
        >
          <h2
            // variants={{
            //   hidden: { y: 20, opacity: 0 },
            //   visible: { y: 0, opacity: 1 },
            // }}
            className="text-3xl sm:text-[44px] leading-[48px] sm:leading-[54px] font-artegra-sans-alt-medium tracking-[-3px] pb-2"
          >
            Key Advantages
          </h2>
          <p
            // variants={{
            //   hidden: { y: 20, opacity: 0 },
            //   visible: { y: 0, opacity: 1 },
            // }}
            className="text-base sm:text-lg text-dark font-helvetica pt-3 pb-10  "
          >
            Experience governance that accelerates innovation instead of slowing
            it down.
          </p>
          <div className="grid h-full xl:grid-cols-3 md:grid-cols-2 gap-5   mb-8 ">
            {platformAdvantages.map((item, index) => (
              <button
                type="button"
                key={index}
                className="relative h-full rounded-[20px] bg-gradient-to-r from-primary to-tertiary p-[1px] group transition-all duration-300 overflow-hidden"
                onClick={() => {
                  sendMessage(
                    `Provide a concise yet insightful overview of **${item.title}: ${item.description}**, explaining its key principles, purpose, and relevance within the context of Platform advantage and XAPI.`
                  );
                }}
              >
                <div className="h-full w-full rounded-[19px] bg-white group-hover:bg-transparent transition-all duration-300">
                  <div className="px-10 pt-10 xl:pb-18 pb-8 relative h-full">
                    <div>
                      <item.icon className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="pt-6 text-left text-[20px] lg:text-[28px] xl:text-[26px] text-dark font-artegra-sans-alt-medium xl:leading-[38px] leading-[30px] tracking-[-1px] group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="pt-5 text-left font-helvetica sm:text-[18px] text-[#5F5F5F] xl:leading-[32px] leading-[26px] group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>
                    <div className="absolute bottom-0 right-0 w-full">
                      <SparklesEffect
                        imageOneStyles="md:h-[8px] h-[8px]"
                        imageTwoStyles="md:h-[9px] h-[9px]"
                        imageThreeStyles="md:h-[14px] h-[15px]"
                        imageOnePosition="md:right-[40px] md:bottom-[23px] right-[29px] bottom-[15px]" // bottom star
                        imageTwoPosition="md:right-[25px] md:bottom-[35px] right-[17px] bottom-[28px]" // top star
                        imageThreePosition="md:right-[30px] md:bottom-[27px] right-[20px] bottom-[19px]" //middle star
                      />
                    </div>
                    <div className="absolute md:right-[20px] right-[12px] md:bottom-[20px] bottom-[12px]  rounded-[56px] md:h-7.5 md:w-7.5 sm:h-7 sm:w-7 h-6 w-6 flex items-center justify-center group-hover:opacity-0 duration-200">
                      <Image
                        src="/media/bluestar.svg"
                        alt="Move Up Right"
                        width={22}
                        height={22}
                      />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </section>
      <section>
        <div className="mb-10 h-full max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
            className=" pt-10   xl:pt-10  "
          >
            <motion.h2
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="text-3xl sm:text-[44px] leading-[42px] sm:leading-[54px] font-artegra-sans-alt-medium tracking-[-3px]"
            >
              Comprehensive Governance Solutions
            </motion.h2>

            <motion.p
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="text-base sm:text-lg text-dark font-helvetica pt-6"
            >
              Unified oversight across your entire digital ecosystem with
              specialized governance for APIs, Data, and AI.
            </motion.p>
          </motion.div>
          {/* before the footer section ajustements YC*/}
          <div>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="mb-18 flex flex-col justify-center items-center  mt-10  sm:mt-11 lg:mt-10"
            >
              {/* Desktop Tabs Header */}
              <TabsList className="hidden md:flex justify-center gap-10 bg-white/10 py-[35px] px-[10px] rounded-[20px] mb-10 shadow-custom">
                {tabs.map((tab, item) => (
                  <TabsTrigger key={item} value={tab.id} asChild>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-4 sm:px-6 py-5 sm:py-6 text-center cursor-pointer relative transition-all duration-300 lg:text-[20px] font-artegra-sans-alt-medium ${
                        activeTab === tab.id
                      }`}
                    >
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="rounded-[15px] absolute inset-0 bg-gradient-to-r from-[#8022B9] via-[#00005B] to-[#513DF4] text-white "
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                          }}
                        />
                      )}{" "}
                      <div
                        className={cn(` z-10 duration-300`, {
                          "text-white": activeTab === tab.id,
                        })}
                      >
                        {tab.label}
                      </div>
                    </button>
                  </TabsTrigger>
                ))}
              </TabsList>
              {/* Mobile Custom Dropdown */}
              <div className="md:hidden mb-10 w-full max-w-md relative ">
                {/* Dropdown Button */}
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-gradient-to-r from-[#8022B9] via-[#00005B] to-[#513DF4] text-white rounded-[15px] py-4 px-6 text-lg font-artegra-sans-alt-medium shadow-md shadow-custom flex justify-between items-center"
                >
                  <span>
                    {
                      tabOptions.find((option) => option.value === activeTab)
                        ?.label
                    }
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Dropdown Options */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[20px] shadow-lg shadow-custom border border-gray-100 overflow-hidden z-10">
                    {tabOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleTabSelect(option.value)}
                        className={`w-full text-left px-6 py-4 text-lg font-artegra-sans-alt-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-[#8022B9]/10 hover:to-[#513DF4]/10 ${
                          activeTab === option.value
                            ? "bg-gradient-to-r from-[#8022B9]/20 to-[#513DF4]/20 text-[#8022B9]"
                            : "text-gray-900"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Backdrop to close dropdown */}
                {isDropdownOpen && (
                  <div
                    className="fixed inset-0 z-0"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                )}
              </div>

              {/* Tabs Content */}
              {governanceTabs.map((tab, index) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="w-full"
                >
                  <div className="flex flex-col xl:flex-row gap-8 md:gap-10 w-full ">
                    {/* Video */}
                    <div className="w-full xl:w-2/3 h-[250px] sm:h-[360px] md:h-[470px] rounded-2xl overflow-hidden bg-[linear-gradient(135deg,_#8022B9,_#00005B,_#513DF4)] border border-[#523EF5]/50">
                      <video
                        src={activeVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-2xl w-full h-full object-cover"
                      />
                    </div>

                    {/* RIGHT SIDE: Dynamic Accordions */}
                    <div className="w-full xl:w-1/3">
                      {/* Mobile: Show accordion with content dropdown */}
                      <Accordion
                        type="single"
                        collapsible
                        defaultValue="item-0"
                        className="mb-3 xl:hidden"
                      >
                        {tab.data.map((item, i) => (
                          <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            className="group"
                          >
                            <AccordionTrigger
                              className="flex justify-between py-3"
                              onClick={() =>
                                setActiveVideo(
                                  item.video ?? tab.data?.[0]?.video ?? ""
                                )
                              }
                            >
                              <div className="flex items-start gap-4">
                                <div className="h-7 w-1.5  bg-[#523EF5]/35 group-data-[state=open]:bg-[#523EF5] transition-colors" />
                                <p className="font-artegra-sans-alt-medium sm:text-[18px] text-[16px] leading-tight sm:mt-0.5 mt-1 ">
                                  {item.title}
                                </p>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-sm text-[#5F5F5F] font-helvetica leading-[30px] pl-4">
                              <ReactMarkdown>{item.content}</ReactMarkdown>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>

                      {/* Desktop/Tablet: Show expandable list */}
                      <div className="hidden xl:block space-y-3 h-[470px] overflow-y-auto pr-2">
                        {tab.data.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={false}
                            animate={{
                              height: activeDesktopItem === i ? "auto" : "auto",
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div
                              onClick={() =>
                                handleDesktopItemClick(i, item, tab)
                              }
                              className={`group cursor-pointer rounded-lg transition-all duration-300 ${
                                activeDesktopItem === i
                                  ? "border border-[#523EF5]/50"
                                  : "hover:bg-gray-50 border border-transparent hover:border-[#523EF5]/20"
                              }`}
                            >
                              <div className="p-3">
                                <div className="flex items-start gap-2.5">
                                  <div
                                    className={`h-5 w-[5px] mt-[4px] transition-colors flex-shrink-0 ${
                                      activeDesktopItem === i
                                        ? "bg-[#523EF5]"
                                        : "bg-[#523EF5]/35 group-hover:bg-[#523EF5]"
                                    }`}
                                  />
                                  <div className="flex-1">
                                    <p
                                      className={`font-artegra-sans-alt-medium text-[18px] lg:text-[19px] leading-tight transition-colors ${
                                        activeDesktopItem === i
                                          ? "text-[#523EF5]"
                                          : "group-hover:text-[#0e0933]"
                                      }`}
                                    >
                                      {item.title}
                                    </p>
                                    <motion.div
                                      initial={false}
                                      animate={{
                                        height:
                                          activeDesktopItem === i ? "auto" : 0,
                                        opacity:
                                          activeDesktopItem === i ? 1 : 0,
                                      }}
                                      transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                      }}
                                      className="overflow-hidden"
                                    >
                                      <div className="text-[#5F5F5F] font-helvetica text-[15px] lg:text-[16px] leading-[26px] mt-3">
                                        <ReactMarkdown>
                                          {item.content}
                                        </ReactMarkdown>
                                      </div>
                                    </motion.div>
                                  </div>
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`transform transition-transform duration-300 flex-shrink-0 mt-1 ${
                                      activeDesktopItem === i
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  >
                                    <path
                                      d="M5 7.5L10 12.5L15 7.5"
                                      stroke={
                                        activeDesktopItem === i
                                          ? "#523EF5"
                                          : "#5F5F5F"
                                      }
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
      <section>
        <div className="relative ">
          <div className="absolute w-full bg-[#161616] bottom-0 h-1/2 "></div>
          <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto xl:pt-14">
            <div
              style={{
                background: `url("/media/home/footer-bg.png")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="h-full w-auto sm:px-20 sm:py-16 px-5 py-8 rounded-[40px] flex relative overflow-hidden"
            >
              <div className="flex flex-col justify-between xl:max-w-5xl max-w-3xl lg:items-start items-center">
                <h2 className="text-white sm:text-[40px] text-3xl font-artegra-sans-alt-medium lg:text-left text-center">
                  See How XAPI Makes Governance <br />
                  Effortless
                </h2>
                <p className="text-white text-base font-helvetica leading-[25px] lg:max-w-[630px] max-w-xl mt-5 lg:text-left text-center">
                  Book a demo or start your free trial today and experience
                  governance as a growth enabler, not a bottleneck.
                </p>
                <div className="flex flex-col sm:mt-25 mt-17.5 gap-5 sm:flex-row">
                  <Link href={configs?.signInUrl ?? "#"}>
                    <button className="group px-12 py-3.5 bg-white hover:bg-gradient-to-r hover:from-tertiary hover:via-secondary hover:to-primary  font-bold rounded-[5px] cursor-pointer">
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary via-secondary to-primary  group-hover:text-white font-helvetica text-lg">
                        Start Free Trial
                      </div>
                    </button>
                  </Link>
                  <button className=" px-5.5 py-2.5 text-white hover:text-tertiary border-white hover:bg-white border-[1px] rounded-[5px]  leading-[26px] sm:leading-[32px] font-helvetica text-base lg:text-lg font-bold cursor-pointer">
                    <Link href="/contact" className="cursor-pointer">
                      Book Demo
                    </Link>
                  </button>
                </div>
              </div>
              <div className=" absolute h-full w-fit top-0 right-0 ">
                <Image
                  src="/media/home/footer.png"
                  alt="XAPI footer image"
                  width={400}
                  height={400}
                  className=" object-cover h-full w-auto max-w-2xl xl:opacity-100 lg:opacity-50 opacity-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
