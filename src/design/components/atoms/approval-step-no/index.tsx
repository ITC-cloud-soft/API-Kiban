import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';
import { Icon } from 'design/components/atoms/icon';
import { isNull } from 'lodash';

export interface ApprovalStepNoProps {
  requester?: boolean;
  requesterNew?: boolean;
  isDone?: boolean;
  name: React.ReactNode;
  modifiers?: ModifierProp<'auto'>;
  step?: number;
  name2?: React.ReactNode;
}

export const ApprovalStepNo: React.FC<ApprovalStepNoProps> = ({
  modifiers,
  step,
  name,
  requester,
  requesterNew,
  isDone = false,
  name2 = '',
}) => {
  //アイコンセット
  const statusa = `status-a-no${step}`;
  const statusb = `status-b-no${step}`;
  return (
    <div
      className={mapModifiers(
        'a-approval-step-no',
        modifiers,
        requester && 'has-requester',
        requesterNew && 'has-requesterNew',
        isDone && 'done'
      )}
    >
      {/* {!modifiers && <span className="a-approval-step-no__step-number">{step}</span>} */}
      {modifiers && (
        <span className="a-approval-step-no__icon">
          <Icon name={isDone ? statusa : statusb} />
        </span>
      )}
      <span className="a-approval-step-no__name">{name}</span>
      <span className="a-approval-step-no__name2">{name2 ? name2 : name}</span>
    </div>
  );
};

export const ApprovalStepNo2: React.FC<ApprovalStepNoProps> = ({
  modifiers,
  step,
  name,
  name2,
  requester,
  requesterNew,
  isDone = false,
}) => {
  //単位、デフォルト値は「円」
  const statusa = `status-a-no${step}`;
  const statusb = `status-b-no${step}`;
  return (
    <div
      className={mapModifiers(
        'a-approval-step-no',
        modifiers,
        requester && 'has-requester',
        requesterNew && 'has-requesterNew',
        isDone && 'done'
      )}
    >
      {/* {!modifiers && <span className="a-approval-step-no__step-number">{step}</span>} */}
      {modifiers && (
        <span className="a-approval-step-no__icon">
          <Icon name={isDone ? statusa : statusb} />
        </span>
      )}
      <span className="a-approval-step-no__name">
        {name}
        <br />
        {name2}{' '}
      </span>
    </div>
  );
};
export const ApprovalStepNo3: React.FC<ApprovalStepNoProps> = ({
  modifiers,
  step,
  name,
  requester,
  requesterNew,
  isDone = false,
  name2 = '',
}) => {

  return (
    <div
      className={mapModifiers(
        'a-approval-step-no',
        modifiers,
        requester && 'has-requester',
        requesterNew && 'has-requesterNew',
        isDone && 'done'
      )}
    >
      {/* {!modifiers && <span className="a-approval-step-no__step-number">{step}</span>} */}
      {modifiers && (
        <span className="a-approval-step__icon">
          <Icon name={isDone ? 'status-a' : 'status-b'} />
        </span>
      )}
      <span className="a-approval-step-no__name">{name}</span>
      <span className="a-approval-step-no__name2">{name2 ? name2 : name}</span>
    </div>
  );
};
