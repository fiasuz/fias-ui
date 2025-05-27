import { getPosts } from '@/shared/config/api/test/test.request';
import LangToggle from '@/widgets/lang-toggle/ui/lang-toggle';
import ModeToggle from '@/widgets/theme-toggle/ui/theme-toggle';
import { useQuery } from '@tanstack/react-query';
import GitHubButton from 'react-github-btn';

const Welcome = () => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  console.log('data', data);

  return (
    <div className="custom-container h-screen rounded-2xl flex items-center justify-center">
      <div className="flex flex-col gap-2 items-center">
        <GitHubButton
          href="https://github.com/fiasuz/fias-ui"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-size="large"
          data-show-count="true"
          aria-label="Star fiasuz/fias-ui on GitHub"
        >
          Star
        </GitHubButton>
        <div className="flex flex-row gap-2">
          <ModeToggle />
          <LangToggle />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
