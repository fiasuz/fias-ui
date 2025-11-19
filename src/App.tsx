import MainProvider from "@/providers/main";
import AppRouter from "@/providers/routing/AppRoutes";
import "@/shared/config/i18n";

const App = () => {
  return (
    <MainProvider>
      <AppRouter />
    </MainProvider>
  );
};

export default App;
