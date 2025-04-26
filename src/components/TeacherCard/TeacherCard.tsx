import TeacherAvatar from "components/TeacherAvatar/TeacherAvatar";
import ToggleFavorite from "components/ToggleFavorite/ToggleFavorite";
import { Teacher } from "shared/types/Teacher";

const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
    
  return (
    <li
      data-aos="fade-up"
      className="bg-white dark:bg-dark-light flex flex-col desktop:flex-row gap-12 p-6 rounded-3xl relative"
    >
      <TeacherAvatar teacher={teacher} />
      <ToggleFavorite
        teacher={teacher}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
    </li>
  );
};

export default TeacherCard;
