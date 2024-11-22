import ServicesMenu from "./servicesMenu";

const Services = () => {
  return (
    <section
      id="services"
      className="container mx-auto px-4 sm:px-16 md:py-8 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-4"
    >
      <ServicesMenu />
    </section>
  );
};

export default Services;
