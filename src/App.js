import { JoinUs } from "./components/JoinUs";
import { Settings } from "./components/Settings";
import { Login } from "./components/Login";
import { Search } from "./components/Search";
import { Home } from "./components/Home";
import { ContactUs } from "./components/ContactUs";
import { Help } from "./components/Help";
import { Download } from "./components/Download";

function App() {
  return (
    <div id="container">
      <div id="left">
        <JoinUs />
        <Login />
        <Search />
        <Home />
      </div>

      <div id="right">
        <Settings />
        <ContactUs />
        <Help />
        <Download />
      </div>
    </div>
  );
}

export default App;
