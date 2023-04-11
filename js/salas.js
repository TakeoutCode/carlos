const salas = [
  {
    title: 'silla 1',
    images: [
      '../assets/muebles/salas/sofa-beige-1.PNG',
      '../assets/muebles/salas/sofa-beige-2.PNG',
      '../assets/muebles/salas/sofa-beige-3.PNG',
      '../assets/muebles/salas/sofa-beige-4.PNG',
      '../assets/muebles/salas/sofa-beige-5.PNG',
    ],
    price: 2400,
    stock: 4,
  },
  {
    title: 'silla 1',
    images: [
      '../assets/muebles/salas/sofa-blanco-1.PNG',
      '../assets/muebles/salas/sofa-blanco-2.PNG',
      '../assets/muebles/salas/sofa-blanco-3.PNG',
      '../assets/muebles/salas/sofa-blanco-4.PNG',
      '../assets/muebles/salas/sofa-blanco-5.PNG',
    ],
    price: 2400,
    stock: 4,
  },
  {
    title: 'silla 1',
    images: [
      '../assets/muebles/salas/sofa-carbon-1.PNG',
      '../assets/muebles/salas/sofa-carbon-2.PNG',
      '../assets/muebles/salas/sofa-carbon-3.PNG',
      '../assets/muebles/salas/sofa-carbon-4.PNG',
      '../assets/muebles/salas/sofa-carbon-5.PNG',
    ],
    price: 2400,
    stock: 4,
  },
  {
    title: 'silla 1',
    images: [
      '../assets/muebles/salas/sofa-grande-1.PNG',
      '../assets/muebles/salas/sofa-grande-2.PNG',
      '../assets/muebles/salas/sofa-grande-3.PNG',
      '../assets/muebles/salas/sofa-grande-4.PNG',
      '../assets/muebles/salas/sofa-grande-5.PNG',
    ],
    price: 2400,
    stock: 4,
  },
  {
    title: 'silla 1',
    images: [
      '../assets/muebles/salas/sofa-gris-1.PNG',
      '../assets/muebles/salas/sofa-gris-2.PNG',
      '../assets/muebles/salas/sofa-gris-3.PNG',
      '../assets/muebles/salas/sofa-gris-4.PNG',
      '../assets/muebles/salas/sofa-gris-5.PNG',
    ],
    price: 2400,
    stock: 4,
  },
  {
    title: 'silla 1',
    images: [
      '../assets/muebles/salas/sofa-minimalista-1.PNG',
      '../assets/muebles/salas/sofa-minimalista-2.PNG',
      '../assets/muebles/salas/sofa-minimalista-3.PNG',
      '../assets/muebles/salas/sofa-minimalista-4.PNG',
      '../assets/muebles/salas/sofa-minimalista-5.PNG',
    ],
    price: 2400,
    stock: 4,
  },
  {
    title: 'silla 1',
    images: [
      '../assets/muebles/salas/sofa-negro-1.PNG',
      '../assets/muebles/salas/sofa-negro-2.PNG',
      '../assets/muebles/salas/sofa-negro-3.PNG',
      '../assets/muebles/salas/sofa-negro-4.PNG',
      '../assets/muebles/salas/sofa-negro-5.PNG',
    ],
    price: 2400,
    stock: 4,
  },
  {
    title: 'silla 1',
    images: [
      '../assets/muebles/salas/sofa-triple-1.PNG',
      '../assets/muebles/salas/sofa-triple-2.PNG',
      '../assets/muebles/salas/sofa-triple-3.PNG',
      '../assets/muebles/salas/sofa-triple-4.PNG',
      '../assets/muebles/salas/sofa-triple-5.PNG',
    ],
    price: 2400,
    stock: 4,
  },
];

const contenedorProducts = document.getElementById('productos');
const contenedorDescripciones = document.getElementById('descripciones');

salas.forEach((product, indx) => {
  createCard(product, indx);
  createDescription(product, indx);
  const card = document.getElementById(`card-${indx + 1}`);
  const description = document.getElementById(`description-${indx + 1}`);
  const colse = document.getElementById(`close-${indx + 1}`);

  card.addEventListener('click', function (e) {
    description.classList.toggle('producto__background--active');
  });

  colse.addEventListener('click', function (e) {
    description.classList.toggle('producto__background--active');
  });
});

