import React from 'react';
import { Form, Input, Select, DatePicker, Row, Col, Checkbox, Upload, Button } from 'antd';
import { UploadOutlined, FilePdfOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const Step4 = ({ form }) => {
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const hasLegalCase = Form.useWatch('hasLegalCase', form);
  const hasBeenArrested = Form.useWatch('hasBeenArrested', form);

  return (
    <div className="step-content">
      <div className="form-section">
        <h3 className="form-section-title">Data Kejaksaan</h3>
        
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="hasLegalCase"
              valuePropName="checked"
            >
              <Checkbox>Pernah terlibat perkara pidana</Checkbox>
            </Form.Item>
          </Col>
        </Row>

        {hasLegalCase && (
          <div style={{ marginLeft: 24, marginBottom: 16 }}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="caseNumber"
                  label="Nomor Perkara"
                  rules={[
                    { required: hasLegalCase, message: 'Harap masukkan nomor perkara' }
                  ]}
                >
                  <Input placeholder="Nomor Perkara" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="caseYear"
                  label="Tahun Perkara"
                  rules={[
                    { required: hasLegalCase, message: 'Harap masukkan tahun perkara' }
                  ]}
                >
                  <Input placeholder="Tahun Perkara" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="caseDescription"
              label="Uraian Singkat Perkara"
              rules={[
                { required: hasLegalCase, message: 'Harap masukkan uraian perkara' }
              ]}
            >
              <TextArea rows={3} placeholder="Jelaskan secara singkat perkara yang pernah dihadapi" />
            </Form.Item>

            <Form.Item
              name="courtDecision"
              label="Putusan Pengadilan"
              rules={[
                { required: hasLegalCase, message: 'Harap masukkan putusan pengadilan' }
              ]}
            >
              <Input placeholder="Putusan pengadilan yang diterima" />
            </Form.Item>

            <Form.Item
              name="caseDocument"
              label="Unggah Dokumen Putusan"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[
                { required: hasLegalCase, message: 'Harap unggah dokumen putusan' }
              ]}
            >
              <Upload
                name="caseDocument"
                beforeUpload={() => false}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Unggah Dokumen (PDF, Maks. 5MB)</Button>
              </Upload>
            </Form.Item>
          </div>
        )}

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="hasBeenArrested"
              valuePropName="checked"
            >
              <Checkbox>Pernah ditangkap/ditahan</Checkbox>
            </Form.Item>
          </Col>
        </Row>

        {hasBeenArrested && (
          <div style={{ marginLeft: 24 }}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="arrestDate"
                  label="Tanggal Penangkapan"
                  rules={[
                    { required: hasBeenArrested, message: 'Harap masukkan tanggal penangkapan' }
                  ]}
                >
                  <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="arrestLocation"
                  label="Tempat Penangkapan"
                  rules={[
                    { required: hasBeenArrested, message: 'Harap masukkan tempat penangkapan' }
                  ]}
                >
                  <Input placeholder="Tempat Penangkapan" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="arrestReason"
              label="Alasan Penangkapan"
              rules={[
                { required: hasBeenArrested, message: 'Harap masukkan alasan penangkapan' }
              ]}
            >
              <TextArea rows={3} placeholder="Alasan penangkapan/penahanan" />
            </Form.Item>

            <Form.Item
              name="detentionPeriod"
              label="Lama Masa Tahanan"
              rules={[
                { required: hasBeenArrested, message: 'Harap masukkan lama masa tahanan' }
              ]}
            >
              <Input placeholder="Contoh: 1 Bulan 15 Hari" />
            </Form.Item>
          </div>
        )}

        <h4>Surat Keterangan Bebas Narkoba</h4>
        <Form.Item
          name="drugFreeCertificate"
          label="Unggah Surat Keterangan Bebas Narkoba"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            { required: true, message: 'Harap unggah surat keterangan bebas narkoba' }
          ]}
        >
          <Upload
            name="drugFreeCertificate"
            beforeUpload={() => false}
            maxCount={1}
            accept=".pdf,.jpg,.jpeg,.png"
          >
            <Button icon={<FilePdfOutlined />}>Unggah Dokumen (PDF/Gambar, Maks. 5MB)</Button>
          </Upload>
        </Form.Item>

        <h4>Surat Keterangan Catatan Kepolisian Sebelumnya (Jika Ada)</h4>
        <Form.Item
          name="previousSkck"
          label="Unggah SKCK Sebelumnya"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            name="previousSkck"
            beforeUpload={() => false}
            maxCount={1}
            accept=".pdf,.jpg,.jpeg,.png"
          >
            <Button icon={<FilePdfOutlined />}>Unggah Dokumen (PDF/Gambar, Maks. 5MB)</Button>
          </Upload>
        </Form.Item>

        <h4>Surat Keterangan Lainnya</h4>
        <Form.Item
          name="otherDocuments"
          label="Dokumen Pendukung Lainnya"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            name="otherDocuments"
            beforeUpload={() => false}
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
          >
            <Button icon={<UploadOutlined />}>Unggah Dokumen (PDF/Gambar, Maks. 5MB per file)</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="additionalInfo"
          label="Keterangan Tambahan"
        >
          <TextArea 
            rows={4} 
            placeholder="Tambahkan keterangan lain yang dianggap perlu"
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default Step4;
