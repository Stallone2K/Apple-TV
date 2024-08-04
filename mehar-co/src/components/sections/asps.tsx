import Container from "../container";
import FadeIn from "../fade-in";
import Button from "../button";
// ASPS = Agency Service Provider And Solutions

const Asps = () => {
  return (
    <div>
      {/*  */}
      <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl ">
        <FadeIn>
          <h2 className="text-5xl font-bold">
            Your Success, Our Consultation.
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-xl font-semibold">
            At Mehar Consultants, we specialize in connecting talented
            candidates with the perfect organizational fit. Our mission is to
            bridge the gap between skilled professionals and dynamic companies
            through tailored consulting and strategic networking. <br />
          </p>
        </FadeIn>
        <FadeIn>
          <p className="text-xl font-semibold">
            We meticulously assess each candidate’s strengths and aspirations,
            aligning them with the needs and culture of various organizations to
            foster successful, long-term partnerships. By leveraging our
            extensive network and industry insights, we ensure that both
            candidates and organizations find their ideal match, driving growth
            and achieving excellence together.
          </p>
          <Button className="mt-8 font-semibold" size="medium">
            Learn More
          </Button>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Asps;
