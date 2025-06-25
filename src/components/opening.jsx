export default function Opening() {
  return (
    <section className="bg-black text-white px-4 py-10 sm:px-8">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="space-y-6 w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-semibold text-center lg:text-left">
            What we do
          </h1>
          <p className="text-base sm:text-lg text-center lg:text-left">
            We look forward to customising a system to meet your needs.
          </p>
          <p className="text-base sm:text-lg text-center lg:text-left">
            We don’t favour one manufacturer over another – the only thing we do
            favour is making sure our customers get the right product that suits
            their needs and listening preferences. We will ask many questions in
            order to ensure that what you buy from us is tailored to you and you
            alone.
          </p>
          <p className="text-base sm:text-lg text-center lg:text-left">
            If you are looking for a product not found in our demonstration
            showrooms or our online site, don’t fret as we have access to hundreds
            of brands.
          </p>
          <p className="text-base sm:text-lg text-center lg:text-left">
            One of our biggest pleasures of working in this industry is to see the
            smile on our customers’ faces when they finally hear and see the
            system of their dreams.
          </p>
        </div>

        <div className="space-y-8 w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-semibold text-center lg:text-left">
            Opening hours
          </h1>
          <address className="not-italic text-base sm:text-lg text-center lg:text-left">
            <strong>Edinburgh</strong>
            <br />
            2 Joppa Rd, Edinburgh, EH15 2EU
            <br />
            Monday to Friday: 10:00am - 5:30pm
            <br />
            Saturday: 10:00am - 5:30pm
            <br />
            Sunday: Closed
          </address>
          <address className="not-italic text-base sm:text-lg text-center lg:text-left">
            <strong>Falkirk</strong>
            <br />
            44 Cow Wynd, Falkirk, Central Region, FK1 1PU
            <br />
            Monday to Friday: 10:00am - 5:30pm
            <br />
            Saturday - By appointment only
            <br />
            Sunday: Closed
          </address>
        </div>
      </div>
    </section>
  );
}
