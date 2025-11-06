import React, { useState } from 'react';
import { Steps, Button, Form, message } from 'antd';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import './styles.css';

const { Step } = Steps;

const SkckForm = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

  const steps = [
    {
      title: 'Data Pribadi',
      content: <Step1 form={form} />,
    },
    {
      title: 'Data Orang Tua',
      content: <Step2 form={form} />,
    },
    {
      title: 'Data Pekerjaan',
      content: <Step3 form={form} />,
    },
    {
      title: 'Data Kejaksaan',
      content: <Step4 form={form} />,
    },
    {
      title: 'Data Kepolisian',
      content: <Step5 form={form} />,
    },
  ];

  const next = () => {
    form.validateFields()
      .then(() => {
        setCurrent(current + 1);
      })
      .catch((err) => {
        console.error('Validation failed:', err);
      });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('Form submitted successfully!');
  };

  return (
    <div className="skck-form-container">
      <h2>Formulir Permohonan SKCK</h2>
      <Steps current={current} className="steps">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="skck-form"
        >
          {steps[current].content}
          <div className="steps-action">
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={prev}>
                Sebelumnya
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={next}>
                Selanjutnya
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" htmlType="submit">
                Kirim
              </Button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SkckForm;
