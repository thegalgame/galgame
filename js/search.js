import { aliasMap, searchData, manualMap } from './dict.js';

/* ===========================
 * 搜索核心工具函数
 * ===========================*/
export function expandQueryWithAlias(query) {
  const lower = query.toLowerCase();
  const expanded = new Set([query]);
  for (const [std, synonyms] of Object.entries(aliasMap)) {
    const matched = synonyms.some(s => s.toLowerCase().includes(lower) || lower.includes(s.toLowerCase()));
    if (matched) expanded.add(std);
  }
  return [...expanded];
}

/* ===========================
 * 页面初始化：绑定 DOM + 事件
 * ===========================*/
export function initSearch() {
  const searchInput   = document.getElementById('searchInput');
  const searchBtn     = document.getElementById('searchBtn');
  const searchDropdown= document.getElementById('searchDropdown');

  let currentHighlightIndex = -1;
  let filteredResults = [];

  /* ------- 搜索主逻辑 ------- */
  function performSearch(query) {
    const queries = expandQueryWithAlias(query.trim());
    const lowerQueries = queries.map(q => q.toLowerCase());

    if (!query.trim()) { hideDropdown(); return; }

    filteredResults = searchData.filter(item =>
      lowerQueries.some(q => item.name.toLowerCase().includes(q))
    );
    displayDropdown(filteredResults);
  }

  function displayDropdown(results) {
    searchDropdown.innerHTML = results.length
      ? results.map((it, i) =>
          `<div class="search-dropdown-item" data-index="${i}" data-target="${it.target}">
             <strong>${it.name}</strong> - ${it.type === 'category' ? '分类' : '游戏'}
           </div>`).join('')
      : '<div class="search-dropdown-item">未找到匹配项</div>';
    searchDropdown.classList.add('active');
    currentHighlightIndex = 0;
  }

  function hideDropdown() {
    searchDropdown.classList.remove('active');
    currentHighlightIndex = -1;
  }

  /* ------- 跳转 ------- */
  function navigateToTarget(targetId) {
    let el = document.getElementById(targetId)
          || document.querySelector(`[id*="${targetId}"]`);
    if (!el) {                       // 按标题模糊找
      const sections = document.querySelectorAll('section');
      for (const sec of sections) {
        const h2 = sec.querySelector('h2');
        if (!h2) continue;
        const t = h2.textContent.toLowerCase()
                  .replace(/[^\w\u4e00-\u9fa5]/g,'')
                  .replace(/系列|专区/g,'');
        const k = targetId.toLowerCase()
                  .replace(/[^\w\u4e00-\u9fa5]/g,'')
                  .replace(/-/g,'');
        if (t.includes(k) || k.includes(t)) { el = sec; break; }
      }
    }
    if (el) {
      const navH = document.querySelector('.navbar').offsetHeight;
      window.scrollTo({ top: el.offsetTop - navH - 20, behavior: 'smooth' });
      el.style.transition = 'all .5s';
      el.style.boxShadow  = '0 0 0 3px rgba(77,182,172,.5)';
      setTimeout(() => el.style.boxShadow = '', 2000);
    } else {
      const ori = searchInput.placeholder;
      searchInput.placeholder = `未找到"${targetId}"，请换词再试`;
      setTimeout(() => searchInput.placeholder = ori, 3000);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    hideDropdown();
    searchInput.value = '';
  }

  /* ------- 事件绑定 ------- */
  searchInput.addEventListener('input', () => performSearch(searchInput.value));
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && filteredResults.length && currentHighlightIndex >= 0)
      navigateToTarget(filteredResults[currentHighlightIndex].target);
    else if (e.key === 'ArrowDown') { e.preventDefault(); currentHighlightIndex++; updateHighlight(); }
    else if (e.key === 'ArrowUp')   { e.preventDefault(); currentHighlightIndex--; updateHighlight(); }
    else if (e.key === 'Escape')    hideDropdown();
  });
  searchBtn.addEventListener('click', () => {
    performSearch(searchInput.value);
    if (filteredResults.length && currentHighlightIndex >= 0)
      navigateToTarget(filteredResults[currentHighlightIndex].target);
  });
  searchDropdown.addEventListener('click', e => {
    const item = e.target.closest('.search-dropdown-item');
    if (item && item.dataset.index != null) {
      const idx = parseInt(item.dataset.index);
      navigateToTarget(filteredResults[idx].target);
    }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-container')) hideDropdown();
  });

  function updateHighlight() {
    searchDropdown.querySelectorAll('.search-dropdown-item').forEach((it, i) =>
      it.classList.toggle('highlight', i === currentHighlightIndex)
    );
  }
}
