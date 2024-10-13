const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');

    categories.forEach(item => {
        // btn create
        const btn = document.createElement('button');
        btn.classList = 'btn';
        btn.innerText = item.category;

        // show btn
        categoryContainer.append(btn);
    })
}

loadCategories();