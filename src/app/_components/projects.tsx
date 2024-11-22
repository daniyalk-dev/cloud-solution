import { Project } from "@/interfaces/common";
import ProjectList from "./projectList";

const Projects = () => {
  const PROJECTS: Project[] = [
    {
      title: "AMMI",
      logo: "ammi.png",
      bg: "ammi-bg.png",
      desc: "Duke University, UNC-Chapel Hill, and Wake Forest University tackle Maternal Morbidity and Mortality with AI-Powered Projects. InNeed collaborated to utilize data analytics for a safer pregnancy journey.",
      headline:
        "Safer Pregnancy Journey, Maternal Morbidity and Mortality, Health Technology, Healthcare",
    },
    {
      title: "IPICS",
      logo: "ipics.svg",
      bg: "ipics-bg.png",
      desc: "Breakthrough Innovation: InNeed collaborates with UTHSCSA to develop iPICS, enhancing communication and support for prostate cancer patients and their families.",
      headline:
        "UNC, Prostate Cancer Support, Healthcare Technology, Cancer Care, Health Technology",
    },
    {
      title: "augmedix",
      logo: "augmedix.png",
      bg: "augmedix-bg.png",
      desc: "Augmedix Bangladesh Automates Hiring with InNeed's AI-Powered Solution, minimizing bias and boosting efficiency in the recruitment process.",
      headline: "Health Technology, Automated Recruitment, AI in Hiring",
    },
    {
      title: "Home Grown",
      logo: "homegrown.png",
      bg: "homegrown-bg.png",
      desc: "UNC Chapel Hill health researcher teamed up with InNeed to address children's nutrition and physical habits using advanced technology and cloud computing. Home Grown is being developed for children with Down syndrome.",
      headline: "Healthcare, AWS All Cloud, UI/UX, Health Technology",
    },
    {
      title: "TrMIS",
      logo: "trmis.png",
      bg: "trmis-bg.png",
      desc: "JSI Transforms Tuberculosis Training with InNeed's TrMIS, Streamlining Processes, Enhancing Training, and Gaining Useful Insights.",
      headline:
        "Training Management System, Tuberculosis Training, Health Technology",
    },
  ];

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-8 mb-16">
      <div className="mb-8 sm:mb-24 md:mb-28 lg:mb-10">
        <div className="mb-2 md:mb-6 lg:mb-3 text-base sm:text-lg md:text-2xl lg:text-xl font-semibold text-bgPrimary uppercase">
          our projects
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium">
          Success Stories Built With InNeed
        </h2>
      </div>
      <ProjectList projects={PROJECTS} />
    </section>
  );
};

export default Projects;
