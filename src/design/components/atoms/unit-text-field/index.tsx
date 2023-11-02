import React, { InputHTMLAttributes } from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';
import { Icon } from 'design/components/atoms/icon';

type InheritedProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> &
  Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'className'>;

export interface UnitTextFieldProps extends InheritedProps {
  tag?: ModifierProp<'textarea'>;
  disabled?: boolean;
  modifiers?: ModifierProp<'invalid'>;
  id?: string;
  className?: string;
  unit?: string;
}

export const UnitTextField: React.FC<UnitTextFieldProps> = ({
  tag,
  disabled = false,
  modifiers,
  id,
  className: additionalClassName = '',
  unit = 'unit-yen',
  ...props
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TagName: any = tag || 'input';
  const componentClassName = mapModifiers(
    'a-unit-text-field',
    modifiers,
    disabled && 'disabled',
    props.type ? `type-${props.type}` : ''
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();
  //単位、デフォルト値は「円」
  let unitIcon = `${unit}`;
  if (unit == 'unit-manyen') {
    //万円
    unitIcon = 'unit-manyen';
  } else if (unit === 'unit-age') {
    //年齢
    unitIcon = 'unit-age';
  } else if (unit === 'unit-hour') {
    //時間
    unitIcon = 'unit-hour';
  } else if (unit === 'unit-minute') {
    //分
    unitIcon = 'unit-minute';
  } else if (unit === 'days') {
    //日間
    unitIcon = 'days';
  } else if (unit === 'timenum') {
    //回数
    unitIcon = 'timenum';
  } else if (unit === 'times') {
    //回
    unitIcon = 'times';
  } else if (unit === 'year') {
    //年
    unitIcon = 'year';
  } else if (unit === 'unit-km') {
    //km
    unitIcon = 'unit-km';
  } else if (unit === 'unit-go') {
    //号
    unitIcon = 'unit-go';
  } else if (unit === 'mei') {
    //名
    unitIcon = 'mei';
  } else if (unit === 'unit-dai') {
    //台
    unitIcon = 'unit-dai';
  } else if (unit === 'unit-haku') {
    //泊
    unitIcon = 'unit-haku';
  } else if (unit === 'unit-station') {
    //駅
    unitIcon = 'unit-station';
  }


  if (disabled === true) {
    unitIcon = `${unitIcon}-black`;
  }

  return (
    <div id={id} className={className}>
      <TagName {...props} disabled={disabled} className="a-unit-text-field__input" />
      <div className="a-unit-text-field-unit__icon">
        <Icon name={unitIcon} />
      </div>
    </div>
  );
};
