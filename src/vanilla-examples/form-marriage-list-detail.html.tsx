import React from 'react';
import { renderVanillaExample } from './render';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { Heading } from 'design/components/atoms/heading';
import { Section } from 'design/components/molecules/section';

import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { InfoTable } from 'design/components/molecules/info-table';

const MarriageListDetail: React.FC = () => (
  <html>
    <body>
      <Whole navigation={''}>
        <Modal
          modifiers="fullscreen"
          id="full-modal"
          footer={
            <>

              {/* <Button modifiers="primary" size="huge" id="input-form-check-button">
                結婚照会一覧＿詳細
              </Button> */}
            </>
          }
        >
          <>
            <div className="p-wrapper">







            </div>
          </>
        </Modal>

        <Modal
          modifiers="fullscreen"
          id="modal-comp"
          hasBackButton={true}
          footer={
            <>
              {/* <Button modifiers="primary" size="huge" id="input-form-confirm-button">
                申請
              </Button> */}
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
              </Section>
              <br />
              <Section modifiers="fill-white" className="p-setting-input-form__wrapper">
                <Section className="p-setting-input-form__body">

                  <Heading tag="h3">伝票情報</Heading>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="伝票番号">
                      <span>CCFAAAA202107270001</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="申請日">
                      <span>2021/07/08</span>
                    </InfoTableCell>
                  </InfoTable>

                  <Heading tag="h3">申請者情報</Heading>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="会社コード">
                      <span>0092</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="会社名">
                      <span>イオンアイビス株式会社</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="所属コード">
                      <span>92905</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="所属名">
                      <span>店舗S開発POS周辺T</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="従業員区分">
                      <span>社員</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>開発　佳代</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名（カナ）">
                      <span>カイハツ　かヨ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="申請者資格">
                      <span>H1</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="入社日">
                      <span>1981/11/11</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="グットライフ区分">
                      <span>A会員２</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="組合員">
                      <span>組合員</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="入籍日（予定日）">
                      <span>2021/11/11</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="入力区分">
                      <span>祝い金申請/祝電申請</span>
                    </InfoTableCell>
                  </InfoTable>


                  <Heading tag="h3">祝い金申請</Heading>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="配偶者社員番号">
                      <span>7654321</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="配偶者氏名">
                      <span>開発　義康</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="配偶者氏名（カナ）">
                      <span>7654321</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="配偶者氏名">
                      <span>30,000円</span>
                    </InfoTableCell>
                  </InfoTable>

                  <Heading tag="h3">祝電申請</Heading>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="結婚式場名">
                      <span>イオン式場</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="挙式日付">
                      <span>2021/08/10</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="挙式時刻">
                      <span>11：11</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="式場郵便番号">
                      <span>261-0023</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="式場住所">
                      <span>千葉県千葉市美浜区中瀬１ー１</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="式場電話番号">
                      <span>041-111-111</span>
                    </InfoTableCell>
                  </InfoTable>

                </Section>
              </Section>
            </div>
          </>
        </Modal>


      </Whole>
    </body>
  </html >
);

export default renderVanillaExample(<MarriageListDetail />);
