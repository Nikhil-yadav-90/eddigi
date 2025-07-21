import Link from 'next/link'
const ContactInfo = () => {
  return (
    <div className="bg-white shadow-xl rounded-xl px-8 py-10 w-[70%] max-w-6xl flex flex-col md:flex-row items-center justify-between border border-gray-200">
      <div className="text-left max-w-xl mb-6 md:mb-0">
        <h2 className="text-4xl font-extrabold text-black mb-4">Contact Info</h2>
        <p className="text-gray-700 text-lg">
          Reach out to us for any inquiries or support. We’re here to help you on your learning journey.
        </p>
      </div>
      <Link href='/contact-us/'>
      <button className="bg-[#0C144C] text-white text-2xl font-semibold py-4 px-10 rounded-2xl hover:ring-black transition hover:text-actionbutton hover:bg-foreground shadow-md">
        Join Us
      </button>
      </Link>
    </div>
  );
};

export default ContactInfo;
