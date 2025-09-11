import React from "react";

interface SectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
}

export default function Section({
  title,
  subtitle,
  children,
  className = "",
  backgroundColor = ""
}: SectionProps) {
  return (
    <section className={`py-12 px-4 ${backgroundColor} ${className} font-avengero text-white`}>
      <div className="max-w-5xl mx-auto">
        {title && <div className="mb-4 text-white text-6xl">{title}</div>}
        {subtitle && <div className="mb-8 text-xl text-white">{subtitle}</div>}
        <div className="text-white">
          {children}
        </div>
      </div>
    </section>
  );
}