const Culture = () => {
  return (
    <section id="culture" className="container mx-auto px-4 sm:px-8 mb-16">
      <div className="mb-8 sm:mb-24 md:mb-28 lg:mb-10">
        <div className="mb-2 md:mb-6 lg:mb-3 text-base sm:text-lg md:text-2xl lg:text-xl font-semibold text-bgPrimary uppercase">
          our culture
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium">
          Dive into our vibrant workplace culture.
        </h2>
      </div>
      <iframe
        className="w-full aspect-video border-0"
        title="Intro Video"
        src="https://www.youtube.com/embed/a1B-ckPGU4I"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default Culture;
