import {AuthProvider} from "./context/auth";
import {Router} from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App;