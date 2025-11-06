import { ConfigProvider } from 'antd';
import idID from 'antd/locale/id_ID';
import './App.css';
import SkckForm from './components/SkckForm';

function App() {
  return (
    <ConfigProvider
      locale={idID}
      theme={{
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 6,
        },
      }}
    >
      <div className="app-container">
        <SkckForm />
      </div>
    </ConfigProvider>
  );
}

export default App;
