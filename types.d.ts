namespace AUE {
  type Type = 'component' | 'text' | 'richtext' | 'reference';
  type Model = 'hero' | 'section' | 'card' | 'columns';

  interface ResourceAttributes {
    dataset?: {
      aueResource?: string;
      aueType?: Type;
      aueModel?: Model;
      aueFilter?: string;
      aueLabel?: string;
      aueBehavior?: boolean;
    }
  }

  interface PropAttributes {
    dataset?: {
      aueProp?: string; 
      aueType?: Type;
    }
  }
}
