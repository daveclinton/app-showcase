import { Cpu, Heart, Sprout, type LucideIcon } from "lucide-react";

export const BLOG_COLLECTIONS = [
  "Building Tai Ora",
  "From the Founder",
  "Behind the Technology",
] as const;

export type BlogCollection = (typeof BLOG_COLLECTIONS)[number];

export type PlannedArticle = {
  title: string;
  slug: string;
  part?: number;
  comingSoon?: boolean;
};

export type CollectionDefinition = {
  name: BlogCollection;
  purpose: string;
  description: string;
  icon: LucideIcon;
  articles: PlannedArticle[];
};

export const collectionDefinitions: CollectionDefinition[] = [
  {
    name: "Building Tai Ora",
    purpose:
      "The story behind how Tai Ora evolved and why each part of the platform was created.",
    description:
      "Ideas, moments and decisions behind the Tai Ora ecosystem.",
    icon: Sprout,
    articles: [
      {
        part: 1,
        title: "Why We Built VeeVu",
        slug: "why-we-built-veevu",
      },
      {
        part: 2,
        title: "How One Idea Became Tai Ora",
        slug: "how-one-idea-became-tai-ora",
      },
      {
        part: 3,
        title: "Why We Built iGlo",
        slug: "why-we-built-iglo",
      },
      {
        part: 4,
        title: "Building an Ethical AI Ecosystem",
        slug: "building-an-ethical-ai-ecosystem",
      },
      {
        part: 5,
        title: "What's Next for Tai Ora",
        slug: "whats-next-for-tai-ora",
        comingSoon: true,
      },
    ],
  },
  {
    name: "From the Founder",
    purpose:
      "Personal reflections from founder Tania Pickering.",
    description:
      "Experiences, lessons and people that shaped both the founder and Tai Ora.",
    icon: Heart,
    articles: [
      { title: "How I Think", slug: "how-i-think", comingSoon: true },
      {
        title: "The Woman Behind LydiaGlo",
        slug: "the-woman-behind-lydiaglo",
        comingSoon: true,
      },
      {
        title: "It Was Never Really About AI",
        slug: "it-was-never-really-about-ai",
        comingSoon: true,
      },
    ],
  },
  {
    name: "Behind the Technology",
    purpose:
      "Technical articles explaining how Tai Ora works.",
    description:
      "For developers, investors, partners and anyone seeking a deeper understanding of the technology.",
    icon: Cpu,
    articles: [],
  },
];

export function getCollectionDefinition(collection: BlogCollection) {
  return collectionDefinitions.find(
    (definition) => definition.name === collection,
  );
}
