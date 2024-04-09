/**
 * @param {AUE.ResourceElement} block
 */
export default function decorate(block) {
  block.dataset.aueResource = 'urn:aemconnection:/core/franklin/components/block/v1/block';
  block.dataset.aueModel = 'hero';
  block.dataset.aueType = 'component';
  block.dataset.aueLabel = 'Hero';

  /** @type {AUE.PropElement} */
  const h1 = block.querySelector('h1');
  h1.dataset.aueProp = 'text';
  h1.dataset.aueType = 'richtext';
  h1.dataset.aueLabel = 'Text';

  /** @type {AUE.PropElement} */
  const img = block.querySelector('img');
  img.dataset.aueProp = 'image';
  img.dataset.aueType = 'reference';
  img.dataset.aueLabel = 'Image';
  img.dataset.aueBehaviour = 'true';
}
