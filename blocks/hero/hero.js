/**
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const h1 = block.querySelector('h1');
  h1.dataset.aueResource = 'urn:fcsconnection:core/franklin/components/block/v1/block';
  h1.dataset.aueType = 'component';
}
