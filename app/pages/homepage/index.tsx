import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const Home = () => {
  return (
    <Result
      icon={<SmileOutlined />}
      status="info"
      title="Welcome to ReactPress!"
      subTitle="Please customize your site with react, react-router and antd!"
    />
  );
};

export default Home;
