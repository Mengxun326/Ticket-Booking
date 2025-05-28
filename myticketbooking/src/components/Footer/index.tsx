import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '信安航空出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Blog',
          title: '梦寻の博客',
          href: 'https://www.meng-xun.top',
          blankTarget: true,
        },
        {
          key: 'AUST',
          title: '安徽理工大学',
          href: 'https://www.aust.edu.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />梦寻 GitHub</>,
          href: 'https://github.com/Mengxun326',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
