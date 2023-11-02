import React from 'react';
import { renderVanillaExample } from './render';

import { Section } from 'design/components/molecules/section';

import { Whole } from 'design/components/organisms/whole';
import { FormFieldRow } from 'design/components/molecules/form-field';
import logo_no_densin from 'design/images/common/logo-no-densin.svg';
import { TextField } from 'design/components/atoms/text-field';
import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';

const HomeRequestListPage: React.FC = () => (
  <html>
    <body>
      <Whole modifiers="with-bg">
        <Section noPadding={true} className="p-list-content-holder">
          <div style={{ margin: '10% 20% 0 20%' }}>
            <Section modifiers="fill-white">
              {' '}
              <div className="o-global-navigation__logo">
                <a href="#">
                  <img src={logo_no_densin} alt="Densin" />
                </a>
              </div>
              <br />
              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Heading tag="h3">アカウント</Heading>
                <TextField name="name" type="text" value="" />
              </FormFieldRow>
              <br />
              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Heading tag="h3">パスワード</Heading>
                <TextField name="name" type="text" value="" />
              </FormFieldRow>
              <footer className="o-modal__footer">
                {' '}
                <Button modifiers="secondary" size="huge" href="register.html" id="input-form-check-button">
                  アカウント作成
                </Button>
                <Button modifiers="primary" size="huge" href="system-general.html" id="input-form-check-button">
                  ログイン
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
