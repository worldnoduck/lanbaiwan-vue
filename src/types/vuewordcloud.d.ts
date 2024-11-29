declare module 'vuewordcloud' {
  import { DefineComponent } from 'vue';

  export interface WordCloudProps {
    data: Array<{ name: string; value: number }>;
    nameKey?: string;
    valueKey?: string;
    color?: string;
    showTooltip?: boolean;
  }

  const WordCloud: DefineComponent<WordCloudProps>;
  export default WordCloud;
}