import LoadMoreButton from "components/LoadMoreButton/LoadMoreButton";
import TeachersFilters from "components/TeachersFilters/TeachersFilters";

const TeachersPage = () => {
  return (
    <main>
      <TeachersFilters filters={{}} setFilters={() => {}} teachers={[]} />
      <LoadMoreButton hasMore={false} onLoadMore={() => {}}/>
    </main>
  );
};

export default TeachersPage;
