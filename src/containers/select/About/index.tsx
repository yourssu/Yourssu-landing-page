import useAboutDetail from './hook';

function About() {
  const { imgData, aboutDescription } = useAboutDetail();
  return (
    <div>
      <img
        src={imgData.aboutImgData.publicURL}
        alt={imgData.aboutImgData.name}
      />
      <div>
        <span>ABOUT YOURSSU</span>
        <p>
          유어슈는 어려분의 더 나은 <br /> 캠퍼스라이프를 위해 달립니다.
        </p>
        {aboutDescription.map((value, index) => {
          return (
            <div key={index!}>
              <img
                src={imgData.listImgData.publicURL}
                alt={imgData.listImgData.name}
              />
              <p>{value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
