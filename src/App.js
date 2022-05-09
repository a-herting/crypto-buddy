import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";

function App() {
  //Inside of our components you will see a section of code that calls the useStyles hook, which is a React hook that allows us to generate CSS stylesheets and inject them into our components.
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path='/' component={Homepage} exact />
        <Route path='/coins/:id' component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
