document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 获取表单数据
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        // 这里可以添加表单验证逻辑

        try {
            // 这里可以添加实际的表单提交逻辑
            console.log('Form submitted:', formData);
            
            // 显示成功消息
            alert('消息已发送，我们会尽快与您联系！');
            contactForm.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('发送失败，请稍后重试。');
        }
    });
}); 