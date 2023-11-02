import React from 'react';
import { renderVanillaExample } from './render';
import { Button } from 'design/components/atoms/button';
import { Section } from 'design/components/molecules/section';
import { IconHeader } from 'design/components/molecules/icon-header';
import { PosHeading } from 'design/components/atoms/position-heading';
import { Whole } from 'design/components/organisms/whole';
import { Radio } from 'design/components/atoms/radio';
import { FormFieldRow } from 'design/components/molecules/form-field';
import {FormFieldOneColumn} from 'design/components/molecules/form-field-one-column'
import logo from 'design/images/common/logo.svg';

const PersonalCorpSelect: React.FC = () => (

  <html>
    <body>
      <Whole
      modifiers="with-bg"
      navigation={
        <IconHeader>
            <div className="o-global-navigation__logo">
              <img src={logo} alt="Densin" />
            </div>
        </IconHeader>
      }
      >
      <Section modifiers="fill-white" className='p-setting-input-form__wrapper'>
      <PosHeading tag="h1" pos="center">申請する会社を選択してください</PosHeading>
              <FormFieldOneColumn >
                <FormFieldRow columnSize="12" columnSizePC="12" >
                  <Radio name="mqt1" value="yes" checked modifiers="grey">
                    イオンアイビス株式会社（0534561）
                  </Radio>
                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンペット株式会社（9235192）
                  </Radio>
                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンリテール株式会社（0427001）
                  </Radio>

                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンペット株式会社（9235192）
                  </Radio>

                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンスマートテクノロジー株式会社（9235192）
                  </Radio>
                  <Radio name="mqt1" value="yes" checked modifiers="grey">
                    イオンアイビス株式会社（0534561）
                  </Radio>
                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンペット株式会社（9235192）
                  </Radio>
                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンリテール株式会社（0427001）
                  </Radio>

                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンペット株式会社（9235192）
                  </Radio>

                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンスマートテクノロジー株式会社（9235192）
                  </Radio>
                  <Radio name="mqt1" value="yes" checked modifiers="grey">
                    イオンアイビス株式会社（0534561）
                  </Radio>
                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンペット株式会社（9235192）
                  </Radio>
                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンリテール株式会社（0427001）
                  </Radio>

                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンペット株式会社（9235192）
                  </Radio>

                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンスマートテクノロジー株式会社（9235192）
                  </Radio>
                  <Radio name="mqt1" value="yes" checked modifiers="grey">
                    イオンアイビス株式会社（0534561）
                  </Radio>
                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンペット株式会社（9235192）
                  </Radio>
                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンリテール株式会社（0427001）
                  </Radio>

                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンペット株式会社（9235192）
                  </Radio>

                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンスマートテクノロジー株式会社（9235192）
                  </Radio>
                  <Radio name="mqt1" value="yes" checked modifiers="grey">
                    イオンアイビス株式会社（0534561）
                  </Radio>
                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンペット株式会社（9235192）
                  </Radio>
                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンリテール株式会社（0427001）
                  </Radio>

                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンペット株式会社（9235192）
                  </Radio>

                  <Radio name="mqt1" value="no" modifiers="grey">
                  イオンスマートテクノロジー株式会社（9235192）
                  </Radio>

                  </FormFieldRow>
                  </FormFieldOneColumn>

      </Section>
      <footer className='o-modal__footer'>
      <Button modifiers="primary" size="huge">確認</Button>
      </footer>

      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<PersonalCorpSelect />);
