import { KanbanBoard } from './components/index';
import { KanbanProvider } from './contexts/KanbanContext';
import { handleLogin } from './services/api';

await handleLogin();

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
