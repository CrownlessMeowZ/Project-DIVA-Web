import { useApp } from '../context/AppContext';

export default function Footer({ extra }) {
  const { t } = useApp();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>{t('footer_copy')}</span>
        {extra}
      </div>
    </footer>
  );
}
