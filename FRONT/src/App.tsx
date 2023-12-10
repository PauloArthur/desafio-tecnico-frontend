import { Navbar, Board } from './components/index';
import { ThemeProvider } from './contexts/ThemeProvider';
import { KanbanProvider } from './contexts/KanbanProvider';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <KanbanProvider>
        <Navbar />
        <Board />
      </KanbanProvider>
    </ThemeProvider>
  );
}

export default App;
