import { Teacher } from "shared/types/Teacher";

const TeachersList: React.FC<{ teachers: Teacher[] }> = ({ teachers }) => {
  if (!teachers.length) 
    return <p>No teachers found.</p>;
    
 return <ul></ul>;
};

export default TeachersList;
