import { cn } from "@/lib/utils";
import { Bookmark, Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
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
  icon,
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
  icon?: React.ReactNode | string;
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
      return router.push(
        "https://www.linkedin.com/company/djsce-ecell/posts/?feedView=all"
      );
    } else {
      return null;
    }
  };

  const handleRequestBlog = () => {
    if (isClient) {
      return router.push(
        "https://www.linkedin.com/posts/djsce-ecell_globalstartupsclub-ecell-professionalnetworking-activity-7253328433911320576-ao6Q?utm_source=share&utm_medium=member_desktop"
      );
    } else {
      return null;
    }
  };

  const handleRequestButton = () => {
    console.log("Clicked.");
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            onClick={handleRequestBlog}
            src={image}
            alt="BackGround Image"
            width={500}
            height={300}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <div
        className="relative z-10 flex h-full flex-col"
        onClick={handleRequestBlog}
      >
        {header}
        <div className="mt-auto">
          {icon && <div className="mb-2">{icon}</div>}
          {title && (
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-white/80">{description}</p>
          )}
        </div>
      </div>

      <div className="relative z-10 mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3" onClick={handleRequestECell}>
          {orgLogo && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
              {typeof orgLogo === "string" && orgLogo.length === 1 ? (
                <span className="text-lg font-bold">{orgLogo}</span>
              ) : (
                orgLogo
              )}
            </div>
          )}

          {(orgName || orgTagline) && (
            <div className="flex flex-col" onClick={handleRequestECell}>
              {orgName && (
                <span className="text-sm font-medium text-white">
                  {orgName}
                </span>
              )}
              {orgTagline && (
                <span className="text-xs text-gray-300">{orgTagline}</span>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <button
            className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
            onClick={handleRequestButton}
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
            onClick={handleRequestButton}
          >
            <Bookmark className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
