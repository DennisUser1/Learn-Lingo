import { Teacher } from "shared/types/Teacher";

const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => {

  return (
    <li
      data-aos="fade-up"
      className="bg-white dark:bg-dark-light flex flex-col desktop:flex-row gap-12 p-6 rounded-3xl relative"
    ></li>
  );
};

export default TeacherCard;
