import Dropdown from "components/Dropdown/Dropdown";

const TeachersFilters = () => {
  return (
    <div className="flex flex-col tablet:flex-row gap-5 mb-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm/tight text-grey font-medium">Languages</p>
        <Dropdown
          options={["All Languages"]}
          value={"All Languages"}
          type="language"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default TeachersFilters;
