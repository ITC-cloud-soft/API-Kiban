---
to: src/design/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.scss
sh: prettier --write src/design/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.scss
---
.<%= level[0] %>-<%= h.changeCase.param(name) %> {
  width: 64px;
  height: 64px;
  background-color: $color-base-white;
  border-radius: 50%;

  &--red {
    background-color: $color-primary-red;
  }

  &--blue {
    background-color: $color-primary-blue;
  }
}
