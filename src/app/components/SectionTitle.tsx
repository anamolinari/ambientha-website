// src/app/components/SectionTitle.tsx
export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <h1 className="py-10 px-4 font-mono font-normal text-xl uppercase tracking-normal leading-none text-ink md:pb-20 md:px-10 ">
        {children}
      </h1>
    </div>
  );
}
