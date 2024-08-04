import Container from "../container";
import Button from "../button";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="relative bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 w-full h-[200vh]"
      >
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src="/posters/escalator.jpg"
          alt=""
        />
      </motion.div>

      <Container className="relative z-10 pb-7 min-h-[--hero-height] flex flex-col justify-end items-start">
        <motion.div
          className="flex h-full flex-col items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="text-5xl font-bold mb-10">
            Your Journey To Success Starts With <br />
            Our Customized Talent Strategies.
          </h1>
          <Button className="mb-16" size="large">
            Submit Resume
          </Button>
          <p className="font-semibold">
            success comes from our tech and human-focused strategy, whether
            on-site or online
          </p>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
