namespace AUE {
  type Type = 'component' | 'text' | 'richtext' | 'reference';
  type Model = 'hero' | 'section' | 'card' | 'columns';

  interface CommonDataset { 
    aueType?: Type;
    aueLabel?: string;
  }

  // Resource

  interface ResourceDataset extends CommonDataset {
    aueResource?: string;
    aueType?: Type;
    aueModel?: Model;
    aueFilter?: string;
    aueLabel?: string;
    aueBehavior?: boolean;
  }

  interface ResourceElement<E extends HTMLElement = HTMLElement> extends E {
    dataset?: ResourceDataset & E["dataset"];
  }

  // Prop

  interface PropDataset extends CommonDataset {
    aueProp?: string; 
  }

  interface PropElement<E extends HTMLElement = HTMLElement> extends E {
    dataset?: PropDataset & E["dataset"];
  }
}
