import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';
import image_id from 'design/images/icons/id-grey.svg';
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  children2: React.ReactNode;
  modifiers?: ModifierProp<'grey' | 'invalid'>;
  checked?: boolean;
  disabled?: boolean;
  isMenu?:boolean;
}

export const RadioInfo: React.FC<RadioProps> = ({
  id,
  className: additionalClassName,
  modifiers,
  children,
  children2,
  disabled = false,
  checked = false,
  isMenu=false,
  ...inputProps
}) => {
  const componentClassName = mapModifiers('a-radio-info', modifiers, checked && 'checked', disabled && 'disabled');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <label id={id} className={className}>
      <input {...inputProps} checked={checked} disabled={disabled} className="a-radio-info__input" type="radio" />
      <div className={isMenu? "a-radio-info__body-menu" :"a-radio-info__body"}>
        <span className="a-radio-info__indicator" />
        {/* <div className="a-radio-info__label_icon"></div> */}
        {/* <img src={image_id} className="a-radio-info__image"></img><div className='a-radio-info__line'></div> */}
        <img src={image_id} className='a-radio-info__image' alt=''>
        {/* <Icon name={checked ? (disabled? 'id-grey' : 'id-white') : 'id-grey'}/> */}
        </img>
        {!isMenu&&<div className='a-radio-info__line'></div>}
        <div className='a-radio-info__texts'>
          <span className={isMenu ? 'a-radio-info__label-menu':'a-radio-info__label'}>{children}</span>
          <span className={isMenu ? 'a-radio-info__label-menu':'a-radio-info__label'}><small>社員番号:{children2}</small></span>
        </div>
      </div>
    </label>
  );
};
