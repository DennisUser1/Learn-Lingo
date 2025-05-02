

const FavoritesPage: React.FC = () => { 

    return (
        <main className="container m-auto flex flex-col pb-4 pt-4 px-4 tablet:pb-8 tablet:px-8 desktop:px-32">
            <ul className="flex flex-col gap-8 mb-16">
                {favoriteTeachers.map((teacher) => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
            </ul> 
        </main>
    )
}

export default FavoritesPage;