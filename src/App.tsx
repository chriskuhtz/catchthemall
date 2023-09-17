import { BoardDisplay } from './components/board/BoardDisplay';
import { boardGenerator } from './testDataGenerators/boardGenerator';

function App() {
	return <BoardDisplay board={boardGenerator()} />;
}

export default App;
