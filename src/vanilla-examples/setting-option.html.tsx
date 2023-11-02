import React from 'react';
import { renderVanillaExample } from './render';

import { Heading } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';

import { DataTable } from 'design/components/molecules/data-table';
import { Section } from 'design/components/molecules/section';
import { SettingHeader } from 'design/components/molecules/setting-header';

import { Whole } from 'design/components/organisms/whole';

const SettingOption: React.FC = () => (
  <html>
    <body>
      <Whole navigation={<SettingHeader>設定</SettingHeader>}>
        <div className="p-wrapper">
          <Heading tag="h1">埋め込みコマンド</Heading>
          <Text className="p-setting-option__instruction">
            埋め込みコマンドをコピーしてそのままテキストに貼り付けてください。
          </Text>
          <Section className="p-setting-option__body">
            <DataTable
              headers={[
                {
                  type: 'id',
                  value: 'ID',
                },
                {
                  value: '項目名',
                  width: '150px',
                },
                {
                  value: '埋め込みコマンド',
                },
              ]}
              contents={[
                [
                  {
                    value: '1',
                  },
                  {
                    value: '申請者名',
                  },
                  {
                    value: '%%7890%%',
                  },
                ],
                [
                  {
                    value: '2',
                  },
                  {
                    value: '申請者名',
                  },
                  {
                    value: '%%7890%%',
                  },
                ],
                [
                  {
                    value: '3',
                  },
                  {
                    value: '申請者名',
                  },
                  {
                    value: '%%7890%%',
                  },
                ],
                [
                  {
                    value: '4',
                  },
                  {
                    value: '申請者名',
                  },
                  {
                    value: '%%7890%%',
                  },
                ],
                [
                  {
                    value: '5',
                  },
                  {
                    value: '申請者名',
                  },
                  {
                    value: '%%7890%%',
                  },
                ],
                [
                  {
                    value: '6',
                  },
                  {
                    value: '申請者名',
                  },
                  {
                    value: '%%7890%%',
                  },
                ],
              ]}
            ></DataTable>
          </Section>
        </div>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<SettingOption />);
