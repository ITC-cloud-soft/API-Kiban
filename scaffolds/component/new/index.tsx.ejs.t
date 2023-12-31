---
to: src/design/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.tsx
sh: prettier --write src/design/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.tsx
---
import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';

export interface <%= h.changeCase.pascal(name) %>Props {
  children?: React.ReactNode,
  modifiers?: ModifierProp<'red' | 'blue'>;
  id?: string;
  className?: string;
}

export const <%= h.changeCase.pascal(name) %>: React.FC<<%= h.changeCase.pascal(name) %>Props> = ({
  children,
  modifiers,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('<%= level[0] %>-<%= h.changeCase.param(name) %>', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
};
