

function EditCourseInfo() {
    return ( 
        <>
            <h2>Редагування інформації курсу</h2>
            <form>
                <div>
                    <label htmlFor="title">Назва курсу:</label>
                    <input type="text" id="title" name="title" />
                </div>
                <div>
                    <label htmlFor="description">Опис курсу:</label>
                    <textarea id="description" name="description" rows={4} />
                </div>
                <div>
                    <label htmlFor="category">Категорія:</label>
                    <input type="text" id="category" name="category" />
                </div>
                <button type="submit">Зберегти зміни</button>
            </form>
        </>
     );
}

export default EditCourseInfo;