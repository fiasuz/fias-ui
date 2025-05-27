import { LanguageRoutes } from '@/shared/config/i18n/type';
import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { languages } from '@/widgets/lang-toggle/lib/data';
import { GlobeIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LangToggle = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: LanguageRoutes) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <GlobeIcon />
          <span>{languages.find((e) => e.key == i18n.language)?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((e) => (
          <DropdownMenuItem key={e.key} onClick={() => changeLanguage(e.key)}>
            {e.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangToggle;
