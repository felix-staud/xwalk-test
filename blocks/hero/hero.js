/**
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  block.dataset.aueResource = 'urn:fcsconnection:core/franklin/components/block/v1/block';
  block.dataset.aueType = 'component';
  block.dataset.aueModel = 'hero';

  const h1 = block.querySelector('h1');
  h1.dataset.aueProp = 'text';
  h1.dataset.aueType = 'text';
  h1.dataset.aueModel = 'text';
}
