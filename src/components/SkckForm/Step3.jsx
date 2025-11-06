import React from 'react';
import { Form, Input, Select, Row, Col, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const Step3 = ({ form }) => {
  const employmentStatus = Form.useWatch('employmentStatus', form);

  return (
    <div className="step-content">
      <div className="form-section">
        <h3 className="form-section-title">Data Pekerjaan</h3>
        
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="employmentStatus"
              label="Status Pekerjaan"
              rules={[{ required: true, message: 'Harap pilih status pekerjaan' }]}
            >
              <Select placeholder="Pilih Status Pekerjaan">
                <Option value="student">Pelajar/Mahasiswa</Option>
                <Option value="employee">Karyawan Swasta</Option>
                <Option value="civilServant">Pegawai Negeri Sipil</Option>
                <Option value="entrepreneur">Wiraswasta</Option>
                <Option value="freelancer">Freelance</Option>
                <Option value="unemployed">Tidak Bekerja</Option>
                <Option value="other">Lainnya</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {employmentStatus && employmentStatus !== 'unemployed' && (
          <>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="companyName"
                  label="Nama Perusahaan/Instansi"
                  rules={[
                    {
                      required: employmentStatus !== 'unemployed',
                      message: 'Harap masukkan nama perusahaan/instansi'
                    }
                  ]}
                >
                  <Input placeholder="Nama Tempat Bekerja" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="position"
                  label="Jabatan/Posisi"
                  rules={[
                    {
                      required: employmentStatus !== 'unemployed',
                      message: 'Harap masukkan jabatan/posisi'
                    }
                  ]}
                >
                  <Input placeholder="Jabatan/Posisi Pekerjaan" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="employmentType"
                  label="Jenis Pekerjaan"
                  rules={[
                    {
                      required: employmentStatus !== 'unemployed',
                      message: 'Harap pilih jenis pekerjaan'
                    }
                  ]}
                >
                  <Select placeholder="Pilih Jenis Pekerjaan">
                    <Option value="fulltime">Pegawai Tetap</Option>
                    <Option value="contract">Karyawan Kontrak</Option>
                    <Option value="intern">Magang</Option>
                    <Option value="parttime">Paruh Waktu</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="workPeriod"
                  label="Masa Bekerja"
                  rules={[
                    {
                      required: employmentStatus !== 'unemployed',
                      message: 'Harap masukkan masa bekerja'
                    }
                  ]}
                >
                  <Input placeholder="Contoh: 2 Tahun 5 Bulan" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="companyAddress"
              label="Alamat Perusahaan/Instansi"
              rules={[
                {
                  required: employmentStatus !== 'unemployed',
                  message: 'Harap masukkan alamat perusahaan/instansi'
                }
              ]}
            >
              <TextArea rows={3} placeholder="Alamat Lengkap Tempat Bekerja" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="companyPhone"
                  label="Telepon Perusahaan"
                  rules={[
                    {
                      required: employmentStatus !== 'unemployed',
                      message: 'Harap masukkan nomor telepon perusahaan'
                    }
                  ]}
                >
                  <Input placeholder="Nomor Telepon Perusahaan" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="supervisorName"
                  label="Nama Atasan Langsung"
                  rules={[
                    {
                      required: employmentStatus !== 'unemployed',
                      message: 'Harap masukkan nama atasan langsung'
                    }
                  ]}
                >
                  <Input placeholder="Nama Atasan Langsung" />
                </Form.Item>
              </Col>
            </Row>
          </>
        )}

        {employmentStatus === 'student' && (
          <>
            <h4>Data Pendidikan</h4>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="educationLevel"
                  label="Jenjang Pendidikan"
                  rules={[
                    {
                      required: true,
                      message: 'Harap pilih jenjang pendidikan'
                    }
                  ]}
                >
                  <Select placeholder="Pilih Jenjang Pendidikan">
                    <Option value="sd">SD/Sederajat</Option>
                    <Option value="smp">SMP/Sederajat</Option>
                    <Option value="sma">SMA/SMK/Sederajat</Option>
                    <Option value="d1">D1</Option>
                    <Option value="d2">D2</Option>
                    <Option value="d3">D3</Option>
                    <Option value="d4">D4/S1</Option>
                    <Option value="s2">S2</Option>
                    <Option value="s3">S3</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="institutionName"
                  label="Nama Sekolah/Perguruan Tinggi"
                  rules={[
                    {
                      required: true,
                      message: 'Harap masukkan nama sekolah/perguruan tinggi'
                    }
                  ]}
                >
                  <Input placeholder="Nama Lembaga Pendidikan" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="nim"
                  label="NIM/NISN"
                >
                  <Input placeholder="Nomor Induk Mahasiswa/Siswa" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="faculty"
                  label="Fakultas/Jurusan"
                >
                  <Input placeholder="Fakultas/Jurusan (jika ada)" />
                </Form.Item>
              </Col>
            </Row>
          </>
        )}

        <h4>Riwayat Pekerjaan (Opsional)</h4>
        <Form.List name="workHistory">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} style={{ marginBottom: 16, border: '1px solid #d9d9d9', padding: 16, borderRadius: 4 }}>
                  <Row gutter={16}>
                    <Col span={20}>
                      <h4>Pekerjaan {key + 1}</h4>
                    </Col>
                    <Col span={4} style={{ textAlign: 'right' }}>
                      <Button
                        type="text"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => remove(name)}
                      />
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'company']}
                        label="Nama Perusahaan"
                      >
                        <Input placeholder="Nama Perusahaan" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'position']}
                        label="Jabatan"
                      >
                        <Input placeholder="Jabatan" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'startDate']}
                        label="Tahun Mulai"
                      >
                        <Input placeholder="Tahun Mulai (contoh: 2018)" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'endDate']}
                        label="Tahun Selesai"
                      >
                        <Input placeholder="Tahun Selesai (kosongkan jika masih bekerja)" />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Tambah Riwayat Pekerjaan
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>
    </div>
  );
};

export default Step3;
