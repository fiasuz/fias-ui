import { getPosts } from '@/shared/config/api/testApi';
import Welcome from '@/widgets/welcome';

export default async function Home() {
  const res = await getPosts({ _limit: 1 });
  console.log('SSR res', res.data);

  return (
    <div>
      <Welcome />
    </div>
  );
}
