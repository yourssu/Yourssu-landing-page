interface RecruitLayoutProps {
  children: React.ReactNode;
}

function RecruitSectionLayout({ children }: RecruitLayoutProps) {
  return (
    <section className="flex w-full flex-col gap-10 px-[120px] py-20 xs:gap-6 xs:px-0 xs:py-10 sm:gap-6 sm:px-0 sm:py-10">
      {children}
    </section>
  );
}

export default RecruitSectionLayout;
