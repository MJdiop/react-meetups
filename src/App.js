import Backdrop from './components/Backdrop';
import Modal from './components/Modal';
import Todo from './components/Todo';

function App() {
  return (
    <>
      <h1>My Todos</h1>
      <Todo title="Lear React !!!" />
      <Modal />
      <Backdrop />
    </>
  );
}

export default App;
