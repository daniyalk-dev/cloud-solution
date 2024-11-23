import ServicesMenu from "./servicesMenu";
import { Service } from "@/interfaces/common";
import CloudServicesIcon from "@/assets/images/services/cloud-services.png";
import DesignServicesIcon from "@/assets/images/services/design-services.png";
import DevServicesIcon from "@/assets/images/services/dev-services.png";
import DevOpsServicesIcon from "@/assets/images/services/devops-services.png";
import ITConsultingServicesIcon from "@/assets/images/services/it-consulting-services.png";
import ProServicesIcon from "@/assets/images/services/pro-services.png";
import ManagedServicesIcon from "@/assets/images/services/managed-services.png";

const Services = () => {
  const SERVICES: Service[] = [
    {
      label: "cloud services",
      href: "#cloud-services",
      icon: CloudServicesIcon,
      subServices: [
        {
          title: "All Cloud Adoption",
          desc: "Simplify and automate your cloud journey on AWS with InNeed, an AWS Advanced Tier Services Partner. Our experts help you  manage your cloud resources, automate daily tasks, and optimize costs, so you can focus on what matters most. Reduce your capital expenditure by 30% and foster agile development. Start your cloud journey today!",
        },
        {
          title: "Cloud Platform Assessment & Maintenance",
          desc: "Our technical consultants dive deep into your cloud platform, focusing on expenditure, application modernization, and enhanced customer experience. We ensure unwavering security, giving you the confidence to capitalize on advanced cloud solutions.",
        },
        {
          title: "Cloud Migration",
          desc: "Embark on a cloud migration journey built for success. We meticulously plan and execute the migration following industry best practices, maintaining top-tier security at every step, including post-migration support. We offer migrations from on-premises to cloud and even cloud-to-cloud.",
        },
        {
          title: "Cloud Foundation",
          desc: "Build a robust cloud foundation with our diverse cloud technologies with inNeed. We enhance efficiency, accelerate product time-to-market, and specialize in creating cost-optimized, secure systems with a client-focused approach.",
        },
        {
          title: "Cloud Governance",
          desc: "Ensure effective cloud governance with our expertise in developing cost-effective solutions, delivering cutting-edge technology, and building fault-tolerant, scalable infrastructures. We craft future-proof solutions, guarantee advanced security, and ensure operational excellence.",
        },
        {
          title: "Cloud Security and Compliance",
          desc: "Protect your cloud infrastructure with our robust security measures, ensuring compliance with industry standards. Our solutions provide advanced security features, safeguarding your data and ensuring a secure and compliant cloud environment.",
        },
        {
          title: "Cloud Cost Optimization",
          desc: "Optimize your cloud costs with our strategic approach, balancing on-demand pricing and reducing capital expenditure. Our experts focus on application modernization, ensuring cost efficiency without compromising performance.",
        },
        {
          title: "Serverless Computing",
          desc: "Scale instantly, and pay only for success. Embrace serverless freedom with flexible pricing and efficient architectures. Focus on code; leave infrastructure to us. Unlock your application's full potential.",
        },
      ],
    },
    {
      label: "devOps services",
      href: "#devops-services",
      icon: DevOpsServicesIcon,
      subServices: [
        {
          title: "CI/CD",
          desc: "Shorten development cycles and get new features to users faster with our streamlined CI/CD process. We automate repetitive tasks like builds, tests, and deployments, freeing up your team to focus on what matters most -  delivering exceptional software experiences.",
        },
        {
          title: "Infrastructure as Code",
          desc: "Automate your AWS infrastructure with our IaC expertise. Terraform and Ansible power our daily deployments, ensuring consistent, scalable environments on AWS. This frees you to focus on innovation, not infrastructure management.",
        },
        {
          title: "Monitoring Metrics",
          desc: "Leverage our real-time monitoring solutions powered by Prometheus and Grafana. We provide actionable insights, allowing you to proactively address issues and ensure optimal performance for your applications and infrastructure.",
        },
        {
          title: "Containerization Strategies",
          desc: "Unlock the potential of Docker and Kubernetes through our containerization strategies. We facilitate seamless application scaling, optimizing cloud-native architecture to suit your needs, ensuring efficient daily operations.",
        },
        {
          title: "Holistic Security Integration",
          desc: "We ensure compliance and security throughout development. InNeed leverages automation for efficient day-to-day operations, ensuring smooth functioning of applications and infrastructure while focusing on exceptional support and proactive maintenance.",
        },
      ],
    },
    {
      label: "design services",
      href: "#design-services",
      icon: DesignServicesIcon,
      subServices: [
        {
          title: "UI/UX Design",
          desc: "Your brand, your customers, your unique design challenges. We tailor UI/UX solutions to solve them all quickly and efficiently.",
        },
        {
          title: "Web Design",
          desc: "Your website should convert, not confuse your visitors. A perfect blend of good user experience and aesthetic design can ignite growth - we will help you get there.",
        },
        {
          title: "Mobile App Design",
          desc: "Is your app design costing you users? Bad UX and weird pop-ups give them a hard time. You need to act fast before they delete it for good. We can solve this for you.",
        },
        {
          title: "MVP Development",
          desc: "Turn your product dream into reality in a month! Get expert MVP development services to validate and refine your idea all in one place.",
        },
        {
          title: "SaaS Design",
          desc: "Is your SaaS churn rate sky-high? Users leave for poor design and sluggish performance. Turn traffic into SaaS subscribers with our data-driven design revamp.",
        },
        {
          title: "UX Audit",
          desc: "We uncover frustrations and identify opportunities to improve your user experience through a comprehensive UX Audit. Our actionable insights will help you optimize your product and delight your users.",
        },
      ],
    },
    {
      label: "development services",
      href: "#development-services",
      icon: DevServicesIcon,
      subServices: [
        {
          title: "Software Development",
          desc: "We are code alchemists, transforming complex requirements into elegant, secure software. We prioritize quality, rewriting messy code, and building rock-solid solutions for your business.",
        },
        {
          title: "Mobile Application Development",
          desc: "We craft mobile apps that elevate your brand and empower users—our passion for innovation fuels quick additions and future-proofs your app for a dynamic market.",
        },
        {
          title: "Web Development",
          desc: "We design web experiences that captivate and convert. Our user-centric approach begins with detailed SRS and BRD, ensuring a clear vision, seamless collaboration, and iterative development.",
        },
      ],
    },
    {
      label: "professional services",
      href: "#professional-services",
      icon: ProServicesIcon,
      subServices: [
        {
          title: "Data & Analytics",
          desc: "Unearth actionable insights from diverse data sources with our ML models. Make informed decisions, boost agility, and gain a competitive edge.",
        },
        {
          title: "Agile Business Analysis",
          desc: "Identify problems, create solutions, and communicate effectively. Stay adaptable and responsive with our rapid feedback loops and agile approach.",
        },
        {
          title: "Product Engineering & UI/UX",
          desc: "Elevate user experiences with empathetic design, multimodal interactions, and cutting-edge front-end expertise. Deliver software that resonates with your audience.",
        },
        {
          title: "Software & Application Development",
          desc: "Using advanced technologies, get cost-effective, fault-tolerant, and scalable solutions. Future-proof your applications with enhanced security and operational excellence.",
        },
        {
          title: "DevOps & Automation",
          desc: "Accelerate innovation, enhance security, and boost agility with our DevOps and automation expertise. Leverage full-service cloud infrastructure management for tailored, cost-optimized systems.",
        },
        {
          title: "QA & Testing",
          desc: "Ensure software reliability with comprehensive testing frameworks. Achieve advanced security and operational excellence, and future-proof your solutions. Reduce time to market with cost-effective and cutting-edge testing.",
        },
      ],
    },
    {
      label: "IT consulting services",
      href: "#it-consulting-services",
      icon: ITConsultingServicesIcon,
      subServices: [
        {
          title: "Strategic Advisory Services",
          desc: "Embark on a tailored digital transformation journey with our expert guidance. We provide insights and strategies aligning your IT initiatives with overarching business goals, ensuring a future-proof approach that maximizes potential and leads industry revolutions.",
        },
        {
          title: "Technical Definition Expertise",
          desc: "Master cloud adoption intricacies, bridging the gap between business vision and technical execution. Our expertise ensures seamless cloud integration, optimal infrastructure design, and unification of data silos for actionable insights.",
        },
        {
          title: "Operations Optimization Solutions",
          desc: "Enhance operational efficiency and reduce costs with cutting-edge tools and automation. We streamline operations, maximize productivity, and build a resilient IT ecosystem for continuous, secure, and compliant performance.",
        },
        {
          title: "Implementation Plan Services",
          desc: "Navigate your transformation journey precisely through our crafted roadmap. Minimize disruptions, ensure smooth adoption, and empower your team with skills to thrive in the evolving digital landscape.",
        },
      ],
    },
    {
      label: "managed services",
      href: "#managed-services",
      icon: ManagedServicesIcon,
      subServices: [
        {
          title: "Managed Cloud Service",
          desc: "Elevate your business by entrusting us, an AWS Advanced Tier Services Partner, with your cloud infrastructure. We manage your infrastructure, security, and operations, allowing you to focus on innovation. Access scalability, elasticity, and cost-efficiency across major cloud platforms.",
        },
        {
          title: "Managed IT Security",
          desc: "Safeguard your business with our comprehensive Managed IT Security. Rest assured, your data is safe. We proactively monitor, detect, and respond to threats 24/7, keeping your IT environment secure and compliant.",
        },
        {
          title: "Managed Data Backup and Recovery",
          desc: "Never lose precious data again. We automate backups and ensure rapid recovery, safeguarding your business continuity from any disruptions.",
        },
        {
          title: "Managed Hosting Services",
          desc: "Say goodbye to server headaches. We provide reliable, secure hosting for your applications and websites, freeing up your resources for strategic tasks.",
        },
        {
          title: "Managed Application & Support Services",
          desc: "Focus on your core business, not your apps. We manage your applications throughout their lifecycle, from deployment to ongoing maintenance and support.",
        },
        {
          title: "Managed DevOps Services",
          desc: "Accelerate your software delivery with expert DevOps. We automate CI/CD pipelines, manage infrastructure, and optimize performance, thus prioritizing your success by guiding you through migrating legacy workloads to the cloud.",
        },
      ],
    },
  ];
  return (
    <section
      id="services"
      className="container mx-auto px-4 sm:px-16 md:py-8 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-3"
    >
      <ServicesMenu services={SERVICES} />
    </section>
  );
};

export default Services;
