import { createRoot } from "react-dom/client";
import App from './components/App'
import { BrowserRouter } from "react-router-dom";

const container = document.querySelector('.root')
const root = createRoot(container)

root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
)