function Medium() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="h3 md:body4 sm:body4 xs:body4 text-black-0">Medium</div>
        <div className="body3 md:body7 sm:body7 xs:body7 text-gray1-0">
          쓴 블로그 글입니다. 어쩌구
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="h4">제목을 입력해주세요.</div>
        <div className="body3">
          내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을
          입력하세요. 내용을 입력하세요.
        </div>
      </div>
    </section>
  );
}

export default Medium;