function createCard(product, indx) {
  const productLink = document.createElement('a');
  productLink.setAttribute('href', `#image${indx + 1}-1`);
  productLink.classList.add('producto__link');

  const productCard = document.createElement('article');
  productCard.classList.add('producto');
  productCard.setAttribute('id', `card-${indx + 1}`);

  const productImgContainer = document.createElement('div');
  productImgContainer.classList.add('producto__img');

  const productImg = document.createElement('img');
  productImg.setAttribute('alt', product.title);
  productImg.setAttribute('src', product.images[0]);

  const productProperties = document.createElement('div');
  productProperties.classList.add('producto__propiedades');

  const productTitle = document.createElement('h3');
  productTitle.classList.add('producto__title');
  const productTitleText = document.createTextNode(product.title);

  const productCharacteristics = document.createElement('div');
  productCharacteristics.classList.add('producto__caracteristicas');

  const productPrice = document.createElement('p');
  productPrice.classList.add('producto__precio');
  const productPriceText = document.createTextNode(`Precio: ${product.price}`);

  const productStock = document.createElement('p');
  productStock.classList.add('producto__stock');
  const productStockText = document.createTextNode(`stock: ${product.stock}`);

  productLink.appendChild(productCard);
  productCard.appendChild(productImgContainer);
  productImgContainer.appendChild(productImg);
  productCard.appendChild(productProperties);
  productProperties.appendChild(productTitle);
  productTitle.appendChild(productTitleText);
  productProperties.appendChild(productCharacteristics);
  productCharacteristics.appendChild(productPrice);
  productPrice.appendChild(productPriceText);
  productCharacteristics.appendChild(productStock);
  productStock.appendChild(productStockText);

  contenedorProducts.appendChild(productLink);
}

