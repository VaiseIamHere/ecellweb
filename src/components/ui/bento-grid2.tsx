"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowUpRightFromSquare, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid w-full gap-4 px-4 sm:px-6 lg:px-8",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
        "auto-rows-fr",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  image,
  orgName,
  orgTagline,
  orgLogo,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  image?: string;
  orgName?: string;
  orgTagline?: string;
  orgLogo?: string | React.ReactNode;
  link?: string;
}) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleRequestECell = () => {
    if (isClient) {
      router.push(
        "https://www.linkedin.com/company/djsce-ecell/posts/?feedView=all"
      );
    }
  };

  const handleRequestBlog = () => {
    if (isClient) {
      router.push(
        "https://www.linkedin.com/posts/djsce-ecell_globalstartupsclub-ecell-professionalnetworking-activity-7253328433911320576-ao6Q?utm_source=share&utm_medium=member_desktop"
      );
    }
  };

  const handleRequestButton = () => {
    console.log("Clicked.");
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white p-4 shadow-input transition-all duration-200 p-3 sm:p-4",
        "hover:shadow-xl hover:scale-[1.02]",
        "dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt="Background Image"
            width={500}
            height={300}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col">
        {header}
        <div className="mt-auto">
          {title && (
            <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-white/90 md:text-base">{description}</p>
          )}
        </div>
      </div>

      <div className="relative z-10 mt-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer transition-opacity hover:opacity-80"
          onClick={handleRequestECell}
        >
          {orgLogo && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white ring-2 ring-white/20">
              {typeof orgLogo === "string" && orgLogo.length === 1 ? (
                <span className="text-lg font-bold">{orgLogo}</span>
              ) : (
                orgLogo
              )}
            </div>
          )}

          {(orgName || orgTagline) && (
            <div className="flex flex-col">
              {orgName && (
                <span className="text-sm font-medium text-white md:text-base">
                  {orgName}
                </span>
              )}
              {orgTagline && (
                <span className="text-xs text-gray-300 md:text-sm">
                  {orgTagline}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <button
            className="rounded-full p-2 text-white transition-colors hover:bg-white/20"
            onClick={handleRequestButton}
          >
            <Bookmark className="h-5 w-5" />
          </button>
          <button
            className="rounded-full p-2 text-white transition-colors hover:bg-white/20"
            onClick={handleRequestBlog}
          >
            <ArrowUpRightFromSquare className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
