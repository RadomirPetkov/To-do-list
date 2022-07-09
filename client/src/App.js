import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TodoList } from './components/TodoList'
import { LoadingSpinner } from './components/LoadingSpinner';

function App() {
  return (
    <div>
      <Header />

      <main class="main">

        <section class="todo-list-container">
          <h1>Todo List</h1>

          <div class="add-btn-container">
            <button class="btn">+ Add new Todo</button>
          </div>
          {/* <LoadingSpinner /> */}
          <TodoList />
        </section>
      </main>

      <Footer />

    </div >
  );
}

export default App;
