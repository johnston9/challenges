import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
import Content from "./components/Content";
// import NavBarSimple from "./components/NavBarSimple";
// import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <Content />
      {/* <SearchBar /> */}
    </div>
  );
}

export default App;