/// <reference path="../../types.d.ts" />
import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  /* change to ul, li */
  /** @type {AUE.ResourceElement} */
  const ul = document.createElement('ul');
  ul.dataset.aueResource = '/core/franklin/components/block/v1/block';
  ul.dataset.aueLabel = 'Cards';
  ul.dataset.aueBehavior = false;

  [...block.children].forEach((row) => {
    /** @type {AUE.ResourceElement} */
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    li.dataset.aueResource = '/core/franklin/components/block/v1/block/item';
    li.dataset.aueType = 'component';
    li.dataset.aueModel = 'card';
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((/** @type {AUE.PropElement} */img) => {
    img.dataset.aueProp = 'image';
    img.dataset.aueType = 'reference';
    img.dataset.aueLabel = 'Image';
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
  block.textContent = '';
  block.append(ul);
}