function createDescription(product, indx) {
  const productBackgroud = document.createElement('div');
  productBackgroud.classList.add('producto__background');
  productBackgroud.setAttribute('id', `description-${indx + 1}`);

  const productArticle = document.createElement('article');
  productArticle.classList.add('producto__article');

  const productGalery = document.createElement('figure');
  productGalery.classList.add('producto__galeria');

  const productMain = document.createElement('div');
  productMain.classList.add('producto__main');

  product.images.forEach((img, index) => {
    const productImageGalery = document.createElement('div');
    productImageGalery.classList.add('image-galeria');
    productImageGalery.setAttribute('id', `image${indx + 1}-${index + 1}`);

    const productBefore = document.createElement('a');
    productBefore.setAttribute(
      'href',
      `#image${indx + 1}-${index === 0 ? '5' : index}`
    );
    const productArrowLeft = document.createElement('img');
    productArrowLeft.classList.add('product__arrow');
    productArrowLeft.setAttribute('alt', `Mesa-${index + 1}`);
    productArrowLeft.setAttribute(
      'src',
      '../assets/icons/arrow-simple-left.svg'
    );

    const productMainImg = document.createElement('img');
    productMainImg.setAttribute('alt', `Mesa-${index + 1}`);
    productMainImg.setAttribute('src', img);
    productMainImg.classList.add('producto__mainImage');

    const productNext = document.createElement('a');
    productNext.setAttribute(
      'href',
      `#image${indx + 1}-${index === 4 ? '1' : index + 2}`
    );
    const productArrowRight = document.createElement('img');
    productArrowRight.classList.add('product__arrow');
    productArrowRight.setAttribute('alt', `Mesa-${index + 2}`);
    productArrowRight.setAttribute(
      'src',
      '../assets/icons/arrow-simple-right.svg'
    );

    productImageGalery.appendChild(productBefore);
    productBefore.appendChild(productArrowLeft);

    productImageGalery.appendChild(productMainImg);

    productImageGalery.appendChild(productNext);
    productNext.appendChild(productArrowRight);

    productMain.appendChild(productImageGalery);
  });

  const productCarousel = document.createElement('div');
  productCarousel.classList.add('producto__carousel');

  product.images.forEach((img, index) => {
    const productTarget = document.createElement('a');
    productTarget.setAttribute('href', `#image${indx + 1}-${index + 1}`);

    const productCarouselImg = document.createElement('img');
    productCarouselImg.classList.add('producto__carouselImage');
    productCarouselImg.setAttribute('alt', `Mesa-${index + 1}`);
    productCarouselImg.setAttribute('src', img);

    productCarousel.appendChild(productTarget);
    productTarget.appendChild(productCarouselImg);
  });

  const descripcion = document.createElement('div');
  descripcion.classList.add('descripcion');

  const descripcionClose = document.createElement('img');
  descripcionClose.classList.add('descripcion__close');
  descripcionClose.setAttribute('alt', `Close description`);
  descripcionClose.setAttribute('src', '../assets/icons/close.svg');
  descripcionClose.setAttribute('id', `close-${indx + 1}`);

  const presentation = document.createElement('div');
  presentation.classList.add('descripcion-presentation');

  const descriptionTitle = document.createElement('h3');
  descriptionTitle.classList.add('descripcion__title');
  const descriptionTitleText = document.createTextNode(product.title);

  const descripcionHeart = document.createElement('img');
  descripcionHeart.classList.add('descripcion__like');
  descripcionHeart.setAttribute('alt', `Like description`);
  descripcionHeart.setAttribute('src', '../assets/icons/heart.svg');
  descripcionHeart.setAttribute('id', `like-${indx + 1}`);

  const availability = document.createElement('div');
  availability.classList.add('descripcion-availability');

  const descriptionPrice = document.createElement('p');
  descriptionPrice.classList.add('descripcion__availability--price');
  descriptionPrice.classList.add('descripcion__availability');
  const descriptionPriceText = document.createTextNode(`$${product.price}`);

  const descriptionStock = document.createElement('p');
  descriptionStock.classList.add('descripcion__availability--stock');
  descriptionStock.classList.add('descripcion__availability');
  const descriptionStockText = document.createTextNode(
    `Stock: ${product.stock}`
  );

  const descriptionObtaining = document.createElement('p');
  descriptionObtaining.classList.add('descripcion__obtaining');
  const descriptionObtainingText = document.createTextNode(`Cómo conseguirlo`);

  const descriptionMethods = document.createElement('div');
  descriptionMethods.classList.add('descripcion-methods');

  const descriptionDelivery = document.createElement('div');
  descriptionDelivery.classList.add('descripcion__method--delivery');
  descriptionDelivery.classList.add('descripcion__method');

  const descripcionDeliveryImage = document.createElement('img');
  descripcionDeliveryImage.classList.add('descripcion__icon');
  descripcionDeliveryImage.setAttribute('alt', `Delivery description`);
  descripcionDeliveryImage.setAttribute('src', '../assets/icons/delivery.svg');

  const descriptionDeliveryText = document.createElement('div');
  descriptionDeliveryText.classList.add('descripcion__methodsText');

  const delivery = document.createElement('p');
  delivery.classList.add('descripcion--method');
  const deliveryText = document.createTextNode(`La entrega`);

  const availabilityDelivery = document.createElement('div');
  availabilityDelivery.classList.add('descripcion__availabilityDelivery');

  const availabilityStatus = document.createElement('span');
  availabilityStatus.classList.add('descripcion__status');

  const deliveryStatus = document.createElement('p');
  deliveryStatus.classList.add('descripcion__delivery');
  const deliveryStatusText = document.createTextNode(`Disponible`);

  const deliveryOptions = document.createElement('p');
  deliveryOptions.classList.add('descripcion__options');
  const deliveryOptionsText = document.createTextNode(
    `Ver opciones al finalizar la compra`
  );

  const descriptionStore = document.createElement('div');
  descriptionStore.classList.add('descripcion__method--store');
  descriptionStore.classList.add('descripcion__method');

  const descripcionStoreImage = document.createElement('img');
  descripcionStoreImage.classList.add('descripcion__icon');
  descripcionStoreImage.setAttribute('alt', `Store description`);
  descripcionStoreImage.setAttribute(
    'src',
    '../assets/icons/store-description.svg'
  );

  const descriptionStoreText = document.createElement('div');
  descriptionStoreText.classList.add('descripcion__methodsText');

  const store = document.createElement('p');
  store.classList.add('descripcion--method');
  const storeText = document.createTextNode(`En la tienda`);

  const storeAvailability = document.createElement('p');
  storeAvailability.classList.add('descripcion__storeAvailability');
  const storeAvailabilityText = document.createTextNode(
    `Consultar stock en tienda`
  );

  const descriptionButton = document.createElement('button');
  descriptionButton.classList.add('descripcion__button');
  const descriptionButtonText = document.createTextNode(`Agregar al carrito`);

  productBackgroud.appendChild(productArticle);
  productArticle.appendChild(productGalery);
  productGalery.appendChild(productMain);
  productGalery.appendChild(productCarousel);
  productArticle.appendChild(descripcion);
  descripcion.appendChild(presentation);
  descripcion.appendChild(descripcionClose);
  presentation.appendChild(descriptionTitle);
  descriptionTitle.appendChild(descriptionTitleText);
  presentation.appendChild(descripcionHeart);
  descripcion.appendChild(availability);
  availability.appendChild(descriptionPrice);
  descriptionPrice.appendChild(descriptionPriceText);
  availability.appendChild(descriptionStock);
  descriptionStock.appendChild(descriptionStockText);
  descripcion.appendChild(descriptionObtaining);
  descriptionObtaining.appendChild(descriptionObtainingText);
  descripcion.appendChild(descriptionMethods);
  descriptionMethods.appendChild(descriptionDelivery);
  descriptionDelivery.appendChild(descripcionDeliveryImage);
  descriptionDelivery.appendChild(descriptionDeliveryText);
  descriptionDeliveryText.appendChild(delivery);
  delivery.appendChild(deliveryText);
  descriptionDeliveryText.appendChild(availabilityDelivery);
  availabilityDelivery.appendChild(availabilityStatus);
  availabilityDelivery.appendChild(deliveryStatus);
  deliveryStatus.appendChild(deliveryStatusText);
  descriptionDeliveryText.appendChild(deliveryOptions);
  deliveryOptions.appendChild(deliveryOptionsText);
  descriptionMethods.appendChild(descriptionStore);
  descriptionStore.appendChild(descripcionStoreImage);
  descriptionStore.appendChild(descriptionStoreText);
  descriptionStoreText.appendChild(store);
  store.appendChild(storeText);
  descriptionStoreText.appendChild(storeAvailability);
  storeAvailability.appendChild(storeAvailabilityText);
  descripcion.appendChild(descriptionButton);
  descriptionButton.appendChild(descriptionButtonText);

  contenedorDescripciones.appendChild(productBackgroud);
}
