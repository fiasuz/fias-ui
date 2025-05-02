import { Golos_Text } from 'next/font/google';

const golosText = Golos_Text({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-golos-text',
  subsets: ['latin', 'cyrillic'],
});

export { golosText };
