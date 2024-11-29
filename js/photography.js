// 作品筛选功能
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.querySelector('.portfolio-modal');
    const modalImage = modal.querySelector('.modal-image img');
    const modalTitle = modal.querySelector('.modal-info h3');
    const modalDescription = modal.querySelector('.modal-description');
    const closeModal = modal.querySelector('.close-modal');

    // 筛选功能
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有活动状态
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === itemCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 模态框功能
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const image = item.querySelector('img').src;
            const title = item.querySelector('h3').textContent;
            const description = item.querySelector('p').textContent;

            modalImage.src = image;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // 关闭模态框
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // 点击模态框外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}); 