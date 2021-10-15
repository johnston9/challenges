import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
// import ContentHooks from "./components/ContentHooks";
// import Content from "./components/Content";
// import NavBarSimple from "./components/NavBarSimple";
// import SearchBar from "./components/SearchBar";
// import ContentAPI from "./components/ContentAPI";
import ContentAPIHooks from "./components/ContentAPIHooks";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <ContentAPIHooks />
      {/* <SearchBar /> */}
    </div>
  );
}

export default App;