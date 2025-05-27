import MainProvider from '@/providers/main';
import '@/shared/config/i18n';
import Welcome from '@/widgets/welcome/ui/welcome';

const App = () => {
  return (
    <MainProvider>
      <Welcome />
    </MainProvider>
  );
};

export default App;
