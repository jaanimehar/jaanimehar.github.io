document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checkbox-item');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', applyFilters);
    });
});

function applyFilters() {
    const checkedValues = Array.from(document.querySelectorAll('.checkbox-item:checked')).map(function(checkbox) {
        return checkbox.value;
    });

    const items = document.querySelectorAll('.card');

    items.forEach(function(item) {
        const dataOptions = item.dataset.options.split(' ');
        if (checkedValues.every(function(value) { return dataOptions.includes(value); })) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
