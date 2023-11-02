// Polyfill IE11
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'core-js/es/symbol';
import 'core-js/es/object';
import 'core-js/es/function';
import 'core-js/es/parse-int';
import 'core-js/es/parse-float';
import 'core-js/es/number';
import 'core-js/es/math';
import 'core-js/es/string';
import 'core-js/es/date';
import 'core-js/es/regexp';
import 'core-js/es/map';
import 'core-js/es/weak-map';
import 'core-js/es/set';
import 'core-js/es/array';
import 'classlist-polyfill';
import 'custom-event-polyfill';
import 'event-target-polyfill';
import 'element-closest-polyfill';
import 'element-dataset';
import 'calc-polyfill';
import './libs/element-remove-polyfill';
import './libs/template-polyfill';
import './libs/element-prepend-polyfill';

import { autoInitAddItemButton } from 'design/components/atoms/add-item-button/vanilla';
import { autoInitAccordion } from 'design/components/molecules/accordion/vanilla';
import { autoInitAddressSearch } from 'design/components/atoms/address-search-field/vanilla';
import { autoInitAlert } from 'design/components/atoms/alert/vanilla';
import { autoInitCalendarField } from 'design/components/atoms/calendar-field/vanilla';
import { autoInitModalOpener } from 'design/components/atoms/modal-opener/vanilla';
import { autoInitNavItem, NavItem } from 'design/components/atoms/nav-item/vanilla';
import { autoInitPagination } from 'design/components/atoms/pagination/vanilla';
import { autoInitPulldown, Pulldown } from 'design/components/atoms/pulldown/vanilla';
import { autoInitToast } from 'design/components/atoms/toast/vanilla';
import { autoInitUploadField, UploadField } from 'design/components/atoms/upload-field/vanilla';
import { autoInitUploadListItem, UploadListItem } from 'design/components/molecules/upload-list/vanllia';
import { autoInitTableActionButton } from 'design/components/atoms/table-action-button/vanilla';
import { autoInitSearchBar, SearchBar } from 'design/components/molecules/search-bar/vanilla';
import { autoInitVisitRecordInput } from 'design/components/molecules/visit-record-input/vanilla';
import { autoInitVisitRecordList } from 'design/components/organisms/visit-record-list/vanilla';
import { autoInitExpenseRecordInput } from 'design/components/molecules/expense-record-input/vanilla';
import { autoInitExpenseRecordList } from 'design/components/organisms/expense-record-list/vanilla';
import { autoInitDateRangeField } from 'design/components/atoms/date-range-field/vanilla';
import { autoInitTabs, Tabs } from 'design/components/molecules/tabs/vanilla';
import { autoInitModal } from 'design/components/organisms/modal/vanilla';
import { autoInitRequestInfo } from 'design/components/molecules/request-info/vanilla';
import { autoInitSettingMenu } from 'design/components/molecules/setting-menu/vanilla';
import { autoInitRecipientInput } from 'design/components/molecules/recipient-input/vanilla';
import { autoInitGlobalNavigation } from 'design/components/organisms/global-navigation/vanilla';
import { autoInitWhole } from 'design/components/organisms/whole/vanilla';
import { autoInitEmailTemplateEditor } from 'design/components/atoms/email-template-editor/vanilla';
import { autoInitSearchCurrentFilters } from 'design/components/molecules/search-current-filters/vanilla';
import { autoInitDataTable } from 'design/components/molecules/data-table/vanilla';
import { autoInitVisitRecordInputCust } from 'design/components/molecules/visit-record-input-cust/vanilla';
import { autoInitVisitRecordListCust } from 'design/components/organisms/visit-record-list-cust/vanilla';
import { autoInitUploadFieldSingle } from 'design/components/atoms/upload-field-single/vanilla';
import { autoInitCustItemButton } from 'design/components/atoms/cust-item-button/vanilla';
import { autoInitTabsLong, TabsLong } from 'design/components/molecules/tabs-long/vanilla';

document.addEventListener('DOMContentLoaded', () => {
  window.customPulldown = function (tagetdiv: string) {
    document.querySelectorAll<HTMLDivElement>(tagetdiv).forEach(element => new Pulldown({ element }));
  };
  window.customUpload = function () {
    document.querySelectorAll<HTMLDivElement>('.a-upload-field').forEach(element => new UploadField({ element }));
    document
      .querySelectorAll<HTMLLIElement>('.m-upload-list__item')
      .forEach(element => new UploadListItem({ element }));
  };
  window.customTabsLong = function () {
    document.querySelectorAll<HTMLDivElement>('.m-tabs-long').forEach(element => new TabsLong({ element }));
  };
  window.customTabs = function () {
    document.querySelectorAll<HTMLDivElement>('.m-tabs').forEach(element => new Tabs({ element }));
  };
  window.customNavItem = function (tagetdiv: string) {
    document.querySelectorAll<HTMLDivElement>(tagetdiv).forEach(element => new NavItem({ element }));
  };
  window.customSearchBar = function () {
    document.querySelectorAll<HTMLDivElement>('.m-search-bar').forEach(element => new SearchBar({ element }));
  };
  autoInitAddItemButton();
  autoInitAccordion();
  autoInitAddressSearch();
  autoInitAlert();
  autoInitCalendarField();
  autoInitModalOpener();
  autoInitNavItem();
  autoInitPagination();
  autoInitPulldown('.a-pulldown');
  autoInitToast();
  autoInitUploadField();
  autoInitUploadListItem();
  autoInitTableActionButton();
  autoInitSearchBar();
  autoInitVisitRecordInput();
  autoInitVisitRecordList();
  autoInitExpenseRecordInput();
  autoInitExpenseRecordList();
  autoInitDateRangeField();
  autoInitGlobalNavigation();
  autoInitModal();
  autoInitRequestInfo();
  autoInitSettingMenu();
  autoInitTabs();
  autoInitWhole();
  autoInitRecipientInput();
  autoInitEmailTemplateEditor();
  autoInitSearchCurrentFilters();
  autoInitDataTable();
  autoInitVisitRecordInputCust();
  autoInitVisitRecordListCust();
  autoInitUploadFieldSingle();
  autoInitCustItemButton();
  autoInitTabsLong();
});
