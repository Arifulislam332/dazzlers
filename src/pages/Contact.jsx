const Contact = () => {
  return (
    <div className="container mx-auto px-5 py-20 sm:px-20">
      <form className="max-w-lg mx-auto flex flex-col gap-5 text-center mt-20">
        <h2 className="text-3xl font-medium text-gray-700">
          Enter your information
        </h2>

        <div className="form__control flex flex-col gap-2.5 items-start ">
          <label
            htmlFor="fullName"
            className="cursor-pointer hover:text-gray-700 transition font-medium"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Black Berry"
            className="outline-none border p-5 w-full rounded-xl focus:border-black/50 transition"
          />
        </div>

        <div className="form__control flex flex-col gap-2.5 items-start ">
          <label
            htmlFor="number"
            className="cursor-pointer hover:text-gray-700 transition font-medium"
          >
            Contact
          </label>
          <input
            type="number"
            id="number"
            placeholder="+81 000 00"
            className="outline-none border p-5 w-full rounded-xl focus:border-black/50 transition"
          />
        </div>
        <div className="form__control flex flex-col gap-2.5 items-start ">
          <label
            htmlFor="email"
            className="cursor-pointer hover:text-gray-700 transition font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="user1234@gmail.com"
            className="outline-none border p-5 w-full rounded-xl focus:border-black/50 transition"
          />
        </div>

        <div className="form__control flex flex-col gap-2.5 items-start ">
          <label
            htmlFor="comment"
            className="cursor-pointer hover:text-gray-700 transition font-medium"
          >
            Comment
          </label>
          <textarea
            id="comment" rows={10}
            className="outline-none border w-full rounded-xl focus:border-black/50 transition"
          ></textarea>
        </div>

        <button type="submit" className="btn__form">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
