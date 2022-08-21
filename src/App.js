import Menu from "./Components/Menu";
import Form from "./Components/Form";
import Output from "./Components/Output";
import { AppProvider } from "./Components/Context";
function App() {
    return (
        <div className="container bg-warning bg-opacity-50  my-5  rounded-3 row flex-column  flex-lg-row p-5 mx-auto  ">
            <AppProvider>
                <Menu />
                <div className="col d-flex flex-column justify-content-between h-100">
                    <Form />
                    <Output />
                </div>
            </AppProvider>
        </div>
    );
}

export default App;
