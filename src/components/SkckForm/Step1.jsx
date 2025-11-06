import React from 'react';
import { Form, Input, Select, DatePicker, Upload, Button, Row, Col } from 'antd';
import { UploadOutlined, UserOutlined, IdcardOutlined, HomeOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const Step1 = ({ form }) => {
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className="step-content">
      <div className="form-section">
        <h3 className="form-section-title">Data Pribadi</h3>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="photo"
              label="Foto"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: 'Harap unggah foto' }]}
            >
              <Upload
                name="photo"
                listType="picture-card"
                className="photo-upload"
                beforeUpload={() => false}
                maxCount={1}
              >
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Unggah Foto</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={16}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="nik"
                  label="NIK"
                  rules={[{ required: true, message: 'Harap masukkan NIK' }]}
                >
                  <Input
                    prefix={<IdcardOutlined />}
                    placeholder="Nomor Induk Kependudukan"
                    maxLength={16}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="kkNumber"
                  label="No. KK"
                  rules={[{ required: true, message: 'Harap masukkan No. KK' }]}
                >
                  <Input
                    prefix={<IdcardOutlined />}
                    placeholder="Nomor Kartu Keluarga"
                    maxLength={16}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="fullName"
              label="Nama Lengkap"
              rules={[{ required: true, message: 'Harap masukkan nama lengkap' }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Nama Lengkap Sesuai KTP"
              />
            </Form.Item>

            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name="placeOfBirth"
                  label="Tempat Lahir"
                  rules={[{ required: true, message: 'Harap masukkan tempat lahir' }]}
                >
                  <Input placeholder="Tempat Lahir" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="dateOfBirth"
                  label="Tanggal Lahir"
                  rules={[{ required: true, message: 'Harap pilih tanggal lahir' }]}
                >
                  <DatePicker
                    style={{ width: '100%' }}
                    placeholder="Pilih Tanggal"
                    format="DD/MM/YYYY"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="gender"
                  label="Jenis Kelamin"
                  rules={[{ required: true, message: 'Harap pilih jenis kelamin' }]}
                >
                  <Select placeholder="Pilih Jenis Kelamin">
                    <Option value="male">Laki-laki</Option>
                    <Option value="female">Perempuan</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="address"
              label="Alamat Lengkap"
              rules={[{ required: true, message: 'Harap masukkan alamat lengkap' }]}
            >
              <TextArea
                rows={3}
                prefix={<HomeOutlined />}
                placeholder="Alamat Sesuai KTP"
              />
            </Form.Item>

            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name="province"
                  label="Provinsi"
                  rules={[{ required: true, message: 'Harap pilih provinsi' }]}
                >
                  <Select placeholder="Pilih Provinsi" showSearch>
                    <Option value="jawaBarat">Jawa Barat</Option>
                    <Option value="jawaTengah">Jawa Tengah</Option>
                    <Option value="jawaTimur">Jawa Timur</Option>
                    {/* Add more provinces as needed */}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="city"
                  label="Kota/Kabupaten"
                  rules={[{ required: true, message: 'Harap pilih kota/kabupaten' }]}
                >
                  <Select placeholder="Pilih Kota/Kabupaten" showSearch>
                    <Option value="bandung">Kota Bandung</Option>
                    <Option value="cimahi">Kota Cimahi</Option>
                    {/* Add more cities as needed */}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="subdistrict"
                  label="Kecamatan"
                  rules={[{ required: true, message: 'Harap pilih kecamatan' }]}
                >
                  <Select placeholder="Pilih Kecamatan" showSearch>
                    <Option value="cimahiSelatan">Cimahi Selatan</Option>
                    <Option value="cimahiTengah">Cimahi Tengah</Option>
                    <Option value="cimahiUtara">Cimahi Utara</Option>
                    {/* Add more subdistricts as needed */}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name="village"
                  label="Kelurahan/Desa"
                  rules={[{ required: true, message: 'Harap pilih kelurahan/desa' }]}
                >
                  <Input placeholder="Nama Kelurahan/Desa" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="rt"
                  label="RT"
                  rules={[{ required: true, message: 'Harap masukkan RT' }]}
                >
                  <Input placeholder="RT" maxLength={3} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="rw"
                  label="RW"
                  rules={[{ required: true, message: 'Harap masukkan RW' }]}
                >
                  <Input placeholder="RW" maxLength={3} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="phoneNumber"
                  label="No. HP/Telepon"
                  rules={[{ required: true, message: 'Harap masukkan nomor telepon' }]}
                >
                  <Input
                    prefix={<PhoneOutlined />}
                    placeholder="Nomor yang dapat dihubungi"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { type: 'email', message: 'Format email tidak valid' },
                    { required: true, message: 'Harap masukkan email' }
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    placeholder="Alamat email aktif"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="religion"
              label="Agama"
              rules={[{ required: true, message: 'Harap pilih agama' }]}
            >
              <Select placeholder="Pilih Agama">
                <Option value="islam">Islam</Option>
                <Option value="kristen">Kristen Protestan</Option>
                <Option value="katolik">Katolik</Option>
                <Option value="hindu">Hindu</Option>
                <Option value="buddha">Buddha</Option>
                <Option value="konghucu">Konghucu</Option>
              </Select>
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="maritalStatus"
                  label="Status Perkawinan"
                  rules={[{ required: true, message: 'Harap pilih status perkawinan' }]}
                >
                  <Select placeholder="Pilih Status">
                    <Option value="single">Belum Kawin</Option>
                    <Option value="married">Kawin</Option>
                    <Option value="divorced">Cerai Hidup</Option>
                    <Option value="widowed">Cerai Mati</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="citizenship"
                  label="Kewarganegaraan"
                  rules={[{ required: true, message: 'Harap pilih kewarganegaraan' }]}
                >
                  <Select placeholder="Pilih Kewarganegaraan">
                    <Option value="wni">WNI</Option>
                    <Option value="wna">WNA</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Step1;
