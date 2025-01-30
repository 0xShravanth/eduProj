import AdminImg from "../assets/admin 1.png";
import PrincipalImg from "../assets/ceo 1.png";
import TeacherImg from "../assets/teacher 2.png";
import StudentImg from "../assets/student 1.png";
import ParentsImg from "../assets/parents 1.png";

const Features = () => {
  const features = [
    {
      title: "School admin & Fees admin",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: AdminImg,
    },
    {
      title: "Principal login",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: PrincipalImg,
    },
    {
      title: "Teacher login",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: TeacherImg,
    },
    {
      title: "Student Login",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: StudentImg,
    },
    {
      title: "Parents Login",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: ParentsImg,
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Save your time with a lot of features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
