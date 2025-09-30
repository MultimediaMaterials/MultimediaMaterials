import { useSearchParams } from 'react-router-dom';
import BaseLayout from '../../components/layout/BaseLayout';

const Form = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("id"));

  const formId = searchParams.get("id");

  return (
    <BaseLayout>
      <div style={{ width: '100%', height: '100vh' }}>
        {formId ? (
          <iframe
            src={`https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true`}
            width="100%"
            height="100%"
          >
            載入中...
          </iframe>
        ) : (
          <p>😯 找不到表單</p>
        )}
      </div>
    </BaseLayout>
  );
};

export default Form;
