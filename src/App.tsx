import MainProvider from "@/providers/main"
import { Button } from "@/shared/ui/button"

const App = () => {
  return (
    <div>
      <MainProvider>
        <Button>sdsdsd</Button>
        <h1>Wrapper</h1>
      </MainProvider>
    </div>
  )
}

export default App