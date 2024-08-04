import Container from "../container";
import FadeIn from "../fade-in";
import Button from "../button";

const Threecol = () => {
  return (
    <Container className="relative z-10 pb-36 text-3xl  text-white md:text-4xl">
      <FadeIn>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className=" rounded-lg shadow-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Review CV</h2>
              <p className="text-lg text-gray-400 mb-6">1 Month Free</p>
              <p className="text-xl">
                Get your resume reviewed by the best in the industry with a
                real-time feedback and ATS report.
              </p>
              <Button size="medium">Check Now</Button>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Employer's Guide
              </h2>
              <p className="text-lg text-gray-400 mb-6">Assistance</p>
              <p className="text-xl">
                Bridge the gap between professionals and businesses, fostering
                relationships that drive success.
              </p>
              <Button size="medium">See Pricing</Button>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Placement Services
              </h2>
              <p className="text-lg text-gray-400 mb-6">MNCs & Startups</p>
              <p className="text-xl">
                We facilitate seamless transitions and long-term success for
                both candidates and employers.
              </p>
              <Button size="medium">Learn More</Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Threecol;
