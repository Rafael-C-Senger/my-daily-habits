import HabitCard from "./HabitCard";

export default function HabitList({ habits }) {
    if (habits.length === 0) {
        return <p>Não há hábitos para exibir.</p>;
    }

    return (
        <section className="habit-list" aria-label="Hábitos de hoje">
            {habits.map((habit) => (
                <HabitCard
                    key={habit.id}
                    title={habit.title}
                    goal={habit.goal}
                    completed={habit.completed}
                />
            ))}
        </section>
    );
}