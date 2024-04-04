/**
 * @param {HTMLElement & AUE.ResourceAttributes} block
 */
export default function decorate(block) {
  // block.dataset.aueResource = 'urn:aemconnection:/core/franklin/components/block/v1/block';
  block.dataset = {
    ...block.dataset,
    // aueType: 'component',
    aueModel: 'hero',
  };

  /** @type {HTMLHeadingElement & AUE.PropAttributes} */
  const h1 = block.querySelector('h1');
  h1.dataset = {
    ...h1.dataset,
    aueProp: 'text',
    // aueType: 'richtext',
  };

  /** @type {HTMLImageElement & AUE.PropAttributes} */
  const img = block.querySelector('img');
  img.dataset = {
    ...img.dataset,
    aueProp: 'image',
    // aueType: 'reference',
  };
}
