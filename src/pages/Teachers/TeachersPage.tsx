import LoadMoreButton from "components/LoadMoreButton/LoadMoreButton";
import TeachersFilters from "components/TeachersFilters/TeachersFilters";
import TeachersList from "components/TeachersList/TeachersList";

const TeachersPage = () => {
  return (
    <main>
      <TeachersFilters filters={{}} setFilters={() => {}} teachers={[]} />
      <TeachersList />
      <LoadMoreButton hasMore={false} onLoadMore={() => {}}/>
    </main>
  );
};

export default TeachersPage;
