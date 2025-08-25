interface RecruitLayoutProps {
  children: React.ReactNode;
}

function RecruitSectionLayout({ children }: RecruitLayoutProps) {
  return (
    <section className="flex w-full max-w-[75rem] flex-col gap-10 py-20 xs:px-5 sm:px-5 md:px-5">
      {children}
    </section>
  );
}

export default RecruitSectionLayout;
