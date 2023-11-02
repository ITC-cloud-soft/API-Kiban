import React from 'react';
import { renderVanillaExample } from './render';

import { Section } from 'design/components/molecules/section';

import { Whole } from 'design/components/organisms/whole';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import logo_no_densin from 'design/images/common/logo-no-densin.svg';
import { TextField } from 'design/components/atoms/text-field';
import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Tag } from 'design/components/atoms/tag';

const HomeRequestListPage: React.FC = () => (
  <html>
    <body>
      <Whole modifiers="with-bg">
        <Section noPadding={true} className="p-list-content-holder">
          <div style={{ margin: '2% 20% 0 20%' }}>
            <Section modifiers="fill-white">
              {' '}
              <div className="o-global-navigation__logo">
                <a href="#">
                  <img src={logo_no_densin} alt="Densin" />
                </a>
              </div>
              <br />
              <br />
              <Heading tag="h3">アカウント</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                　https://
                <TextField name="name" type="text" value="" />
                　.aeonflow.aeonpeople.biz
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="パスワード" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" value="" />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="再確認" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" value="" />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="所属会社" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <Pulldown name="something" placeholder="選択してください。">
                      <React.Fragment key=".0">
                        <option value="1">会社0</option>
                        <option value="2">会社1</option>
                        <option value="3">会社2</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="氏名" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" value="" />
                </FormField>
              </FormFieldRow>
              <br />
              <Heading tag="h3">連絡先</Heading>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="Mail：" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" value="" />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="Tel：" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" value="" />
                </FormField>
              </FormFieldRow>
              <footer className="o-modal__footer">
                {' '}
                <Button modifiers="secondary" size="huge" href="login.html" id="input-form-check-button">
                  ログインへ
                </Button>
                <Button modifiers="primary" size="huge" id="input-form-check-button">
                  アカウント作成
                </Button>
              </footer>
            </Section>
          </div>
        </Section>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<HomeRequestListPage />);
