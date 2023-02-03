import { graphql, useStaticQuery } from 'gatsby';

function Banner() {
  const bannerData = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "image" }) {
        publicURL
        name
      }
    }
  `);
  return (
    <div>
      <div className="h-[600px]">
        <img
          src={bannerData.file.publicURL}
          alt={bannerData.file.name}
          className="object-fill h-full w-full"
        />
      </div>
      <div className="absolute top-72 left-52">
        <span className=" font-normal text-4xl">
          함께 만들어가는 당신의 숭실,
        </span>
        <br />
        <span className=" font-black text-6xl">YOURSSU</span>
      </div>
    </div>
  );
}

export default Banner;
