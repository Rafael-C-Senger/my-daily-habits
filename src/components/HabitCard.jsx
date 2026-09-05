export default function HabitCard({
    id,
    title, 
    goal, 
    completed,
    onShowDetails,
}) {
    return (
        <article className={`habit-card ${completed ? "is-complete":""}`}>
            <div>
                <h2>{title}</h2>
                <p>Meta: {goal}</p>
            </div>

            <span className="habit-status">
                {completed ? "Concluído" : "Em andamento"}
            </span>

            <button type="button" onClick={() => onShowDetails(id)}>
                Detalhes
            </button>
        </article>
    );
}