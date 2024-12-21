import type { MDXComponents } from "mdx/types";
import { ComponentPropsWithoutRef } from "react";
import { Permanent_Marker } from "next/font/google";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
// type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const permanent_marker = Permanent_Marker({
  style: ["normal"],
  weight: ["400"],
  variable: "--font-permanent-marker",
});

const customComponents = {
  h1: (props: HeadingProps) => (
    <h1
      className={`${permanent_marker.className} mt-2 scroll-m-20 text-4xl font-bold tracking-tight`}
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className={`${permanent_marker.className} mt-10 scroll-m-20 border-b border-b-slate-200 pb-1 text-3xl font-semibold tracking-tight first:mt-0`}
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className={`${permanent_marker.className} mt-8 scroll-m-20 text-2xl font-semibold tracking-tight`}
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4
      className={`${permanent_marker.className} mt-8 scroll-m-20 text-xl font-semibold tracking-tight`}
      {...props}
    />
  ),
  p: (props: ParagraphProps) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="my-6 ml-6 list-decimal" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="text-gray-800 list-disc pl-5 space-y-1" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
      {...props}
    />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customComponents,
    ...components,
  };
}
