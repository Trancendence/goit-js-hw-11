function makeImageMarkup ({ hits }) {
    const markup = hits.map(({ largeImageURL, webformatURL, tags, likes, views,comments, downloads } ) => `<div class="photo-card">
    <a class="gallery-item" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
</div>`);

    return markup.join('')
}

export { makeImageMarkup };