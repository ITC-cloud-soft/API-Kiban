import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import beautify from 'js-beautify';

/**
 * Integrate vanila-example pages with html-webpack-plugin
 */
export function renderVanillaExample(page: React.ReactElement) {
  return () => {
    return beautify.html(`<!doctype html>${renderToStaticMarkup(page)}`, {
      indent_size: 2,
      indent_inner_html: true,
      content_unformatted: ['script'],
      extra_liners: [],
    });
  };
}
