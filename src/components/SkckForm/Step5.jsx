import React from 'react';
import { Form, Input, Select, DatePicker, Row, Col, Upload, Button, Typography, Divider } from 'antd';
import { UploadOutlined, FilePdfOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const Step5 = ({ form }) => {
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = (values) => {
    console.log('Form values:', values);
    // Handle form submission
  };

  return (
    <div className="step-content">
      <div className="form-section">
        <Title level={3} style={{ textAlign: 'center', marginBottom: 24 }}>
          Data Kepolisian
        </Title>
        
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <CheckCircleOutlined style={{ fontSize: 48, color: '#52c41a', marginBottom: 16 }} />
          <Title level={4}>Verifikasi Data</Title>
          <Text type="secondary">
            Silakan periksa kembali data yang telah Anda isi. Pastikan semua data yang dimasukkan sudah benar.
          </Text>
        </div>

        <Divider>Data Pribadi</Divider>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="policeRecordNumber"
              label="Nomor Register Polisi"
              rules={[{ required: true, message: 'Harap masukkan nomor register polisi' }]}
            >
              <Input placeholder="Nomor Register Polisi" disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="skckNumber"
              label="Nomor SKCK"
              rules={[{ required: true, message: 'Harap masukkan nomor SKCK' }]}
            >
              <Input placeholder="Nomor SKCK" disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="issueDate"
              label="Tanggal Penerbitan"
              rules={[{ required: true, message: 'Harap pilih tanggal penerbitan' }]}
            >
              <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="expiryDate"
              label="Masa Berlaku Sampai"
              rules={[{ required: true, message: 'Harap pilih tanggal kadaluarsa' }]}
            >
              <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" disabled />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="issuingOffice"
          label="Kantor Yang Menerbitkan"
          rules={[{ required: true, message: 'Harap pilih kantor yang menerbitkan' }]
        }
        >
          <Select placeholder="Pilih Kantor" disabled>
            <Option value="polres">Kepolisian Resor</Option>
            <Option value="polsek">Kepolisian Sektor</Option>
          </Select>
        </Form.Item>

        <Divider>Dokumen Pendukung</Divider>
        <Form.Item
          name="ktpFile"
          label="Scan KTP"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: 'Harap unggah scan KTP' }]}
        >
          <Upload
            name="ktpFile"
            beforeUpload={() => false}
            maxCount={1}
            accept=".pdf,.jpg,.jpeg,.png"
          >
            <Button icon={<UploadOutlined />}>Unggah KTP</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="kkFile"
          label="Scan Kartu Keluarga"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: 'Harap unggah scan Kartu Keluarga' }]}
        >
          <Upload
            name="kkFile"
            beforeUpload={() => false}
            maxCount={1}
            accept=".pdf,.jpg,.jpeg,.png"
          >
            <Button icon={<UploadOutlined />}>Unggah Kartu Keluarga</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="photoFile"
          label="Pas Foto 4x6"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: 'Harap unggah pas foto 4x6' }]}
        >
          <Upload
            name="photoFile"
            beforeUpload={() => false}
            maxCount={1}
            accept=".jpg,.jpeg,.png"
          >
            <Button icon={<UploadOutlined />}>Unggah Pas Foto 4x6</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="fingerprintFile"
          label="Berkas Sidik Jari"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: 'Harap unggah berkas sidik jari' }]}
        >
          <Upload
            name="fingerprintFile"
            beforeUpload={() => false}
            maxCount={1}
            accept=".pdf,.jpg,.jpeg,.png"
          >
            <Button icon={<FilePdfOutlined />}>Unggah Berkas Sidik Jari</Button>
          </Upload>
        </Form.Item>

        <Divider>Persetujuan</Divider>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Harap setujui pernyataan')),
            },
          ]}
        >
          <Checkbox>
            Saya menyatakan bahwa data yang saya berikan adalah benar dan dapat dipertanggungjawabkan secara hukum.
            Saya bersedia menerima sanksi hukum jika data yang saya berikan tidak benar.
          </Checkbox>
        </Form.Item>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Button type="primary" size="large" onClick={onFinish}>
            Kirim Permohonan
          </Button>
          <Text type="secondary" style={{ display: 'block', marginTop: 16 }}>
            Pastikan semua data yang Anda masukkan sudah benar sebelum mengirimkan permohonan.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Step5;
