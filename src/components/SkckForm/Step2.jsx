import React from 'react';
import { Form, Input, Row, Col } from 'antd';
import { UserOutlined, IdcardOutlined, PhoneOutlined } from '@ant-design/icons';

const Step2 = ({ form }) => {
  return (
    <div className="step-content">
      <div className="form-section">
        <h3 className="form-section-title">Data Orang Tua</h3>
        
        <h4>Data Ayah Kandung</h4>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name={['father', 'name']}
              label="Nama Lengkap Ayah"
              rules={[{ required: true, message: 'Harap masukkan nama ayah' }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Nama Lengkap Ayah Kandung"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={['father', 'nik']}
              label="NIK Ayah"
              rules={[{ required: true, message: 'Harap masukkan NIK ayah' }]}
            >
              <Input
                prefix={<IdcardOutlined />}
                placeholder="NIK Ayah"
                maxLength={16}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name={['father', 'placeOfBirth']}
              label="Tempat Lahir Ayah"
              rules={[{ required: true, message: 'Harap masukkan tempat lahir ayah' }]}
            >
              <Input placeholder="Tempat Lahir Ayah" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={['father', 'dateOfBirth']}
              label="Tanggal Lahir Ayah"
              rules={[{ required: true, message: 'Harap pilih tanggal lahir ayah' }]}
            >
              <Input placeholder="DD/MM/YYYY" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name={['father', 'address']}
          label="Alamat Ayah"
          rules={[{ required: true, message: 'Harap masukkan alamat ayah' }]}
        >
          <Input.TextArea rows={2} placeholder="Alamat Lengkap Ayah" />
        </Form.Item>

        <Form.Item
          name={['father', 'phoneNumber']}
          label="No. HP/Telepon Ayah"
          rules={[{ required: true, message: 'Harap masukkan nomor telepon ayah' }]}
        >
          <Input
            prefix={<PhoneOutlined />}
            placeholder="Nomor yang dapat dihubungi"
          />
        </Form.Item>

        <h4>Data Ibu Kandung</h4>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name={['mother', 'name']}
              label="Nama Lengkap Ibu"
              rules={[{ required: true, message: 'Harap masukkan nama ibu' }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Nama Lengkap Ibu Kandung"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={['mother', 'nik']}
              label="NIK Ibu"
              rules={[{ required: true, message: 'Harap masukkan NIK ibu' }]}
            >
              <Input
                prefix={<IdcardOutlined />}
                placeholder="NIK Ibu"
                maxLength={16}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name={['mother', 'placeOfBirth']}
              label="Tempat Lahir Ibu"
              rules={[{ required: true, message: 'Harap masukkan tempat lahir ibu' }]}
            >
              <Input placeholder="Tempat Lahir Ibu" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={['mother', 'dateOfBirth']}
              label="Tanggal Lahir Ibu"
              rules={[{ required: true, message: 'Harap pilih tanggal lahir ibu' }]}
            >
              <Input placeholder="DD/MM/YYYY" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name={['mother', 'address']}
          label="Alamat Ibu"
          rules={[{ required: true, message: 'Harap masukkan alamat ibu' }]}
        >
          <Input.TextArea rows={2} placeholder="Alamat Lengkap Ibu" />
        </Form.Item>

        <Form.Item
          name={['mother', 'phoneNumber']}
          label="No. HP/Telepon Ibu"
          rules={[{ required: true, message: 'Harap masukkan nomor telepon ibu' }]}
        >
          <Input
            prefix={<PhoneOutlined />}
            placeholder="Nomor yang dapat dihubungi"
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default Step2;
