import { SearchBar } from 'design/components/molecules/search-bar/vanilla';

/* eslint-disable no-console */
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = [];

  const resultDataSearch = [
    { label: '結婚届', href: '#' },
    { label: '家族追加届け', href: '#' },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchBarEl: any = document.getElementById('search-bar-comp');
  const searchButtonEl = document.querySelector<HTMLButtonElement>('.a-search-button');
  const MenuEl = document.getElementById('menu') as HTMLDivElement;
  const MenuSearchResultEl = document.getElementById('menu-search-result') as HTMLDivElement;
  const inputEl = document.querySelector<HTMLInputElement>('.a-text-field__input');
  const tabEl = document.querySelector<HTMLDivElement>('.m-tabs');
  const tabsEl = document.querySelectorAll<HTMLLIElement>('.m-tabs__tab');
  const tabsContentEl = document.querySelectorAll('.m-tabs__content');

  MenuSearchResultEl.style.display = 'none';

  if (searchBarEl && searchButtonEl && inputEl && tabEl) {
    const searchBarComp = searchBarEl.__component as SearchBar;
    searchButtonEl.addEventListener('click', () => {
      if (inputEl.value.toLowerCase() === '') {
        result.splice(0);
        MenuEl.style.display = 'none';
        MenuSearchResultEl.style.display = 'block';
        // clear search result
        tabEl.style.setProperty('--active-index', '0');
        tabsEl.forEach(el => {
          if (el.classList.contains('m-tabs__tab--active')) {
            el.classList.remove('m-tabs__tab--active');
          } else {
            tabsEl[0].classList.add('m-tabs__tab--active');
          }
        });
        tabsContentEl.forEach(el => {
          if (el.classList.contains('m-tabs__content--active')) {
            el.classList.remove('m-tabs__content--active');
          } else {
            tabsContentEl[0].classList.add('m-tabs__content--active');
          }
        });

        for (let item = 0; item < resultDataSearch.length; item++) {
          const divEl = document.createElement('div');
          const aEl = document.createElement('a');
          const spanEl = document.createElement('span');

          divEl.className = 'a-nav-item a-nav-item--menu-item';
          aEl.className = 'a-nav-item__link';
          aEl.href = resultDataSearch[item].href;
          spanEl.className = 'a-nav-item__label';
          spanEl.textContent = resultDataSearch[item].label;

          aEl.append(spanEl);
          divEl.append(aEl);
          result.push(divEl);
        }
      }
      MenuSearchResultEl.innerHTML = '';
      MenuSearchResultEl.append(...result);
    });

    searchBarComp.onCloseClick = () => {
      MenuEl.style.display = 'block';
      MenuSearchResultEl.style.display = 'none';
      console.log("search bar's button close click!");
    };
  }
});

export {};
