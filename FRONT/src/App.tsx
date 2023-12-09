import { KanbanBoard } from './components/index';
import { KanbanProvider } from './contexts/KanbanContext';

function App(): JSX.Element {
  return (
    <div className="h-screen p-10">
      <KanbanProvider>
        <KanbanBoard />
      </KanbanProvider>
    </div>
  );
}

export default App;
