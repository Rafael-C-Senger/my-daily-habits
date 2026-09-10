import "./App.css";
import HabitList from "./components/HabitList";
import Panel from "./components/Panel";
import { initialHabits } from "./data/habits";
import { useState } from "react";
import HabitForm from "./components/HabitForm";

export default function App() {
  const [habits, setHabits] = useState(initialHabits);
  
  const completedCount = habits.filter(
    (habit) => habit.completed,
  ).length;

  function handleAddHabit(newHabit) {
    setHabits((currentHabits) => [...currentHabits, newHabit]);
  }
  

  function handleToggleHabit(habitId) {
    setHabits((currentHabits) =>
      currentHabits.map((habit) => 
        habit.id === habitId
          ? { ...habit, completed: !habit.completed }
          : habit,
        
      ),
    );
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">MY DAILY HABITS</p>
        <h1>Pequenos hábitos, progresso visível.</h1>
        <p>
          {completedCount} de {initialHabits.length} hábitos concluídos.
        </p>
      </header>

      <Panel title="Adicionar hábito">
        <HabitForm onAddHabit={handleAddHabit} />
      </Panel>

      <Panel title="Hábitos de hoje">
        <HabitList 
          habits={habits} 
          onToggle={handleToggleHabit}
        />
      </Panel>
    </main>
  );
}