
const amenities = [
  {
    image: "/spitual.jpg",
    title: "Spiritual",
    desc: "Nearby spiritual landmarks include the Melmaruvathur Adhiparasakthi Temple, Church and a local mosque. ",
    points: [
      "Melmaruvathur Adhiparasakthi Temple - 8 mins away",
      "Mazhai Madha Shrine - 8 mins",
      "Arulmigu Perumber Kandigai Murugan Temple - 15 mins",
      "Masjid E Noor, NH 45 Melmaruvathur Mosque - 10 mins"],
    reverse: false,
  },
  {
    image: "/hospital.jpg",
    title: "Health & Wellness",
    desc: "For health and wellness needs, the area offers convenient access to Melmaruvathur Adhiparasakthi Institute of Medical Sciences and Hospital, and various wellness centers.",
    points: [
      "Adhiparasakthi Institute of Medical Sciences Research & Hospital - 3 mins ",
      "Adhiparasakthi Dental College and Hospital - 5 mins"],
    reverse: true,
  },
  {
    image: "/theatre.jpg",
    title: "Entertainment",
    desc: "Om Shakti Avenue is conveniently located near Sri Balaji Theatre, along with 20+ supermarkets and clothing stores for all your shopping needs. ",
    points: [
      "Sri Balaji Theatre - 3 mins"],
    reverse: false,
  },
  {
    image: "/college.webp",
    title: "Education",
    desc: "Om Shakti Avenue offers proximity to premier educational institutions.",
    points: [
      "Adhiparasakthi Institute of Medical Sciences Research - 3 mins ",
      "Adhiparasakthi Dental College and Hospital - 5 mins ",
      "Adhiparasakthi Engineering College - 5 mins ",
      "Adhiparasakthi Polytechnic College - 6 mins ",
      "Adhiparasakthi College of Arts and Science - 5 mins ",
      "Adhiparasakthi College of Engineering - 5 mins ",
      "Adhiparasakthi Agricultural College - 5 mins ",
      "Adhiparasakthi Matriculation Higher Secondary School - 9 mins"],
    reverse: true,
  },
];

export default function Amenities() {
  return (
    <section className="w-full py-16 bg-white" id="amenities">
      <div className="container mx-auto px-4 md:px-0 xl:px-20 2xl:px-32">
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3 font-sans">
            Exceptional Amenities Just Moments Away!
          </h2>
          <h3 className="text-navy/90 text-lg mb-3 font-semibold font-sans">Step into convenience</h3>
          <p className="text-base text-navy/80 max-w-2xl mx-auto">
            Discover the ultimate comfort of living at Om Shakti Avenue in Melmaruvathur, where essential amenities are just a stone’s throw away.
          </p>
        </div>
        <div className="flex flex-col gap-14">
          {amenities.map((am, idx) => (
            <div key={am.title}
              className={`flex flex-col md:flex-row ${
                am.reverse ? "md:flex-row-reverse" : ""
              } items-center gap-8 md:gap-16 animate-fade-in`}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="flex-shrink-0 w-full md:w-2/5">
                <img
                  src={am.image}
                  alt={am.title}
                  className="rounded-xl w-full object-cover shadow-md border border-gray-100 aspect-video"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl md:text-2xl font-semibold text-navy mb-2">{am.title}</h4>
                <p className="text-navy/80 text-base md:text-lg">{am.desc}</p>
                {am.points && (
                  <ul className="list-disc list-inside text-navy/80 text-base md:text-lg mt-2">
                    {am.points.map((point, index) => (
                      <li key={index} className="mb-1">{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
