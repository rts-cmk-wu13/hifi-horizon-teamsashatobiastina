export default function Newsletter() {
  return (
    <div className="py-12 bg-ElmBg m-0 shadow-lg">
      <div className="text-center mb-7">
        <h1 className="font-medium text-3xl">SIGN UP FOR OUR NEWSLETTER</h1>
        <p className="text-lg font-normal">
          Subscribing to our newsletter secures you up to date information about HiFi Horizons latest updates and offers.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-7">
        <input
          type="text"
          className="bg-BtnLightGrey px-6 py-2.5 rounded-sm shadow-md w-full sm:w-auto"
          placeholder="Enter your email"
        />
        <button className="bg-BtnOrange font-light text-white px-8 py-2 rounded-sm shadow-md border-none">
          Sign up
        </button>
      </div>
    </div>
  );
}



