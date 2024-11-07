"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";

const OrgLogo = () => (
  <Image
    src="/images/o.jpg"
    alt="Logo"
    width={500} // Set the width
    height={300}
    className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
  />
);

const Skeleton = () => <h1></h1>;

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    image: "/images/c.jpg",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    image: "/images/d1.jpg",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    image: "/images/pic.jpg",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    image: "/images/p.jpg",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    image: "/images/d.jpg",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    image: "/images/c.jpg",
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    image: "/images/pic.jpg",
  },
];

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto p-5">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          orgLogo={<OrgLogo />}
          orgName="ECell"
          orgTagline="Ideate Execute Startup"
          image={item.image}
        />
      ))}
    </BentoGrid>
  );
}
