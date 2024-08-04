import Container from "../container";
import { useState } from "react";
import FadeIn from "../fade-in";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: FAQItem[] = [
  {
    question: "Do I need to pay to use your services?",
    answer:
      "No, our services are free for job seekers. We are paid by employers who hire through us.",
  },
  {
    question: "What types of roles do you recruit for?",
    answer:
      "We recruit for a variety of positions across the industry, ranging from entry-level to executive roles.",
  },
  {
    question: "What should I include in my resume?",
    answer:
      "Your resume should include a summary of your skills, experience, education, and any relevant achievements. Tailoring your resume to highlight how your experience matches the role you're applying for can also be beneficial.",
  },
  {
    question: "Can you help with career advice and CV writing?",
    answer:
      "Yes, we offer career advice and CV writing services to help you present your best self to potential employers.",
  },
  {
    question: "How often should I update my profile with your agency?",
    answer:
      "It’s a good idea to update your profile whenever you gain new skills or experience, or if you’re looking for new opportunities. Regular updates help us match you with the most relevant roles.",
  },
  {
    question: "How do you find candidates?",
    answer:
      "We use a variety of methods including our extensive database, job boards, social media, and targeted headhunting. We also leverage our network and industry connections to find top talent.",
  },
  {
    question: "How do you ensure the quality of candidates?",
    answer:
      "We employ a rigorous screening process that includes interviews, reference checks, and skills assessments to ensure candidates meet your specific requirements and fit your company culture.",
  },
];

function QnA() {
  const [isOpen, setIsOpen] = useState<boolean[]>(
    Array(FAQ.length).fill(false)
  );

  const handleToggle = (index: number) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <Container className="min-h-[100svh]">
      <div className="container mx-auto mt-10">
        <FadeIn>
          <h1 className="text-5xl font-bold text-center mb-8">
            Have Questions? Answers.
          </h1>
        </FadeIn>
        <FadeIn>
          <div className="grid grid-cols-1 gap-4">
            {FAQ.map((item, index) => (
              <div
                key={index}
                className="rounded-md p-4 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{item.question}</h2>
                  <svg
                    className={`w-6 h-6 ${
                      isOpen[index] ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {isOpen[index] && (
                  <p className="mt-2 text-gray-700">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}

export default QnA;
