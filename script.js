// script.js
// 交互功能：点击表格行高亮，平滑滚动到锚点

document.addEventListener('DOMContentLoaded', function() {
  // 表格行点击高亮
  const rows = document.querySelectorAll('tbody tr');
  rows.forEach(row => {
    row.addEventListener('click', function() {
      // 移除所有高亮
      rows.forEach(r => r.classList.remove('highlight'));
      // 添加高亮
      this.classList.add('highlight');
    });
  });

  // 平滑滚动到锚点（用于导航）
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});