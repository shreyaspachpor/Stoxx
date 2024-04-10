document.addEventListener('DOMContentLoaded', function() {
    var panelOne = document.querySelector('.form-panel.two').clientHeight,
        panelTwo = document.querySelector('.form-panel.two').scrollHeight;

    document.querySelectorAll('.form-panel.two:not(.active)').forEach(function(panel) {
        panel.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector('.form-toggle').classList.add('visible');
            document.querySelector('.form-panel.one').classList.add('hidden');
            document.querySelector('.form-panel.two').classList.add('active');
            document.querySelector('.form').style.height = panelTwo + 'px';
        });
    });

    document.querySelector('.form-toggle').addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.remove('visible');
        document.querySelector('.form-panel.one').classList.remove('hidden');
        document.querySelector('.form-panel.two').classList.remove('active');
        document.querySelector('.form').style.height = panelOne + 'px';
    });
});
